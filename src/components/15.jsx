import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

// Data cho nội dung text
const BUSINESS_PLAN_DATA = {
  overview: {
    title: 'Tổng quan dịch vụ Last-mile Delivery',
    items: [
      'Dịch vụ giao hàng cuối cùng từ kho đến người tiêu dùng',
      'Sử dụng công nghệ theo dõi và tối ưu giao hàng',
      'Đáp ứng nhu cầu thương mại điện tử'
    ]
  },
  targetMarket: {
    title: 'Thị trường mục tiêu',
    segments: [
      {
        name: 'Doanh nghiệp',
        details: [
          'Cửa hàng thương mại điện tử',
          'Doanh nghiệp vừa và nhỏ',
          'Chuỗi cửa hàng bán lẻ'
        ]
      },
      {
        name: 'Cá nhân',
        details: [
          'Khách hàng mua sắm online',
          'Người bán hàng online',
          'Người cần giao hàng nhanh'
        ]
      }
    ]
  },
  financial: {
    investment: '500 triệu VND',
    monthlyExpense: '200 triệu VND',
    returnPeriod: '2 năm',
    profit: '30%'
  },
  swotAnalysis: {
    strengths: [
      'Công nghệ theo dõi hiện đại',
      'Đội ngũ chuyên nghiệp',
      'Vị trí thuận lợi',
      'Dịch vụ khách hàng tốt'
    ],
    weaknesses: [
      'Thương hiệu mới',
      'Vốn hạn chế',
      'Kinh nghiệm còn ít',
      'Chi phí vận hành cao'
    ],
    opportunities: [
      'Thị trường TMĐT tăng trưởng',
      'Nhu cầu giao hàng nhanh cao',
      'Tiềm năng hợp tác đối tác',
      'Xu hướng công nghệ mới'
    ],
    threats: [
      'Cạnh tranh gay gắt',
      'Biến động giá nhiên liệu',
      'Rủi ro vận hành',
      'Thay đổi quy định pháp lý'
    ]
  },
  problems: [
    'Thời gian giao hàng không ổn định và khó dự đoán',
    'Tỷ lệ đơn hàng hoàn cao do không liên lạc được',
    'Chi phí vận chuyển cao cho doanh nghiệp',
    'Khó theo dõi trạng thái đơn hàng thời gian thực'
  ],
  solutions: [
    'Hệ thống tối ưu tuyến đường tự động, dự báo thời gian giao hàng chính xác',
    'Tích hợp nền tảng liên lạc đa kênh (SMS, app, email)',
    'Giải pháp gom đơn thông minh giảm chi phí vận chuyển',
    'Nền tảng theo dõi đơn hàng realtime với bản đồ trực quan'
  ],
  growthAnalysis: {
    title: 'Tốc độ tăng trưởng ngành Last-mile Delivery 2024-2025',
    insights: [
      'Tốc độ tăng trưởng trung bình: 25.5%/năm',
      'Thời điểm tăng trưởng cao nhất: Q4/2025 (36%)',
      'Yếu tố thúc đẩy: TMĐT phát triển, nhu cầu giao hàng tăng',
      'Dự báo: Tiếp tục tăng trưởng mạnh trong năm 2025'
    ]
  },
  experience: {
    title: 'Kinh nghiệm cần có',
    essential: {
      title: 'Kiến thức cốt lõi (Cần có ngay)',
      items: [
        'Hiểu biết cơ bản về quy trình giao nhận hàng',
        'Kỹ năng sử dụng smartphone và app cơ bản',
        'Giao tiếp tốt với khách hàng',
        'Quản lý thời gian và lập kế hoạch đơn giản'
      ]
    },
    important: {
      title: 'Kiến thức quan trọng (Có thể học dần)',
      items: [
        'Quản lý nhóm nhỏ 3-5 người',
        'Sử dụng phần mềm quản lý đơn hàng cơ bản',
        'Hiểu biết về an toàn giao thông và bảo quản hàng',
        'Kỹ năng xử lý tình huống với khách hàng'
      ]
    },
    optional: {
      title: 'Kiến thức bổ sung (Phát triển sau)',
      items: [
        'Chứng chỉ quản lý chuỗi cung ứng',
        'Phân tích dữ liệu nâng cao',
        'Kỹ năng đàm phán hợp đồng lớn',
        'Quản lý đội ngũ trên 20 người'
      ]
    }
  },
  resources: {
    title: 'Nguồn lực cần có',
    mustHave: {
      title: 'Nguồn lực thiết yếu (Cần có ngay)',
      items: [
        'Điện thoại thông minh và kết nối internet',
        'Phương tiện di chuyển (xe máy)',
        'Vốn ban đầu tối thiểu 50 triệu',
        '2-3 shipper đáng tin cậy'
      ]
    },
    shouldHave: {
      title: 'Nguồn lực quan trọng (3-6 tháng đầu)',
      items: [
        'Kho hàng nhỏ tại vị trí thuận tiện',
        'App quản lý giao hàng cơ bản',
        'Quan hệ với 1-2 đối tác thương mại điện tử',
        'Thêm 3-5 shipper bán thời gian'
      ]
    },
    niceToHave: {
      title: 'Nguồn lực mở rộng (Giai đoạn phát triển)',
      items: [
        'Hệ thống kho bãi chuyên nghiệp',
        'Đội xe tải vận chuyển riêng',
        'Phần mềm quản lý logistics tích hợp',
        'Mạng lưới đối tác toàn quốc'
      ]
    }
  },
  roadmap: {
    title: 'Lộ trình triển khai cho startup',
    phases: [
      {
        title: 'Khởi động (1-3 tháng đầu)',
        steps: [
          'Bắt đầu với 2-3 shipper tin cậy',
          'Tập trung khu vực nhỏ, dễ quản lý',
          'Sử dụng công cụ quản lý đơn giản (Excel, app có sẵn)',
          'Xây dựng quy trình giao hàng cơ bản'
        ]
      },
      {
        title: 'Phát triển (3-6 tháng)',
        steps: [
          'Mở rộng đội ngũ lên 5-7 shipper',
          'Thuê kho nhỏ tại vị trí thuận lợi',
          'Bắt đầu hợp tác với shop online nhỏ',
          'Cải thiện quy trình dựa trên phản hồi'
        ]
      },
      {
        title: 'Mở rộng (6-12 tháng)',
        steps: [
          'Tăng vùng phủ sóng dịch vụ',
          'Đầu tư phần mềm quản lý chuyên nghiệp',
          'Xây dựng đội ngũ quản lý cơ bản',
          'Thiết lập quan hệ đối tác lớn hơn'
        ]
      }
    ]
  }
}

