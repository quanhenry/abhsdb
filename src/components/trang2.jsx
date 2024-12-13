import React from 'react'
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell,
    ResponsiveContainer
} from 'recharts'

const BusinessPlan = () => {
    const businessModelData = [
        { name: 'Bánh mì', value: 50 },
        { name: 'Xôi', value: 30 },
        { name: 'Bánh bao', value: 20 },
    ]

    const marketingBudgetData = [
        { name: 'Online Ads', budget: 10000000 },
        { name: 'Offline Marketing', budget: 5000000 },
        { name: 'Influencer', budget: 3000000 },
        { name: 'PR Events', budget: 2000000 },
    ]

    const revenueProjectionData = [
        { month: 'T1', revenue: 30000000 },
        { month: 'T2', revenue: 35000000 },
        { month: 'T3', revenue: 40000000 },
        { month: 'T4', revenue: 45000000 },
        { month: 'T5', revenue: 50000000 },
        { month: 'T6', revenue: 55000000 },
    ]

    const operatingCostsData = [
        { name: 'Nguyên liệu', value: 20000000 },
        { name: 'Nhân công', value: 15000000 },
        { name: 'Tiền thuê mặt bằng', value: 10000000 },
        { name: 'Điện nước', value: 2000000 },
        { name: 'Marketing', value: 3000000 },
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']

    return (
        <div className="w-[210mm] min-h-[297mm] mx-auto bg-white p-8">
            <h1 className="text-3xl font-bold mb-6 text-left">BỘ TÀI LIỆU HOẠCH ĐỊNH - Bánh mì Ô thuỷ</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-left">1. Kế hoạch Kinh doanh Chi tiết</h2>
                
                <h3 className="text-xl font-medium mb-2 text-left">Mô hình kinh doanh</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Bánh mì Ô thuỷ là một mô hình kinh doanh đồ ăn sáng tập trung vào ba sản phẩm chính: bánh mì, xôi và bánh bao. Chúng tôi sẽ cung cấp các sản phẩm chất lượng cao, tươi ngon với giá cả hợp lý tại khu vực Tân Triều, Thanh Trì, Hà Nội.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Chiến lược thị trường</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Tập trung vào đối tượng khách hàng là người đi làm, học sinh, sinh viên trong khu vực. Chúng tôi sẽ xây dựng thương hiệu dựa trên chất lượng sản phẩm, dịch vụ nhanh chóng và không gian sạch sẽ, thân thiện.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Kế hoạch tài chính</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Vốn ban đầu: 50.000.000 VND. Dự kiến đạt điểm hòa vốn sau 6 tháng hoạt động. Mục tiêu doanh thu 50.000.000 VND/tháng sau 3 tháng đầu tiên.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Chi tiết sản phẩm/dịch vụ</h3>
                <ul className="list-disc pl-6 mb-4 text-left">
                    <li className="mb-2 text-left">Bánh mì: Đa dạng nhân, bánh mì giòn, nhân tươi ngon</li>
                    <li className="mb-2 text-left">Xôi: Xôi gà, xôi đậu xanh, xôi ngô</li>
                    <li className="mb-2 text-left">Bánh bao: Nhân thịt, nhân chay, nhân đậu xanh</li>
                </ul>

                <h3 className="text-xl font-medium mb-2 text-left">Tính năng chính</h3>
                <ul className="list-disc pl-6 mb-4 text-left">
                    <li className="mb-2 text-left">Chất lượng sản phẩm cao, nguyên liệu tươi mới</li>
                    <li className="mb-2 text-left">Dịch vụ nhanh chóng, phù hợp với nhịp sống bận rộn</li>
                    <li className="mb-2 text-left">Không gian sạch sẽ, thân thiện</li>
                </ul>

                <h3 className="text-xl font-medium mb-2 text-left">Điểm khác biệt</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Bánh mì Ô thuỷ sẽ nổi bật với công thức đặc biệt cho bánh mì giòn lâu, kết hợp với nhân bánh đa dạng và hương vị độc đáo. Chúng tôi cũng sẽ cung cấp option healthy cho những khách hàng quan tâm đến sức khỏe.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-left">2. Chiến lược thị trường</h2>

                <h3 className="text-xl font-medium mb-2 text-left">Chiến lược quảng cáo</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Tập trung vào digital marketing, đặc biệt là quảng cáo trên Facebook và Instagram để tiếp cận khách hàng mục tiêu. Kết hợp với các chương trình khuyến mãi và sampling tại các khu vực văn phòng, trường học lân cận.
                </p>

                <div className="flex flex-col items-center mb-6">
                    <div className="w-full flex justify-center mb-2">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={marketingBudgetData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="budget"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {marketingBudgetData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">Phân bổ ngân sách marketing</p>
                </div>

                <h3 className="text-xl font-medium mb-2 text-left">Thông điệp chính</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    "Bánh mì Ô thuỷ - Hương vị truyền thống, chất lượng hiện đại". Chúng tôi muốn truyền tải thông điệp về sự kết hợp giữa hương vị quen thuộc của ẩm thực Việt Nam với tiêu chuẩn chất lượng và dịch vụ hiện đại.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Kênh phân phối</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Chủ yếu bán trực tiếp tại cửa hàng. Trong tương lai, sẽ mở rộng sang dịch vụ giao hàng thông qua các ứng dụng như Grab Food, Baemin để tăng khả năng tiếp cận khách hàng.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-left">3. Kế hoạch Marketing & Vận hành</h2>

                <h3 className="text-xl font-medium mb-2 text-left">Chiến lược thương hiệu</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Xây dựng Bánh mì Ô thuỷ trở thành thương hiệu đồ ăn sáng uy tín, chất lượng tại khu vực Tân Triều. Tập trung vào việc tạo ra trải nghiệm khách hàng tốt nhất từ chất lượng sản phẩm đến dịch vụ.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Kế hoạch truyền thông</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Sử dụng mạng xã hội để xây dựng cộng đồng khách hàng, chia sẻ nội dung về quy trình sản xuất, nguồn nguyên liệu. Tổ chức các sự kiện nhỏ tại cửa hàng để tăng tương tác với khách hàng.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Digital marketing</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Tập trung vào SEO local để tăng hiển thị trên Google Maps. Sử dụng Facebook Ads để tiếp cận khách hàng tiềm năng trong bán kính 3km. Xây dựng content marketing trên Instagram để thu hút giới trẻ.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Quy trình vận hành</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Áp dụng quy trình chuẩn trong sản xuất và phục vụ. Đảm bảo vệ sinh an toàn thực phẩm. Tối ưu hóa quy trình order và phục vụ để giảm thời gian chờ đợi của khách hàng.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Cấu trúc tổ chức</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Giai đoạn đầu: 1 quản lý, 2 nhân viên bán hàng, 1 đầu bếp. Khi mở rộng sẽ bổ sung thêm nhân sự cho các vị trí chuyên biệt như marketing, kế toán.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Kế hoạch nhân sự</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Tuyển dụng nhân viên địa phương, đào tạo kỹ năng phục vụ và quy trình làm việc. Xây dựng chính sách đãi ngộ hấp dẫn để giữ chân nhân tài.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-left">4. Kế hoạch quản lý & Tài chính</h2>

                <h3 className="text-xl font-medium mb-2 text-left">Kiến trúc hệ thống công nghệ quản lý</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Sử dụng phần mềm quản lý bán hàng KiotViet để theo dõi doanh thu, quản lý kho. Áp dụng hệ thống POS để tối ưu hóa quá trình thanh toán. Sử dụng Canva để thiết kế menu và content marketing.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Lộ trình phát triển</h3>
                <ul className="list-disc pl-6 mb-4 text-left">
                    <li className="mb-2 text-left">Tháng 1-3: Ổn định hoạt động, xây dựng quy trình</li>
                    <li className="mb-2 text-left">Tháng 4-6: Mở rộng menu, tăng cường marketing</li>
                    <li className="mb-2 text-left">Tháng 7-12: Đánh giá hiệu quả, lên kế hoạch mở rộng</li>
                </ul>

                <h3 className="text-xl font-medium mb-2 text-left">Chi phí cố định</h3>
                <div className="flex flex-col items-center mb-6">
                    <div className="w-full flex justify-center mb-2">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={operatingCostsData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {operatingCostsData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">Chi phí vận hành hàng tháng</p>
                </div>

                <h3 className="text-xl font-medium mb-2 text-left">Lợi nhuận dự kiến</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Dự kiến đạt lợi nhuận ròng 15-20% sau 6 tháng hoạt động, tương đương 7.5-10 triệu đồng/tháng.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Thời gian hoàn vốn</h3>
                <div className="flex flex-col items-center mb-6">
                    <div className="w-full flex justify-center mb-2">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={revenueProjectionData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">Dự báo doanh thu 6 tháng đầu</p>
                </div>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Dự kiến hoàn vốn sau 12-15 tháng hoạt động, dựa trên tốc độ tăng trưởng doanh thu và kiểm soát chi phí hiệu quả.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Phân bổ ngân sách</h3>
                <div className="flex flex-col items-center mb-6">
                    <div className="w-full flex justify-center mb-2">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={businessModelData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {businessModelData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">Phân bổ doanh thu theo sản phẩm</p>
                </div>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Ngân sách sẽ được phân bổ chủ yếu cho nguyên vật liệu (40%), nhân công (30%), marketing (15%), và các chi phí vận hành khác (15%).
                </p>
            </section>
        </div>
    )
}

export default BusinessPlan