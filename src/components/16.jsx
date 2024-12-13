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

const BusinessPlanSaaS = ({ data }) => {
  return (
    <div className='max-w-6xl mx-auto p-6'>
      {/* Overview Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>
            {data.overview.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2'>
            {data.overview.items.map((item, index) => (
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
          <CardTitle>{data.growthAnalysis.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='h-80'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={data.growthChartData}>
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
              {data.growthAnalysis.insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
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
                {data.problems.map((problem, index) => (
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
                {data.solutions.map((solution, index) => (
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
          <CardTitle>{data.targetMarket.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {data.targetMarket.segments.map((segment, index) => (
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
                  {data.financial.investment}
                </span>
              </div>
              <div className='flex justify-between'>
                <span>Chi phí hàng tháng:</span>
                <span className='font-semibold'>
                  {data.financial.monthlyExpense}
                </span>
              </div>
            </div>
            <div className='space-y-4'>
              <div className='flex justify-between'>
                <span>Thời gian hoàn vốn:</span>
                <span className='font-semibold'>
                  {data.financial.returnPeriod}
                </span>
              </div>
              <div className='flex justify-between'>
                <span>Lợi nhuận dự kiến:</span>
                <span className='font-semibold'>{data.financial.profit}</span>
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
                {data.swotAnalysis.strengths.map((strength, index) => (
                  <li key={index} className='flex items-center'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-red-50 p-4 rounded-lg'>
              <h3 className='font-semibold mb-2 text-red-600'>Điểm yếu</h3>
              <ul className='space-y-2'>
                {data.swotAnalysis.weaknesses.map((weakness, index) => (
                  <li key={index} className='flex items-center'>
                    <span className='w-2 h-2 bg-red-500 rounded-full mr-2'></span>
                    {weakness}
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-green-50 p-4 rounded-lg'>
              <h3 className='font-semibold mb-2 text-green-600'>Cơ hội</h3>
              <ul className='space-y-2'>
                {data.swotAnalysis.opportunities.map((opportunity, index) => (
                  <li key={index} className='flex items-center'>
                    <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                    {opportunity}
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-yellow-50 p-4 rounded-lg'>
              <h3 className='font-semibold mb-2 text-yellow-600'>Thách thức</h3>
              <ul className='space-y-2'>
                {data.swotAnalysis.threats.map((threat, index) => (
                  <li key={index} className='flex items-center'>
                    <span className='w-2 h-2 bg-yellow-500 rounded-full mr-2'></span>
                    {threat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>{data.experience.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-green-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-green-600 mb-3'>
                {data.experience.essential.title}
              </h3>
              <ul className='space-y-2'>
                {data.experience.essential.items.map((skill, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='w-2 h-2 bg-green-500 rounded-full mr-2 mt-2'></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-blue-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-blue-600 mb-3'>
                {data.experience.important.title}
              </h3>
              <ul className='space-y-2'>
                {data.experience.important.items.map((skill, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2'></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-gray-600 mb-3'>
                {data.experience.optional.title}
              </h3>
              <ul className='space-y-2'>
                {data.experience.optional.items.map((skill, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='w-2 h-2 bg-gray-500 rounded-full mr-2 mt-2'></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resources Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>{data.resources.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-green-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-green-600 mb-3'>
                {data.resources.mustHave.title}
              </h3>
              <ul className='space-y-2'>
                {data.resources.mustHave.items.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='w-2 h-2 bg-green-500 rounded-full mr-2 mt-2'></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-blue-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-blue-600 mb-3'>
                {data.resources.shouldHave.title}
              </h3>
              <ul className='space-y-2'>
                {data.resources.shouldHave.items.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2'></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='font-semibold text-gray-600 mb-3'>
                {data.resources.niceToHave.title}
              </h3>
              <ul className='space-y-2'>
                {data.resources.niceToHave.items.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='w-2 h-2 bg-gray-500 rounded-full mr-2 mt-2'></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap Section */}
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>{data.roadmap.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {data.roadmap.phases.map((phase, index) => (
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

// Example usage with the data
const BusinessPlanDashboard = () => {
  // This would typically come from an API or props
  const businessPlanData = {
    overview: {
      title: 'Tổng quan dịch vụ',
      items: [
        'Phát triển và cung cấp phần mềm quản lý doanh nghiệp dưới dạng SaaS',
        'Tích hợp các module quản lý nhân sự, tài chính, dự án và khách hàng',
        'Cung cấp giải pháp đám mây với khả năng tùy chỉnh cao cho doanh nghiệp vừa và nhỏ'
      ]
    },
    targetMarket: {
      title: 'Thị trường mục tiêu',
      segments: [
        {
          name: 'Doanh nghiệp vừa và nhỏ',
          details: [
            'Công ty có 10-200 nhân viên',
            'Hoạt động trong lĩnh vực công nghệ, thương mại điện tử, dịch vụ',
            'Cần giải pháp quản lý tích hợp, linh hoạt và tiết kiệm chi phí'
          ]
        },
        {
          name: 'Startup công nghệ',
          details: [
            'Công ty khởi nghiệp trong giai đoạn tăng trưởng',
            'Cần hệ thống quản lý có khả năng mở rộng nhanh chóng',
            'Ưu tiên giải pháp đám mây với chi phí ban đầu thấp'
          ]
        }
      ]
    },
    financial: {
      investment: '500,000 USD',
      monthlyExpense: '35,000 USD',
      returnPeriod: '24 tháng',
      profit: '25% sau năm thứ 3'
    },
    swotAnalysis: {
      strengths: [
        'Mô hình SaaS linh hoạt và tiết kiệm chi phí cho khách hàng',
        'Khả năng tùy chỉnh cao để đáp ứng nhu cầu đa dạng',
        'Tích hợp công nghệ mới như AI và phân tích dữ liệu',
        'Đội ngũ phát triển có kinh nghiệm trong lĩnh vực quản lý doanh nghiệp'
      ],
      weaknesses: [
        'Cạnh tranh cao trong thị trường phần mềm quản lý doanh nghiệp',
        'Chi phí marketing và thu hút khách hàng ban đầu lớn',
        'Phụ thuộc vào hạ tầng đám mây của bên thứ ba',
        'Cần thời gian để xây dựng uy tín và độ tin cậy trên thị trường'
      ],
      opportunities: [
        'Xu hướng chuyển đổi số trong doanh nghiệp vừa và nhỏ đang tăng mạnh',
        'Nhu cầu về giải pháp quản lý tích hợp và linh hoạt ngày càng cao',
        'Tiềm năng mở rộng sang thị trường quốc tế',
        'Khả năng phát triển các tính năng mới dựa trên phản hồi của khách hàng'
      ],
      threats: [
        'Sự cạnh tranh từ các công ty phần mềm lớn và có thương hiệu',
        'Thay đổi nhanh chóng về công nghệ và nhu cầu thị trường',
        'Rủi ro về bảo mật và quyền riêng tư dữ liệu',
        'Biến động kinh tế có thể ảnh hưởng đến ngân sách IT của doanh nghiệp'
      ]
    },
    problems: [
      'Doanh nghiệp vừa và nhỏ gặp khó khăn trong việc quản lý hiệu quả với nhiều phần mềm rời rạc',
      'Chi phí cao và phức tạp khi triển khai các giải pháp enterprise truyền thống',
      'Thiếu tính linh hoạt và khả năng mở rộng trong các hệ thống hiện có',
      'Khó khăn trong việc tích hợp và phân tích dữ liệu từ nhiều nguồn khác nhau'
    ],
    solutions: [
      'Cung cấp giải pháp SaaS tích hợp đầy đủ các module quản lý doanh nghiệp',
      'Áp dụng mô hình định giá linh hoạt dựa trên quy mô và nhu cầu của khách hàng',
      'Xây dựng nền tảng có khả năng tùy chỉnh và mở rộng cao',
      'Tích hợp công nghệ AI và phân tích dữ liệu để cung cấp insights cho việc ra quyết định'
    ],
    growthAnalysis: {
      title: 'Tốc độ tăng trưởng ngành 2024-2025',
      insights: [
        'Thị trường SaaS quản lý doanh nghiệp dự kiến tăng trưởng 18-20% hàng năm',
        'Xu hướng chuyển đổi số sẽ thúc đẩy nhu cầu về giải pháp quản lý tích hợp',
        'Các công nghệ mới như AI và machine learning sẽ tạo ra giá trị gia tăng lớn',
        'Thị trường Đông Nam Á được dự đoán sẽ có tốc độ tăng trưởng cao nhất trong khu vực'
      ]
    },
    growthChartData: [
      {
        month: '12/2024',
        growth: 15.2
      },
      {
        month: '01/2025',
        growth: 15.5
      },
      {
        month: '02/2025',
        growth: 15.8
      },
      {
        month: '03/2025',
        growth: 16.2
      },
      {
        month: '04/2025',
        growth: 16.7
      },
      {
        month: '05/2025',
        growth: 17.1
      },
      {
        month: '06/2025',
        growth: 17.6
      },
      {
        month: '07/2025',
        growth: 18.0
      },
      {
        month: '08/2025',
        growth: 18.4
      },
      {
        month: '09/2025',
        growth: 18.9
      },
      {
        month: '10/2025',
        growth: 19.3
      },
      {
        month: '11/2025',
        growth: 19.7
      },
      {
        month: '12/2025',
        growth: 20.1
      }
    ],
    experience: {
      title: 'Kinh nghiệm cần có',
      essential: {
        title: 'Kiến thức cốt lõi',
        items: [
          'Phát triển phần mềm và kiến trúc SaaS',
          'Quản lý dự án phần mềm (Agile/Scrum)',
          'Bảo mật và quản lý dữ liệu doanh nghiệp',
          'Quy trình kinh doanh và quản lý doanh nghiệp'
        ]
      },
      important: {
        title: 'Kiến thức quan trọng',
        items: [
          'Cloud computing (AWS, Azure, hoặc Google Cloud)',
          'Microservices và container technologies',
          'UX/UI design cho ứng dụng doanh nghiệp',
          'Data analytics và business intelligence'
        ]
      },
      optional: {
        title: 'Kiến thức bổ sung',
        items: [
          'Machine learning và AI trong quản lý doanh nghiệp',
          'Blockchain cho bảo mật và truy xuất dữ liệu',
          'IoT integration cho quản lý tài sản',
          'Compliance và regulations trong quản lý dữ liệu'
        ]
      }
    },
    resources: {
      title: 'Nguồn lực cần có',
      mustHave: {
        title: 'Nguồn lực thiết yếu',
        items: [
          'Đội ngũ phát triển phần mềm full-stack',
          'Hạ tầng cloud và DevOps',
          'Chuyên gia về quản lý doanh nghiệp và quy trình',
          'Hệ thống hỗ trợ khách hàng 24/7'
        ]
      },
      shouldHave: {
        title: 'Nguồn lực quan trọng',
        items: [
          'Đội ngũ data scientists và analytics',
          'Chuyên gia UX/UI cho ứng dụng doanh nghiệp',
          'Đội ngũ marketing và sales B2B',
          'Partnerships với các nhà cung cấp cloud lớn'
        ]
      },
      niceToHave: {
        title: 'Nguồn lực mở rộng',
        items: [
          'Phòng lab R&D cho công nghệ mới',
          'Đội ngũ localization cho mở rộng quốc tế',
          'Chương trình đào tạo và chứng chỉ cho khách hàng',
          'Quỹ đầu tư cho các startup sử dụng nền tảng'
        ]
      }
    },
    roadmap: {
      title: 'Lộ trình triển khai',
      phases: [
        {
          title: 'Giai đoạn 1: Phát triển sản phẩm cốt lõi (6-9 tháng)',
          steps: [
            'Nghiên cứu thị trường và xác định yêu cầu sản phẩm',
            'Phát triển MVP với các tính năng cốt lõi',
            'Thử nghiệm beta với một số khách hàng tiềm năng',
            'Thu thập phản hồi và điều chỉnh sản phẩm'
          ]
        },
        {
          title: 'Giai đoạn 2: Ra mắt thị trường và mở rộng (12-18 tháng)',
          steps: [
            'Chính thức ra mắt sản phẩm và bắt đầu chiến dịch marketing',
            'Xây dựng đội ngũ sales và hỗ trợ khách hàng',
            'Phát triển thêm tính năng dựa trên phản hồi của thị trường',
            'Mở rộng đối tượng khách hàng và thị trường địa lý'
          ]
        },
        {
          title: 'Giai đoạn 3: Tối ưu hóa và đổi mới (18-24 tháng)',
          steps: [
            'Tích hợp AI và machine learning để nâng cao khả năng phân tích',
            'Phát triển ecosystem với các ứng dụng bổ sung và tích hợp',
            'Mở rộng sang thị trường quốc tế',
            'Nghiên cứu và phát triển các công nghệ mới để duy trì lợi thế cạnh tranh'
          ]
        }
      ]
    }
  }

  return <BusinessPlanSaaS data={businessPlanData} />
}

export default BusinessPlanDashboard
