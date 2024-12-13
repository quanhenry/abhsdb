import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const MarketShareChart = () => {
  const data = [
    { name: "Doanh nghiệp lớn (Enterprise)", value: 35 },
    { name: "Doanh nghiệp vừa (SME)", value: 45 },
    { name: "Startup & Cá nhân", value: 20 },
  ];

  const COLORS = ["#4A90E2", "#50C878", "#FFB347"];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-[210mm] h-[297mm] shadow-lg mx-auto overflow-hidden">
        {/* Container chính với padding và spacing */}
        <div className="p-8 h-full flex flex-col">
          {/* Header */}
          <div className="text-2xl font-bold text-center mb-6">
            Phân Khúc Thị Trường Theo Quy Mô Doanh Nghiệp
          </div>

          {/* Biểu đồ */}
          <div className="h-[40%] mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  outerRadius="90%"
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Phần nội dung */}
          <div className="space-y-4 text-gray-700 flex-grow">
            <p className="text-justify leading-relaxed">
              Phân tích phân khúc thị trường cho thấy một sự phân bổ đa dạng
              trong cơ cấu khách hàng. Doanh nghiệp vừa (SME) chiếm tỷ trọng lớn
              nhất với 45% thị phần, phản ánh vai trò quan trọng của phân khúc
              này trong việc thúc đẩy tăng trưởng kinh tế và tạo việc làm.
            </p>
            <p className="text-justify leading-relaxed">
              Doanh nghiệp lớn (Enterprise) đứng thứ hai với 35% thị phần, thể
              hiện sức mạnh và sự ổn định của các tập đoàn lớn trong nền kinh
              tế. Mặc dù số lượng doanh nghiệp trong phân khúc này ít hơn, nhưng
              giá trị và quy mô giao dịch thường lớn hơn đáng kể.
            </p>
            <p className="text-justify leading-relaxed">
              Startup và cá nhân chiếm 20% thị phần, một con số không nhỏ cho
              thấy tiềm năng phát triển của các doanh nghiệp khởi nghiệp và xu
              hướng kinh doanh cá nhân đang ngày càng phát triển. Phân khúc này
              thường được đặc trưng bởi sự linh hoạt cao và khả năng đổi mới
              sáng tạo.
            </p>

            {/* Phần đề xuất */}
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <p className="font-semibold mb-4 text-lg">
                Đề xuất chiến lược tiếp cận:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <span className="font-medium">SME (45%):</span> Cần được ưu
                  tiên với các giải pháp vừa túi tiền và dễ triển khai
                </li>
                <li>
                  <span className="font-medium">Enterprise (35%):</span> Cần các
                  giải pháp tùy chỉnh cao và dịch vụ hỗ trợ chuyên nghiệp
                </li>
                <li>
                  <span className="font-medium">Startup & Cá nhân (20%):</span>{" "}
                  Cần các gói giải pháp linh hoạt và khả năng mở rộng dễ dàng
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketShareChart;
