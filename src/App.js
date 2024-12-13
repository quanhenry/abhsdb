import React from "react";
import "./App.css";
import BusinessModelSection from "./components/10";
import PDFExporter from "./components/PDFExporter";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App">
      <main className="p-4">
        <PDFExporter>
          <TextEditor>
            <BusinessModelSection />
          </TextEditor>
        </PDFExporter>
      </main>
    </div>
  );
}

export default App;
