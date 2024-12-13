import React from "react";

const SWOTAnalysis = () => {
  const sections = [
    {
      title: "Điểm mạnh",
      icon: "🌟",
      color: "emerald",
      items: [
        "Không gian xanh độc đáo với khu vườn được thiết kế chuyên nghiệp",
        "Vị trí đắc địa trong khu vực trung tâm thành phố",
        "Menu đồ uống đa dạng kết hợp với các món ăn nhẹ từ nguyên liệu organic",
        "Đội ngũ nhân viên được đào tạo bài bản về văn hóa phục vụ",
        "Concept độc đáo kết hợp giữa cafe và khu vườn tạo điểm nhấn riêng biệt",
      ],
    },
    {
      title: "Điểm yếu",
      icon: "⚡",
      color: "amber",
      items: [
        "Chi phí đầu tư và vận hành cao cho việc duy trì khu vườn",
        "Công suất phục vụ có thể bị hạn chế do ưu tiên không gian xanh",
        "Thời gian setup và đào tạo nhân viên kéo dài",
        "Giá thành sản phẩm cao hơn so với các quán cafe thông thường",
        "Phụ thuộc nhiều vào thời tiết do có không gian ngoài trời",
      ],
    },
    {
      title: "Cơ hội",
      icon: "🎯",
      color: "sky",
      items: [
        "Xu hướng tiêu dùng xanh và lối sống healthy đang phát triển mạnh",
        "Tiềm năng mở rộng sang các dịch vụ liên quan như workshop làm vườn",
        "Cơ hội hợp tác với các công ty tổ chức sự kiện và chụp ảnh",
        "Khả năng phát triển thương hiệu organic coffee độc quyền",
        "Thu hút khách hàng từ các công ty lân cận cho các cuộc họp không chính thức",
      ],
    },
    {
      title: "Thách thức",
      icon: "⚠️",
      color: "rose",
      items: [
        "Cạnh tranh gay gắt từ các chuỗi cafe lớn trong khu vực",
        "Biến động giá nguyên liệu organic và chi phí nhân công",
        "Rủi ro từ thời tiết cực đoan ảnh hưởng đến khu vườn",
        "Thay đổi thói quen tiêu dùng sau đại dịch",
        "Khó khăn trong việc duy trì chất lượng dịch vụ nhất quán",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg mx-auto p-8">
        <div className="mb-12 border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-800">Phân tích SWOT</h1>
          <p className="text-lg text-gray-600 mt-2">Dự án: Cafe Garden</p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div
                className={`bg-${section.color}-100 px-6 py-4 border-b border-${section.color}-200`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h2 className={`text-xl font-bold text-${section.color}-800`}>
                    {section.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="space-y-4">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-${section.color}-500 mt-2`}
                      />
                      <p className="text-gray-700 flex-1">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t text-gray-500 text-sm">
          <p className="mb-1">
            * Phân tích dựa trên đánh giá thị trường và khảo sát nội bộ
          </p>
          <p>* Cập nhật: Tháng 11/2024</p>
        </div>
      </div>
    </div>
  );
};

export default SWOTAnalysis;
