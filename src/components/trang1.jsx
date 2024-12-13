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
    Cell
} from 'recharts'

const IdeationDocument = () => {

    const marketOpportunityData = [
        { name: 'Thị trường hiện tại', value: 60 },
        { name: 'Tiềm năng mở rộng', value: 40 }
    ]

    const targetMarketData = [
        { name: 'Sinh viên', value: 35 },
        { name: 'Công nhân viên chức', value: 45 },
        { name: 'Khách vãng lai', value: 20 }
    ]

    const industryTrendsData = [
        { name: '2020', value: 100 },
        { name: '2021', value: 120 },
        { name: '2022', value: 150 },
        { name: '2023', value: 180 },
        { name: '2024', value: 220 }
    ]

    const revenueForecastData = [
        { name: 'Tháng 1', value: 50 },
        { name: 'Tháng 2', value: 70 },
        { name: 'Tháng 3', value: 90 },
        { name: 'Tháng 4', value: 110 },
        { name: 'Tháng 5', value: 130 },
        { name: 'Tháng 6', value: 150 }
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']

    return (
        <div className="w-[210mm] min-h-[297mm] mx-auto bg-white p-8">
            <h1 className="text-3xl font-bold mb-6 text-left">BỘ TÀI LIỆU KHỞI ĐẦU (IDEATION)</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-left">1. Mô tả ý tưởng cốt lõi</h2>
                
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Ý tưởng kinh doanh của chúng tôi là mở một cửa hàng bán đồ ăn sáng tại khu vực Tân Triều, Thanh Trì, Hà Nội. Cửa hàng sẽ chuyên cung cấp các món ăn sáng truyền thống Việt Nam như bánh mì, xôi, bánh bao với chất lượng cao và giá cả hợp lý. Tên dự án là "Bánh mì Ô Thủy", hướng đến việc xây dựng một thương hiệu đồ ăn sáng uy tín và phổ biến trong khu vực.
                </p>

                <div className="flex flex-col items-center mb-6">
                    <div className="w-full flex justify-center mb-2">
                        <PieChart width={300} height={300}>
                            <Pie
                                data={marketOpportunityData}
                                cx={150}
                                cy={150}
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {marketOpportunityData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">Phân tích cơ hội thị trường</p>
                </div>

                <h3 className="text-xl font-medium mb-2 text-left">Nghiên cứu sơ bộ về tính khả thi</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Dựa trên khảo sát ban đầu, chúng tôi nhận thấy nhu cầu cao về các món ăn sáng nhanh, ngon và giá cả phải chăng trong khu vực. Với vốn đầu tư ban đầu 50 triệu đồng, chúng tôi có thể thuê mặt bằng, mua sắm thiết bị cần thiết và bắt đầu hoạt động kinh doanh.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Xác định nhu cầu của khách hàng</h3>
                <ul className="list-disc pl-6 mb-4 text-left">
                    <li className="mb-2 text-left">Đồ ăn sáng nhanh chóng, tiện lợi</li>
                    <li className="mb-2 text-left">Chất lượng đảm bảo, vệ sinh an toàn thực phẩm</li>
                    <li className="mb-2 text-left">Giá cả hợp lý, phù hợp với nhiều đối tượng</li>
                    <li className="mb-2 text-left">Đa dạng lựa chọn món ăn</li>
                </ul>

                <h3 className="text-xl font-medium mb-2 text-left">Các vấn đề chưa được giải quyết</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Hiện tại, khu vực này chưa có nhiều lựa chọn về đồ ăn sáng chất lượng cao và đa dạng. Nhiều người phải di chuyển xa hoặc tự nấu ăn, gây mất thời gian và không thuận tiện.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Xác định khoảng trống thị trường</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Chúng tôi nhận thấy có khoảng trống cho một cửa hàng đồ ăn sáng chuyên nghiệp, cung cấp nhiều lựa chọn với chất lượng ổn định và dịch vụ tốt trong khu vực Tân Triều.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Theo dõi xu hướng công nghệ và tiêu dùng</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Chúng tôi sẽ áp dụng công nghệ trong quản lý đơn hàng và thanh toán, đồng thời theo dõi xu hướng ẩm thực để liên tục cập nhật menu phù hợp với nhu cầu khách hàng.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-left">2. Phân tích cơ hội thị trường</h2>

                <div className="flex flex-col items-center mb-6">
                    <div className="w-full flex justify-center mb-2">
                        <PieChart width={300} height={300}>
                            <Pie
                                data={targetMarketData}
                                cx={150}
                                cy={150}
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {targetMarketData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">Phân tích thị trường mục tiêu</p>
                </div>

                <h3 className="text-xl font-medium mb-2 text-left">Nghiên cứu đối thủ cạnh tranh</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Trong khu vực, có một số quán ăn sáng nhỏ lẻ, nhưng chưa có thương hiệu nào nổi bật. Chúng tôi sẽ tập trung vào chất lượng sản phẩm và dịch vụ để tạo sự khác biệt.
                </p>

                <div className="flex flex-col items-center mb-6">
                    <div className="w-full flex justify-center mb-2">
                        <LineChart width={500} height={300} data={industryTrendsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">Phân tích xu hướng ngành</p>
                </div>

                <h3 className="text-xl font-medium mb-2 text-left">Lợi thế cạnh tranh</h3>
                <ul className="list-disc pl-6 mb-4 text-left">
                    <li className="mb-2 text-left">Đa dạng menu với các món ăn truyền thống và sáng tạo</li>
                    <li className="mb-2 text-left">Chất lượng nguyên liệu cao cấp</li>
                    <li className="mb-2 text-left">Dịch vụ nhanh chóng và thân thiện</li>
                    <li className="mb-2 text-left">Vị trí thuận lợi trong khu dân cư đông đúc</li>
                </ul>

                <h3 className="text-xl font-medium mb-2 text-left">Xác định USP (Unique Selling Proposition)</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    "Bánh mì Ô Thủy - Hương vị truyền thống, phục vụ hiện đại" - Chúng tôi kết hợp giữa các món ăn truyền thống với cách phục vụ nhanh chóng, hiện đại để mang lại trải nghiệm tốt nhất cho khách hàng.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Tiềm năng phát triển của ý tưởng</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Với sự phát triển của khu vực và nhu cầu ngày càng tăng về đồ ăn sáng chất lượng, chúng tôi có tiềm năng mở rộng chuỗi cửa hàng trong tương lai, phát triển dịch vụ giao hàng và đa dạng hóa sản phẩm.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-left">3. Nghiên cứu sơ bộ về tính khả thi</h2>

                <h3 className="text-xl font-medium mb-2 text-left">Phân khúc khách hàng mục tiêu</h3>
                <ul className="list-disc pl-6 mb-4 text-left">
                    <li className="mb-2 text-left">Sinh viên các trường đại học lân cận</li>
                    <li className="mb-2 text-left">Công nhân viên chức làm việc trong khu vực</li>
                    <li className="mb-2 text-left">Cư dân địa phương</li>
                    <li className="mb-2 text-left">Khách vãng lai</li>
                </ul>

                <h3 className="text-xl font-medium mb-2 text-left">Xây dựng chân dung khách hàng</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Khách hàng chính của chúng tôi là những người bận rộn, cần một bữa sáng nhanh chóng nhưng vẫn đảm bảo chất lượng. Họ quan tâm đến sức khỏe, thích thưởng thức các món ăn truyền thống và sẵn sàng chi trả cho những sản phẩm chất lượng.
                </p>

                <h3 className="text-xl font-medium mb-2 text-left">Ước tính chi phí khởi động</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Với vốn ban đầu 50 triệu đồng, chúng tôi dự kiến phân bổ như sau:
                </p>
                <div className="flex flex-col items-center mb-6">
                    <div className="w-full flex justify-center mb-2">
                        <BarChart width={500} height={300} data={[
                            {name: 'Thuê mặt bằng', value: 20},
                            {name: 'Trang thiết bị', value: 15},
                            {name: 'Nguyên liệu ban đầu', value: 10},
                            {name: 'Marketing', value: 5}
                        ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">Ước tính chi phí khởi động (đơn vị: triệu đồng)</p>
                </div>

                <h3 className="text-xl font-medium mb-2 text-left">Dự báo doanh thu sơ bộ</h3>
                <div className="flex flex-col items-center mb-6">
                    <div className="w-full flex justify-center mb-2">
                        <BarChart width={500} height={300} data={revenueForecastData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#82ca9d" />
                        </BarChart>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">Dự báo doanh thu 6 tháng đầu (đơn vị: triệu đồng)</p>
                </div>

                <h3 className="text-xl font-medium mb-2 text-left">Phân tích điểm hòa vốn</h3>
                <p className="text-left mb-4 text-gray-800 leading-relaxed">
                    Dựa trên ước tính chi phí cố định hàng tháng và biên lợi nhuận trung bình trên mỗi sản phẩm, chúng tôi dự kiến sẽ đạt điểm hòa vốn sau khoảng 4-5 tháng hoạt động. Điều này phụ thuộc vào khả năng thu hút khách hàng và quản lý chi phí hiệu quả trong giai đoạn đầu.
                </p>
            </section>
        </div>
    )
}

export default IdeationDocument