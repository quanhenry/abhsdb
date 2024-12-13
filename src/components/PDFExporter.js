import React, { useRef, useState } from "react";
import { FileDown } from "lucide-react";

const PDFExporter = ({ children }) => {
  const contentRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    try {
      setIsGenerating(true);

      // Dynamically import required libraries
      const jsPDF = (await import("jspdf")).default;
      const html2canvas = (await import("html2canvas")).default;

      // Get the content element
      const content = contentRef.current;

      // Wait for all images to load
      const images = content.getElementsByTagName("img");
      await Promise.all(
        [...images].map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      // Get the full height of the content
      const originalHeight = content.scrollHeight;
      const originalStyle = window.getComputedStyle(content);

      // Temporarily modify the content for better capture
      content.style.height = "auto";
      content.style.overflow = "visible";
      content.style.position = "relative";
      document.body.style.overflow = "visible";

      // Capture the content
      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        logging: true,
        allowTaint: true,
        height: originalHeight,
        windowHeight: originalHeight,
        scrollY: -window.scrollY,
        onclone: (clonedDoc) => {
          const clonedContent = clonedDoc.querySelector(".pdf-content");
          if (clonedContent) {
            clonedContent.style.height = "auto";
            clonedContent.style.overflow = "visible";
          }
        },
      });

      // Restore original styles
      content.style.height = originalStyle.height;
      content.style.overflow = originalStyle.overflow;
      content.style.position = originalStyle.position;
      document.body.style.overflow = "auto";

      // Initialize PDF with A3 size
      const pdf = new jsPDF("p", "mm", "a4");

      const contentWidth = canvas.width;
      const contentHeight = canvas.height;

      // Calculate dimensions to fit the page
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate scaling to fit width while maintaining aspect ratio
      const scale = pdfWidth / contentWidth;
      const scaledHeight = contentHeight * scale;

      // Split content into pages
      let remainingHeight = scaledHeight;
      let currentPosition = 0;

      while (remainingHeight > 0) {
        // Add new page if not the first page
        if (currentPosition > 0) {
          pdf.addPage();
        }

        const pageContentHeight = Math.min(pdfHeight, remainingHeight);
        const sourceY = currentPosition / scale;

        pdf.addImage(
          canvas,
          "PNG",
          0,
          -currentPosition,
          pdfWidth,
          scaledHeight,
          "",
          "FAST"
        );

        currentPosition += pdfHeight;
        remainingHeight -= pdfHeight;
      }

      pdf.save("ideation-document.pdf");
    } catch (error) {
      console.error("PDF Generation Error:", error);
      alert("Có lỗi khi tạo PDF: " + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  // Trong file PDFExporter.jsx
  return (
    <div className="w-full">
      <div className="flex justify-start gap-4 mb-4">
        {" "}
        {/* Tăng gap lên 4 */}
        <button
          onClick={generatePDF}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <FileDown className="w-4 h-4" />
          Xuất PDF
        </button>
      </div>

      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default PDFExporter;