// Data cho biểu đồ
const GROWTH_CHART_DATA = [
  { month: '12/2024', growth: 15.2 },
  { month: '01/2025', growth: 16.5 },
  { month: '02/2025', growth: 17.8 },
  { month: '03/2025', growth: 19.2 },
  { month: '04/2025', growth: 21.8 },
  { month: '05/2025', growth: 23.5 },
  { month: '06/2025', growth: 25.2 },
  { month: '07/2025', growth: 27.8 },
  { month: '08/2025', growth: 29.3 },
  { month: '09/2025', growth: 31.7 },
  { month: '10/2025', growth: 33.1 },
  { month: '11/2025', growth: 34.5 },
  { month: '12/2025', growth: 36.0 }
]

const BusinessPlanDashboard = () => {
  return (
    <div className='max-w-6xl mx-auto p-6'>
      {/* Overview Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>
            {BUSINESS_PLAN_DATA.overview.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2'>
            {BUSINESS_PLAN_DATA.overview.items.map((item, index) => (
              <li key={index} className='flex items-center'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Growth Chart Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>{BUSINESS_PLAN_DATA.growthAnalysis.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='h-80'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={GROWTH_CHART_DATA}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip formatter={value => `${value}%`} />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='growth'
                  name='Tăng trưởng'
                  stroke='#2196F3'
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='mt-4 space-y-2'>
            <p>Phân tích tăng trưởng:</p>
            <ul className='list-disc pl-5'>
              {BUSINESS_PLAN_DATA.growthAnalysis.insights.map(
                (insight, index) => (
                  <li key={index}>{insight}</li>
                )
              )}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Problem Solution Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Vấn đề và Giải pháp</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-red-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-red-600 mb-3'>
                Vấn đề thị trường
              </h3>
              <ul className='space-y-3'>
                {BUSINESS_PLAN_DATA.problems.map((problem, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='w-2 h-2 bg-red-500 rounded-full mr-2 mt-2'></span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-green-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-green-600 mb-3'>
                Giải pháp của chúng tôi
              </h3>
              <ul className='space-y-3'>
                {BUSINESS_PLAN_DATA.solutions.map((solution, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='w-2 h-2 bg-green-500 rounded-full mr-2 mt-2'></span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Target Market Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>{BUSINESS_PLAN_DATA.targetMarket.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {BUSINESS_PLAN_DATA.targetMarket.segments.map((segment, index) => (
              <div key={index} className='bg-gray-50 p-4 rounded-lg'>
                <h3 className='font-semibold mb-2 text-blue-600'>
                  {segment.name}
                </h3>
                <ul className='space-y-2'>
                  {segment.details.map((detail, idx) => (
                    <li key={idx} className='flex items-center'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financial Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Tài chính</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-4'>
              <div className='flex justify-between'>
                <span>Vốn đầu tư:</span>
                <span className='font-semibold'>
                  {BUSINESS_PLAN_DATA.financial.investment}
                </span>
              </div>
              <div className='flex justify-between'>
                <span>Chi phí hàng tháng:</span>
                <span className='font-semibold'>
                  {BUSINESS_PLAN_DATA.financial.monthlyExpense}
                </span>
              </div>
            </div>
            <div className='space-y-4'>
              <div className='flex justify-between'>
                <span>Thời gian hoàn vốn:</span>
                <span className='font-semibold'>
                  {BUSINESS_PLAN_DATA.financial.returnPeriod}
                </span>
              </div>
              <div className='flex justify-between'>
                <span>Lợi nhuận dự kiến:</span>
                <span className='font-semibold'>
                  {BUSINESS_PLAN_DATA.financial.profit}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SWOT Analysis */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Phân tích SWOT</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-blue-50 p-4 rounded-lg'>
              <h3 className='font-semibold mb-2 text-blue-600'>Điểm mạnh</h3>
              <ul className='space-y-2'>
                {BUSINESS_PLAN_DATA.swotAnalysis.strengths.map(
                  (strength, index) => (
                    <li key={index} className='flex items-center'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
                      {strength}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className='bg-red-50 p-4 rounded-lg'>
              <h3 className='font-semibold mb-2 text-red-600'>Điểm yếu</h3>
              <ul className='space-y-2'>
                {BUSINESS_PLAN_DATA.swotAnalysis.weaknesses.map(
                  (weakness, index) => (
                    <li key={index} className='flex items-center'>
                      <span className='w-2 h-2 bg-red-500 rounded-full mr-2'></span>
                      {weakness}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className='bg-green-50 p-4 rounded-lg'>
              <h3 className='font-semibold mb-2 text-green-600'>Cơ hội</h3>
              <ul className='space-y-2'>
                {BUSINESS_PLAN_DATA.swotAnalysis.opportunities.map(
                  (opportunity, index) => (
                    <li key={index} className='flex items-center'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                      {opportunity}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className='bg-yellow-50 p-4 rounded-lg'>
              <h3 className='font-semibold mb-2 text-yellow-600'>Thách thức</h3>
              <ul className='space-y-2'>
                {BUSINESS_PLAN_DATA.swotAnalysis.threats.map(
                  (threat, index) => (
                    <li key={index} className='flex items-center'>
                      <span className='w-2 h-2 bg-yellow-500 rounded-full mr-2'></span>
                      {threat}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>{BUSINESS_PLAN_DATA.experience.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-green-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-green-600 mb-3'>
                {BUSINESS_PLAN_DATA.experience.essential.title}
              </h3>
              <ul className='space-y-2'>
                {BUSINESS_PLAN_DATA.experience.essential.items.map(
                  (skill, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mr-2 mt-2'></span>
                      <span>{skill}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className='bg-blue-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-blue-600 mb-3'>
                {BUSINESS_PLAN_DATA.experience.important.title}
              </h3>
              <ul className='space-y-2'>
                {BUSINESS_PLAN_DATA.experience.important.items.map(
                  (skill, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2'></span>
                      <span>{skill}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-gray-600 mb-3'>
                {BUSINESS_PLAN_DATA.experience.optional.title}
              </h3>
              <ul className='space-y-2'>
                {BUSINESS_PLAN_DATA.experience.optional.items.map(
                  (skill, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='w-2 h-2 bg-gray-500 rounded-full mr-2 mt-2'></span>
                      <span>{skill}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resources Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>{BUSINESS_PLAN_DATA.resources.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-green-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-green-600 mb-3'>
                {BUSINESS_PLAN_DATA.resources.mustHave.title}
              </h3>
              <ul className='space-y-2'>
                {BUSINESS_PLAN_DATA.resources.mustHave.items.map(
                  (item, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mr-2 mt-2'></span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className='bg-blue-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-blue-600 mb-3'>
                {BUSINESS_PLAN_DATA.resources.shouldHave.title}
              </h3>
              <ul className='space-y-2'>
                {BUSINESS_PLAN_DATA.resources.shouldHave.items.map(
                  (item, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2'></span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-gray-600 mb-3'>
                {BUSINESS_PLAN_DATA.resources.niceToHave.title}
              </h3>
              <ul className='space-y-2'>
                {BUSINESS_PLAN_DATA.resources.niceToHave.items.map(
                  (item, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='w-2 h-2 bg-gray-500 rounded-full mr-2 mt-2'></span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>{BUSINESS_PLAN_DATA.roadmap.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {BUSINESS_PLAN_DATA.roadmap.phases.map((phase, index) => (
              <div
                key={index}
                className='bg-gradient-to-b from-white to-blue-50 p-4 rounded-lg border border-blue-100'
              >
                <h3 className='font-semibold text-blue-600 mb-3'>
                  {phase.title}
                </h3>
                <ul className='space-y-2'>
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className='flex items-start'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2'></span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BusinessPlanDashboard
