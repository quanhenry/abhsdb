import React, { useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'

const BusinessModels = () => {
  const [expandedModel, setExpandedModel] = useState(null)

  const businessModels = [
    {
      id: 1,
      name: 'Cửa hàng vật liệu xây dựng online',
      explanation:
        'Tận dụng mối quan hệ với anh họ làm giám đốc công ty vật liệu xây dựng, kết hợp với kinh nghiệm trong thương mại điện tử và quản lý chuỗi cung ứng. Vị trí gần các khu chung cư cao cấp tạo cơ hội tiếp cận khách hàng tiềm năng.',
      costs: [
        {
          item: 'Phát triển website và ứng dụng',
          amount: '150,000,000 VND',
          description: 'Xây dựng nền tảng thương mại điện tử chuyên nghiệp'
        },
        {
          item: 'Kho bãi và logistics',
          amount: '200,000,000 VND',
          description: 'Thuê kho và đầu tư vào hệ thống quản lý kho'
        },
        {
          item: 'Marketing và quảng cáo',
          amount: '100,000,000 VND',
          description: 'Chiến dịch digital marketing và SEO'
        },
        {
          item: 'Vốn lưu động',
          amount: '300,000,000 VND',
          description: 'Nhập hàng và duy trì hoạt động trong 6 tháng đầu'
        }
      ],
      total_investment: '750,000,000 VND',
      roi_time: '18-24 tháng',
      recommendations: [
        {
          title: 'Xây dựng quan hệ đối tác',
          content:
            'Tận dụng mối quan hệ với anh họ để đàm phán giá ưu đãi và chính sách consignment'
        },
        {
          title: 'Tối ưu hóa logistics',
          content:
            'Hợp tác với bạn trong ngành logistics để tối ưu chi phí vận chuyển'
        },
        {
          title: 'Tập trung vào UX/UI',
          content:
            'Đầu tư vào trải nghiệm người dùng trên nền tảng online để tăng tỷ lệ chuyển đổi'
        },
        {
          title: 'Xây dựng nội dung chuyên sâu',
          content:
            'Tạo blog và video hướng dẫn về xây dựng để tăng SEO và uy tín'
        }
      ]
    },
    {
      id: 2,
      name: 'Dịch vụ tư vấn quản lý chuỗi cung ứng',
      explanation:
        'Tận dụng kinh nghiệm 5 năm trong lĩnh vực thương mại điện tử và quản lý chuỗi cung ứng, kết hợp với bằng cấp về quản trị kinh doanh và kỹ năng tiếng Anh.',
      costs: [
        {
          item: 'Thiết lập văn phòng',
          amount: '100,000,000 VND',
          description: 'Thuê và trang bị văn phòng làm việc'
        },
        {
          item: 'Phần mềm và công cụ chuyên dụng',
          amount: '80,000,000 VND',
          description:
            'Đầu tư vào các phần mềm quản lý dự án và phân tích chuỗi cung ứng'
        },
        {
          item: 'Marketing và xây dựng thương hiệu',
          amount: '120,000,000 VND',
          description: 'Phát triển website, tài liệu marketing và networking'
        },
        {
          item: 'Đào tạo và chứng chỉ chuyên môn',
          amount: '50,000,000 VND',
          description:
            'Nâng cao kỹ năng và chứng chỉ trong lĩnh vực chuỗi cung ứng'
        }
      ],
      total_investment: '350,000,000 VND',
      roi_time: '12-18 tháng',
      recommendations: [
        {
          title: 'Xây dựng mạng lưới khách hàng',
          content:
            'Tận dụng mối quan hệ với các chủ đại lý phân phối hàng tiêu dùng làm khách hàng tiềm năng đầu tiên'
        },
        {
          title: 'Phát triển gói dịch vụ đa dạng',
          content:
            'Cung cấp các gói tư vấn từ cơ bản đến chuyên sâu để phù hợp với nhiều đối tượng khách hàng'
        },
        {
          title: 'Tham gia các hiệp hội ngành',
          content:
            'Tham gia các hiệp hội logistics và chuỗi cung ứng để mở rộng mạng lưới và cập nhật xu hướng'
        },
        {
          title: 'Xây dựng case study',
          content:
            'Tạo các case study từ dự án thành công để làm tài liệu marketing và xây dựng uy tín'
        }
      ]
    },
    {
      id: 3,
      name: 'Chuỗi cửa hàng tiện lợi kết hợp dịch vụ giao hàng',
      explanation:
        'Tận dụng vị trí gần khu vực đại học và chung cư cao cấp, kết hợp với kinh nghiệm quản lý chuỗi cung ứng và mối quan hệ với các đại lý phân phối hàng tiêu dùng.',
      costs: [
        {
          item: 'Thuê mặt bằng và cải tạo',
          amount: '300,000,000 VND',
          description: 'Thuê và trang bị 2 cửa hàng đầu tiên'
        },
        {
          item: 'Hàng hóa ban đầu',
          amount: '200,000,000 VND',
          description: 'Nhập hàng để lấp đầy 2 cửa hàng'
        },
        {
          item: 'Hệ thống POS và quản lý kho',
          amount: '100,000,000 VND',
          description: 'Đầu tư vào phần mềm quản lý cửa hàng và kho hàng'
        },
        {
          item: 'Marketing và quảng cáo',
          amount: '50,000,000 VND',
          description: 'Chiến dịch quảng cáo local và online'
        }
      ],
      total_investment: '650,000,000 VND',
      roi_time: '24-30 tháng',
      recommendations: [
        {
          title: 'Tối ưu hóa danh mục sản phẩm',
          content:
            'Phân tích dữ liệu bán hàng để điều chỉnh danh mục sản phẩm phù hợp với nhu cầu địa phương'
        },
        {
          title: 'Phát triển ứng dụng đặt hàng',
          content:
            'Tạo ứng dụng mobile cho phép khách hàng đặt hàng và giao hàng nhanh trong khu vực'
        },
        {
          title: 'Hợp tác với nhà cung cấp',
          content:
            'Tận dụng mối quan hệ với các đại lý phân phối để có được điều khoản ưu đãi'
        },
        {
          title: 'Chương trình khách hàng thân thiết',
          content:
            'Xây dựng chương trình tích điểm và ưu đãi để giữ chân khách hàng'
        }
      ]
    },
    {
      id: 4,
      name: 'Nền tảng đào tạo digital marketing online',
      explanation:
        'Kết hợp kiến thức về quản trị kinh doanh, chứng chỉ digital marketing và kinh nghiệm trong thương mại điện tử để tạo ra các khóa học online chất lượng cao.',
      costs: [
        {
          item: 'Phát triển nền tảng học trực tuyến',
          amount: '200,000,000 VND',
          description: 'Xây dựng website và hệ thống quản lý học tập (LMS)'
        },
        {
          item: 'Sản xuất nội dung khóa học',
          amount: '150,000,000 VND',
          description: 'Thiết kế và sản xuất video, tài liệu cho các khóa học'
        },
        {
          item: 'Marketing và quảng cáo',
          amount: '100,000,000 VND',
          description: 'Chiến dịch quảng cáo online và influencer marketing'
        },
        {
          item: 'Phần mềm và công cụ hỗ trợ',
          amount: '50,000,000 VND',
          description:
            'Đầu tư vào các công cụ phân tích dữ liệu và hỗ trợ học viên'
        }
      ],
      total_investment: '500,000,000 VND',
      roi_time: '18-24 tháng',
      recommendations: [
        {
          title: 'Xây dựng đội ngũ giảng viên chất lượng',
          content:
            'Hợp tác với các chuyên gia trong ngành để tăng giá trị và uy tín cho khóa học'
        },
        {
          title: 'Tạo cộng đồng học tập',
          content:
            'Xây dựng diễn đàn và nhóm học tập để tăng tương tác và giá trị cho học viên'
        },
        {
          title: 'Cập nhật nội dung thường xuyên',
          content:
            'Đảm bảo nội dung khóa học luôn cập nhật với xu hướng mới nhất trong digital marketing'
        },
        {
          title: 'Phát triển chương trình affiliate',
          content:
            'Tạo chương trình tiếp thị liên kết để mở rộng phạm vi tiếp cận khách hàng'
        }
      ]
    },
    {
      id: 5,
      name: 'Dịch vụ tư vấn và triển khai chiến lược kinh doanh online cho nhà hàng',
      explanation:
        'Kết hợp kinh nghiệm trong thương mại điện tử, kiến thức về digital marketing và mối quan hệ với em trai làm quản lý nhà hàng để cung cấp dịch vụ chuyên biệt cho ngành F&B.',
      costs: [
        {
          item: 'Phát triển bộ công cụ và template',
          amount: '100,000,000 VND',
          description:
            'Xây dựng các mẫu chiến lược và công cụ phân tích dành riêng cho nhà hàng'
        },
        {
          item: 'Marketing và xây dựng thương hiệu',
          amount: '80,000,000 VND',
          description:
            'Phát triển website, tài liệu marketing và tham gia các sự kiện ngành F&B'
        },
        {
          item: 'Phần mềm quản lý dự án và CRM',
          amount: '50,000,000 VND',
          description:
            'Đầu tư vào phần mềm để quản lý khách hàng và dự án hiệu quả'
        },
        {
          item: 'Đào tạo và nghiên cứu thị trường',
          amount: '70,000,000 VND',
          description:
            'Cập nhật kiến thức về xu hướng F&B và công nghệ mới trong ngành'
        }
      ],
      total_investment: '300,000,000 VND',
      roi_time: '12-18 tháng',
      recommendations: [
        {
          title: 'Xây dựng case study từ nhà hàng của em trai',
          content:
            'Sử dụng nhà hàng của em trai làm dự án thí điểm để tạo case study thực tế'
        },
        {
          title: 'Phát triển gói dịch vụ theo quy mô',
          content:
            'Tạo các gói dịch vụ phù hợp với nhiều quy mô nhà hàng, từ quán nhỏ đến chuỗi lớn'
        },
        {
          title: 'Hợp tác với các nền tảng đặt đồ ăn',
          content:
            'Xây dựng mối quan hệ đối tác với các nền tảng lớn để cung cấp giải pháp tích hợp'
        },
        {
          title: 'Tổ chức workshop và webinar',
          content:
            'Tổ chức các buổi chia sẻ kiến thức miễn phí để thu hút khách hàng tiềm năng'
        }
      ]
    }
  ]

  const handleModelClick = id => {
    setExpandedModel(expandedModel === id ? null : id)
  }

  return (
    <div className='p-6 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        Các Mô Hình Kinh Doanh
      </h1>
      <div className='grid gap-6'>
        {businessModels.map(model => (
          <div
            key={model.id}
            className='bg-white rounded-lg shadow-lg overflow-hidden'
          >
            {/* Header section */}
            <div
              onClick={() => handleModelClick(model.id)}
              className='p-4 bg-blue-600 text-white cursor-pointer flex justify-between items-center hover:bg-blue-700 transition-colors'
            >
              <h2 className='text-xl font-semibold'>{model.name}</h2>
              {expandedModel === model.id ? (
                <ArrowUp className='w-6 h-6' />
              ) : (
                <ArrowDown className='w-6 h-6' />
              )}
            </div>

            {/* Content section */}
            {expandedModel === model.id && (
              <div className='p-6'>
                {/* Giải thích */}
                <div className='mb-6'>
                  <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                    Mô tả
                  </h3>
                  <p className='text-gray-600'>{model.explanation}</p>
                </div>

                {/* Chi phí */}
                <div className='mb-6'>
                  <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                    Chi phí đầu tư
                  </h3>
                  <div className='space-y-3'>
                    {model.costs.map((cost, index) => (
                      <div key={index} className='bg-gray-50 p-4 rounded-lg'>
                        <div className='flex justify-between items-center mb-1'>
                          <span className='font-medium text-gray-800'>
                            {cost.item}
                          </span>
                          <span className='text-blue-600 font-semibold'>
                            {cost.amount}
                          </span>
                        </div>
                        <p className='text-sm text-gray-600'>
                          {cost.description}
                        </p>
                      </div>
                    ))}
                    <div className='bg-blue-50 p-4 rounded-lg mt-3'>
                      <div className='flex justify-between items-center'>
                        <span className='font-bold text-gray-800'>
                          Tổng đầu tư
                        </span>
                        <span className='text-blue-600 font-bold'>
                          {model.total_investment}
                        </span>
                      </div>
                      <div className='flex justify-between items-center mt-2'>
                        <span className='font-medium text-gray-800'>
                          Thời gian hoàn vốn dự kiến
                        </span>
                        <span className='text-blue-600 font-medium'>
                          {model.roi_time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Khuyến nghị */}
                <div>
                  <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                    Khuyến nghị
                  </h3>
                  <div className='grid gap-4'>
                    {model.recommendations.map((rec, index) => (
                      <div key={index} className='bg-green-50 p-4 rounded-lg'>
                        <h4 className='font-medium text-gray-800 mb-1'>
                          {rec.title}
                        </h4>
                        <p className='text-sm text-gray-600'>{rec.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusinessModels
