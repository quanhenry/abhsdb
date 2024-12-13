import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  Line,
  ComposedChart
} from 'recharts'

// Constants
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']

// Chart Data Layer
const CHART_DATA = {
  revenue: {
    sources: [
      { name: 'Bán đồ ăn sáng trực tiếp', value: 60 },
      { name: 'Dịch vụ delivery', value: 25 },
      { name: 'Đặt hàng theo gói', value: 15 }
    ],
    forecast: [
      { year: 'Năm 1', amount: 1800, growth: 0 },
      { year: 'Năm 2', amount: 2520, growth: 40 },
      { year: 'Năm 3', amount: 3276, growth: 30 }
    ],
    monthlyTrend: [
      { month: 1, value: 140 },
      { month: 2, value: 145 },
      { month: 3, value: 155 },
      { month: 4, value: 160 },
      { month: 5, value: 150 },
      { month: 6, value: 145 }
    ]
  },
  costs: {
    fixed: [
      { name: 'Chi phí nhân sự', value: 25 },
      { name: 'Thuê mặt bằng', value: 20 },
      { name: 'Chi phí vận hành', value: 15 },
      { name: 'Khấu hao', value: 10 }
    ],
    variable: [
      { name: 'Nguyên vật liệu', value: 40 },
      { name: 'Sản xuất trực tiếp', value: 15 },
      { name: 'Marketing', value: 10 },
      { name: 'Bán hàng', value: 35 }
    ],
    yearly: [
      { year: 'Năm 1', amount: 1260 },
      { year: 'Năm 2', amount: 1663 },
      { year: 'Năm 3', amount: 2098 }
    ]
  },
  profitAnalysis: [
    { year: 'Năm 1', revenue: 1800, cost: 1260, profit: 540 },
    { year: 'Năm 2', revenue: 2520, cost: 1663, profit: 857 },
    { year: 'Năm 3', revenue: 3276, cost: 2098, profit: 1178 }
  ],
  pricing: {
    comparison: [
      { category: 'Cửa hàng cao cấp', price: 100 },
      { category: 'Dự án của chúng ta', price: 75 },
      { category: 'Cửa hàng bình dân', price: 60 }
    ],
    margin: [
      { category: 'Giá bán', value: 100 },
      { category: 'Chi phí', value: 70 },
      { category: 'Lợi nhuận', value: 30 }
    ]
  }
}

// Text Content Layer
const TEXT_CONTENT = {
  title: '3. MÔ HÌNH KINH DOANH',
  sectionA: {
    title: 'A. Phương thức tạo doanh thu',
    revenue: {
      title: 'Nguồn doanh thu chính',
      sources: [
        {
          name: 'Bán đồ ăn sáng trực tiếp',
          desc: 'Doanh thu từ bán hàng tại cửa hàng'
        },
        {
          name: 'Dịch vụ delivery',
          desc: 'Doanh thu từ giao hàng tận nơi'
        },
        {
          name: 'Đặt hàng theo gói',
          desc: 'Doanh thu từ các gói đăng ký định kỳ'
        }
      ]
    },
    payment: {
      title: 'Cách thức thu tiền',
      methods: [
        'Thanh toán tiền mặt',
        'Chuyển khoản ngân hàng',
        'Ví điện tử (Momo, ZaloPay)',
        'Thẻ tín dụng/ghi nợ'
      ],
      cycle: 'Thu tiền ngay khi phát sinh giao dịch',
      policy:
        'Không áp dụng chính sách công nợ với khách lẻ. Với khách hàng doanh nghiệp đặt theo gói, thanh toán trước theo tháng.'
    }
  },
  sectionB: {
    title: 'B. Chi phí sản xuất và bán hàng',
    fixedCosts: {
      title: 'Chi phí cố định',
      desc: [
        {
          name: 'Chi phí nhân sự',
          detail: 'Lương cơ bản và phụ cấp nhân viên'
        },
        {
          name: 'Thuê mặt bằng',
          detail: 'Chi phí thuê cửa hàng 80m2'
        },
        {
          name: 'Chi phí vận hành',
          detail: 'Điện, nước, internet, bảo trì thiết bị'
        },
        {
          name: 'Khấu hao',
          detail: 'Khấu hao tài sản cố định'
        }
      ]
    },
    variableCosts: {
      title: 'Chi phí biến đổi',
      desc: [
        {
          name: 'Nguyên vật liệu',
          detail: 'Thực phẩm và vật liệu đóng gói'
        },
        {
          name: 'Sản xuất trực tiếp',
          detail: 'Chi phí gas, điện sản xuất'
        },
        {
          name: 'Marketing',
          detail: 'Quảng cáo và khuyến mãi'
        },
        {
          name: 'Bán hàng',
          detail: 'Phí giao hàng, hoa hồng'
        }
      ]
    }
  },
  sectionC: {
    title: 'C. Cơ cấu giá bán',
    pricing: {
      title: 'Phương pháp định giá',
      cost: 'Giá thành = Chi phí trực tiếp + (Chi phí gián tiếp/Số lượng SP)',
      margin: 'Biên lợi nhuận mục tiêu: 30-35%',
      comparison:
        'Thấp hơn 20-30% so với các cửa hàng cao cấp, cao hơn 15-20% so với hàng bình dân'
    },
    policy: {
      title: 'Chính sách giá',
      discount: [
        'Giảm 10% cho khách hàng đăng ký gói tháng',
        'Giảm 5% khi thanh toán qua ví điện tử',
        'Giảm 15% cho đơn hàng doanh nghiệp >50 phần'
      ],
      promotion: [
        'Tặng 1 phần ăn sau 10 lần mua',
        'Combo tiết kiệm giảm 20%',
        'Flash sale giờ vàng 7h-8h'
      ],
      adjustment: [
        'Điều chỉnh theo biến động nguyên liệu',
        'Cập nhật theo mùa và festival',
        'Linh hoạt theo cạnh tranh'
      ]
    }
  }
}

const BusinessModelSection = () => {
  return (
    <div className='w-[210mm] min-h-[297mm] mx-auto bg-white p-8'>
      <h1 className='text-3xl font-bold mb-6 text-left'>
        {TEXT_CONTENT.title}
      </h1>

      {/* Section A */}
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4 text-left'>
          {TEXT_CONTENT.sectionA.title}
        </h2>

        {/* Revenue Sources */}
        <div className='mb-6'>
          <h3 className='text-xl font-medium mb-2 text-left'>
            {TEXT_CONTENT.sectionA.revenue.title}
          </h3>
          <div className='flex flex-col items-center mb-6'>
            <div className='w-full flex justify-center mb-2'>
              <PieChart width={400} height={300}>
                <Pie
                  data={CHART_DATA.revenue.sources}
                  cx={200}
                  cy={150}
                  labelLine={false}
                  outerRadius={100}
                  fill='#8884d8'
                  dataKey='value'
                >
                  {CHART_DATA.revenue.sources.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <p className='text-sm text-gray-600 text-center mb-4'>
              Cơ cấu nguồn doanh thu (%)
            </p>
          </div>

          {TEXT_CONTENT.sectionA.revenue.sources.map((source, index) => (
            <div key={index} className='mb-2 text-left'>
              <p className='font-medium'>{source.name}</p>
              <p className='text-gray-600'>{source.desc}</p>
            </div>
          ))}
        </div>

        {/* Revenue Forecast */}
        <div className='mb-6'>
          <div className='flex flex-col items-center mb-6'>
            <div className='w-full flex justify-center mb-2'>
              <ComposedChart
                width={600}
                height={300}
                data={CHART_DATA.revenue.forecast}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='year' />
                <YAxis yAxisId='left' />
                <YAxis yAxisId='right' orientation='right' />
                <Tooltip />
                <Legend />
                <Bar
                  yAxisId='left'
                  dataKey='amount'
                  fill='#8884d8'
                  name='Doanh thu (triệu VND)'
                />
                <Line
                  yAxisId='right'
                  type='monotone'
                  dataKey='growth'
                  stroke='#82ca9d'
                  name='Tăng trưởng (%)'
                />
              </ComposedChart>
            </div>
            <p className='text-sm text-gray-600 text-center mb-4'>
              Dự báo doanh thu và tăng trưởng
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className='mb-6'>
          <h3 className='text-xl font-medium mb-2 text-left'>
            {TEXT_CONTENT.sectionA.payment.title}
          </h3>
          <ul className='list-disc pl-6 mb-4 text-left'>
            {TEXT_CONTENT.sectionA.payment.methods.map((method, index) => (
              <li key={index} className='mb-2 text-left'>
                {method}
              </li>
            ))}
          </ul>
          <p className='text-left mb-2'>
            <strong>Chu kỳ thu tiền:</strong>{' '}
            {TEXT_CONTENT.sectionA.payment.cycle}
          </p>
          <p className='text-left'>
            <strong>Chính sách:</strong> {TEXT_CONTENT.sectionA.payment.policy}
          </p>
        </div>
      </section>

      {/* Section B */}
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4 text-left'>
          {TEXT_CONTENT.sectionB.title}
        </h2>

        {/* Fixed Costs */}
        <div className='mb-6'>
          <h3 className='text-xl font-medium mb-2 text-left'>
            {TEXT_CONTENT.sectionB.fixedCosts.title}
          </h3>
          <div className='flex flex-col items-center mb-6'>
            <div className='w-full flex justify-center mb-2'>
              <BarChart width={600} height={300} data={CHART_DATA.costs.fixed}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey='value'
                  fill='#8884d8'
                  name='Chi phí (triệu VND)'
                />
              </BarChart>
            </div>
            <p className='text-sm text-gray-600 text-center mb-4'>
              Cơ cấu chi phí cố định hàng tháng
            </p>
          </div>

          {TEXT_CONTENT.sectionB.fixedCosts.desc.map((cost, index) => (
            <div key={index} className='mb-2 text-left'>
              <p className='font-medium'>{cost.name}</p>
              <p className='text-gray-600'>{cost.detail}</p>
            </div>
          ))}
        </div>

        {/* Variable Costs */}
        <div className='mb-6'>
          <h3 className='text-xl font-medium mb-2 text-left'>
            {TEXT_CONTENT.sectionB.variableCosts.title}
          </h3>
          <div className='flex flex-col items-center mb-6'>
            <div className='w-full flex justify-center mb-2'>
              <PieChart width={400} height={300}>
                <Pie
                  data={CHART_DATA.costs.variable}
                  cx={200}
                  cy={150}
                  labelLine={false}
                  outerRadius={100}
                  fill='#8884d8'
                  dataKey='value'
                >
                  {CHART_DATA.costs.variable.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <p className='text-sm text-gray-600 text-center mb-4'>
              Tỷ trọng chi phí biến đổi (%)
            </p>
          </div>

          {TEXT_CONTENT.sectionB.variableCosts.desc.map((cost, index) => (
            <div key={index} className='mb-2 text-left'>
              <p className='font-medium'>{cost.name}</p>
              <p className='text-gray-600'>{cost.detail}</p>
            </div>
          ))}
        </div>

        {/* Profit Analysis */}
        <div className='mb-6'>
          <h3 className='text-xl font-medium mb-2 text-left'>
            Phân tích lợi nhuận
          </h3>
          <div className='flex flex-col items-center mb-6'>
            <div className='w-full flex justify-center mb-2'>
              <ComposedChart
                width={600}
                height={300}
                data={CHART_DATA.profitAnalysis}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='year' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='revenue' fill='#8884d8' name='Doanh thu' />
                <Bar dataKey='cost' fill='#FF8042' name='Chi phí' />
                <Line
                  type='monotone'
                  dataKey='profit'
                  stroke='#82ca9d'
                  name='Lợi nhuận'
                />
              </ComposedChart>
            </div>
            <p className='text-sm text-gray-600 text-center mb-4'>
              Phân tích doanh thu, chi phí và lợi nhuận theo năm (triệu VND)
            </p>
          </div>
        </div>
      </section>

      {/* Section C */}
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4 text-left'>
          {TEXT_CONTENT.sectionC.title}
        </h2>

        {/* Pricing Method */}
        <div className='mb-6'>
          <h3 className='text-xl font-medium mb-2 text-left'>
            {TEXT_CONTENT.sectionC.pricing.title}
          </h3>

          <div className='flex flex-col items-center mb-6'>
            <div className='w-full flex justify-center mb-2'>
              <BarChart
                width={600}
                height={300}
                data={CHART_DATA.pricing.comparison}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='category' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='price' fill='#8884d8' name='Giá tương đối (%)' />
              </BarChart>
            </div>
            <p className='text-sm text-gray-600 text-center mb-4'>
              So sánh mức giá với thị trường
            </p>
          </div>

          <p className='text-left mb-2'>
            <strong>Cách tính giá thành:</strong>{' '}
            {TEXT_CONTENT.sectionC.pricing.cost}
          </p>
          <p className='text-left mb-2'>
            <strong>Biên lợi nhuận:</strong>{' '}
            {TEXT_CONTENT.sectionC.pricing.margin}
          </p>
          <p className='text-left mb-2'>
            <strong>So sánh thị trường:</strong>{' '}
            {TEXT_CONTENT.sectionC.pricing.comparison}
          </p>
        </div>

        {/* Pricing Policy */}
        <div className='mb-6'>
          <h3 className='text-xl font-medium mb-2 text-left'>
            {TEXT_CONTENT.sectionC.policy.title}
          </h3>

          <div className='flex flex-col items-center mb-6'>
            <div className='w-full flex justify-center mb-2'>
              <PieChart width={400} height={300}>
                <Pie
                  data={CHART_DATA.pricing.margin}
                  cx={200}
                  cy={150}
                  labelLine={false}
                  outerRadius={100}
                  fill='#8884d8'
                  dataKey='value'
                >
                  {CHART_DATA.pricing.margin.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <p className='text-sm text-gray-600 text-center mb-4'>
              Cơ cấu giá bán (%)
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div>
              <p className='font-medium mb-2'>Chính sách chiết khấu:</p>
              <ul className='list-disc pl-6 mb-4 text-left'>
                {TEXT_CONTENT.sectionC.policy.discount.map((item, index) => (
                  <li key={index} className='mb-2 text-left'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='font-medium mb-2'>Chương trình khuyến mãi:</p>
              <ul className='list-disc pl-6 mb-4 text-left'>
                {TEXT_CONTENT.sectionC.policy.promotion.map((item, index) => (
                  <li key={index} className='mb-2 text-left'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='font-medium mb-2'>Chính sách điều chỉnh:</p>
              <ul className='list-disc pl-6 mb-4 text-left'>
                {TEXT_CONTENT.sectionC.policy.adjustment.map((item, index) => (
                  <li key={index} className='mb-2 text-left'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BusinessModelSection
