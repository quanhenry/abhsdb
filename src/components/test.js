const businessPlanData = {
  title: "Kế hoạch kinh doanh: Quán cà phê sân vườn Green Oasis",
  overview: {
    idea: "Green Oasis là một quán cà phê sân vườn độc đáo, kết hợp giữa không gian xanh tự nhiên và đồ uống chất lượng cao. Chúng tôi tạo ra một môi trường thư giãn, thoải mái cho khách hàng thưởng thức cà phê và các loại đồ uống khác. Quán được thiết kế với nhiều cây xanh, hoa và tiểu cảnh, tạo cảm giác gần gũi với thiên nhiên. Ngoài ra, chúng tôi cũng cung cấp các loại bánh ngọt và đồ ăn nhẹ phù hợp với concept sân vườn.",
    problem:
      "Cuộc sống đô thị hiện đại khiến nhiều người cảm thấy stress và thiếu không gian thư giãn. Các quán cà phê hiện tại thường có không gian chật hẹp, ồn ào và thiếu yếu tố tự nhiên. Nhiều người muốn tìm một nơi yên tĩnh, gần gũi với thiên nhiên để thư giãn và làm việc.",
    solution:
      "Green Oasis cung cấp một không gian rộng rãi, thoáng đãng với nhiều cây xanh và tiểu cảnh, tạo cảm giác như đang ngồi trong một khu vườn. Chúng tôi sử dụng các loại cà phê chất lượng cao và có menu đa dạng phù hợp với nhiều đối tượng khách hàng. Quán được thiết kế với nhiều góc riêng tư, phù hợp cho cả việc thư giãn và làm việc.",
    target:
      "Nhân viên văn phòng cần không gian làm việc yên tĩnh, Người yêu thiên nhiên muốn tận hưởng không gian xanh, Các cặp đôi tìm kiếm nơi hẹn hò lãng mạn, Nhóm bạn bè muốn gặp gỡ trò chuyện trong môi trường thoải mái",
  },
  financial: {
    initialInvestment: {
      total: "1,500,000,000 VNĐ",
      breakdown: {
        equipment: "400,000,000 VNĐ",
        renovation: "600,000,000 VNĐ",
        initialInventory: "200,000,000 VNĐ",
        marketing: "100,000,000 VNĐ",
        others: "200,000,000 VNĐ",
      },
    },
    monthlyOperatingCost: {
      total: "250,000,000 VNĐ",
      breakdown: {
        rent: "80,000,000 VNĐ",
        utilities: "20,000,000 VNĐ",
        ingredients: "70,000,000 VNĐ",
        labor: "60,000,000 VNĐ",
        marketing: "10,000,000 VNĐ",
        others: "10,000,000 VNĐ",
      },
    },
    returnPeriod: {
      expected: "18 tháng",
      scenarios: {
        optimistic: "12 tháng",
        realistic: "18 tháng",
        pessimistic: "24 tháng",
      },
    },
    profitMargin: {
      overall: "30%",
      byProduct: {
        mainDishes: "35%",
        beverages: "40%",
        sideItems: "25%",
      },
    },
    projectedRevenue: {
      monthly: {
        firstQuarter: "300,000,000 VNĐ",
        secondQuarter: "400,000,000 VNĐ",
        afterStabilization: "500,000,000 VNĐ",
      },
    },
  },
  market: {
    competition: {
      direct:
        "Các quán cà phê sân vườn khác, Các quán cà phê có không gian xanh, Các quán cà phê cao cấp",
      indirect:
        "Nhà hàng có không gian ngoài trời, Công viên công cộng, Quán trà đạo",
      analysis:
        "Thị trường cà phê sân vườn đang phát triển mạnh, tuy nhiên vẫn còn nhiều cơ hội cho các concept độc đáo và chất lượng cao.",
    },
    entryBarriers: {
      financial: "Vốn đầu tư ban đầu cao",
      operational: "Quản lý không gian rộng và nhiều cây xanh",
      brand: "Xây dựng thương hiệu và thu hút khách hàng mới",
      detailed:
        "Tìm kiếm địa điểm phù hợp với diện tích lớn, Đào tạo nhân viên có kỹ năng pha chế và chăm sóc khách hàng tốt, Duy trì chất lượng đồ uống và dịch vụ ổn định",
    },
    trends: {
      current:
        "Tăng cường sử dụng nguyên liệu hữu cơ, Xu hướng làm việc từ xa tại quán cà phê, Quan tâm đến trải nghiệm và không gian độc đáo",
      future:
        "Ứng dụng công nghệ trong quản lý và phục vụ khách hàng, Tăng cường sử dụng năng lượng tái tạo, Kết hợp cà phê với các hoạt động văn hóa, nghệ thuật",
    },
  },
  implementation: {
    resources: [
      "Vốn đầu tư",
      "Địa điểm rộng rãi với sân vườn",
      "Nguồn cung cấp cà phê chất lượng cao",
      "Đội ngũ nhân viên có kỹ năng",
      "Hệ thống quản lý hiệu quả",
    ],
    requiredSkills: [
      "Kỹ năng pha chế cà phê chuyên nghiệp",
      "Quản lý nhà hàng/quán cà phê",
      "Thiết kế và chăm sóc cảnh quan",
      "Marketing và xây dựng thương hiệu",
      "Quản lý tài chính và kiểm soát chi phí",
    ],
    prepTime: {
      phases: [
        {
          name: "Lập kế hoạch và thiết kế",
          duration: "2 tháng",
          tasks: [
            "Nghiên cứu thị trường và xác định concept",
            "Thiết kế không gian và menu",
            "Lập kế hoạch tài chính và marketing",
          ],
        },
        {
          name: "Chuẩn bị cơ sở vật chất",
          duration: "3 tháng",
          tasks: [
            "Thuê mặt bằng và cải tạo không gian",
            "Mua sắm trang thiết bị và nội thất",
            "Thiết kế và thi công cảnh quan sân vườn",
          ],
        },
        {
          name: "Chuẩn bị vận hành",
          duration: "1 tháng",
          tasks: [
            "Tuyển dụng và đào tạo nhân viên",
            "Xây dựng quy trình vận hành",
            "Chuẩn bị nguồn nguyên liệu và đồ uống",
          ],
        },
        {
          name: "Khai trương và vận hành thử",
          duration: "1 tháng",
          tasks: [
            "Tổ chức sự kiện khai trương",
            "Vận hành thử và điều chỉnh",
            "Thu thập phản hồi từ khách hàng và cải thiện",
          ],
        },
      ],
    },
  },
  risks: {
    financial: {
      main: "Rủi ro về dòng tiền và khả năng hoàn vốn do chi phí đầu tư ban đầu cao",
      details: [
        "Doanh thu không đạt kỳ vọng trong giai đoạn đầu",
        "Chi phí vận hành cao hơn dự kiến",
        "Khó khăn trong việc duy trì lợi nhuận ổn định",
        "Biến động giá nguyên liệu đầu vào",
      ],
    },
    market: {
      main: "Cạnh tranh gay gắt và thay đổi nhanh chóng của thị trường cà phê",
      details: [
        "Xuất hiện đối thủ cạnh tranh mới với concept tương tự",
        "Thay đổi trong thị hiếu và xu hướng tiêu dùng",
        "Suy thoái kinh tế ảnh hưởng đến chi tiêu của khách hàng",
        "Khó khăn trong việc duy trì lượng khách hàng ổn định",
      ],
    },
    operational: {
      main: "Khó khăn trong việc duy trì chất lượng dịch vụ và quản lý không gian rộng lớn",
      details: [
        "Quản lý và bảo trì không gian sân vườn phức tạp",
        "Khó khăn trong việc duy trì chất lượng đồ uống ổn định",
        "Thiếu hụt nhân sự có kỹ năng",
        "Rủi ro về an toàn thực phẩm và vệ sinh",
      ],
    },
    legal: {
      main: "Tuân thủ các quy định pháp lý liên quan đến kinh doanh F&B và sử dụng không gian công cộng",
      details: [
        "Thay đổi trong quy định về an toàn thực phẩm",
        "Vấn đề về giấy phép kinh doanh và sử dụng đất",
        "Tuân thủ quy định về bảo vệ môi trường",
        "Thay đổi trong luật lao động và bảo hiểm xã hội",
      ],
    },
    solutions: {
      preventive: [
        "Xây dựng kế hoạch tài chính chi tiết và dự phòng",
        "Đa dạng hóa sản phẩm và dịch vụ để giảm rủi ro",
        "Đào tạo nhân viên thường xuyên để nâng cao chất lượng dịch vụ",
        "Thường xuyên cập nhật và tuân thủ các quy định pháp lý",
      ],
      responsive: [
        "Linh hoạt điều chỉnh chiến lược kinh doanh theo thị trường",
        "Tăng cường hoạt động marketing và chăm sóc khách hàng",
        "Tối ưu hóa quy trình vận hành để giảm chi phí",
        "Xây dựng mạng lưới đối tác và nhà cung cấp đa dạng",
      ],
    },
  },
  strengthsWeaknesses: {
    advantages: {
      product: [
        "Cà phê chất lượng cao từ nguồn nguyên liệu tuyển chọn",
        "Menu đa dạng phù hợp với nhiều đối tượng khách hàng",
        "Đồ uống được pha chế bởi barista chuyên nghiệp",
        "Sử dụng nguyên liệu hữu cơ và thân thiện với môi trường",
      ],
      service: [
        "Không gian rộng rãi, thoáng đãng với nhiều cây xanh",
        "Nhân viên được đào tạo chuyên nghiệp, thân thiện",
        "Có các khu vực riêng tư phù hợp cho làm việc và họp nhóm",
        "Tổ chức các sự kiện và hoạt động văn hóa định kỳ",
      ],
      location: [
        "Vị trí trung tâm, dễ tiếp cận",
        "Có bãi đỗ xe rộng rãi",
        "Gần các khu văn phòng và trung tâm thương mại",
        "Không gian yên tĩnh, tách biệt với khu vực đông đúc",
      ],
    },
    limitations: {
      current: [
        "Chi phí vận hành cao do diện tích lớn",
        "Cần thời gian để xây dựng thương hiệu và thu hút khách hàng",
        "Phụ thuộc vào thời tiết do có không gian ngoài trời",
        "Khó khăn trong việc duy trì chất lượng cây xanh và cảnh quan",
      ],
      improvement: [
        "Tối ưu hóa quy trình vận hành để giảm chi phí",
        "Tăng cường hoạt động marketing và xây dựng cộng đồng khách hàng",
        "Thiết kế không gian linh hoạt để sử dụng trong mọi điều kiện thời tiết",
        "Thuê chuyên gia cảnh quan và đầu tư vào hệ thống chăm sóc cây tự động",
      ],
    },
  },
  requiredKnowledge: {
    culinary: {
      title: "Kiến thức ẩm thực và pha chế",
      details: [
        "Kỹ thuật rang xay và pha chế cà phê chuyên nghiệp",
        "Kiến thức về các loại cà phê và nguồn gốc xuất xứ",
        "Kỹ năng pha chế các loại đồ uống khác như trà, sinh tố",
        "Hiểu biết về cách kết hợp hương vị và tạo ra menu đặc biệt",
        "Kiến thức về an toàn thực phẩm và vệ sinh trong pha chế",
      ],
      importance: 90,
    },
    business: {
      title: "Kiến thức kinh doanh và quản lý",
      details: [
        "Lập kế hoạch kinh doanh và quản lý tài chính",
        "Quản lý nhân sự và đào tạo nhân viên",
        "Marketing và xây dựng thương hiệu",
        "Quản lý chuỗi cung ứng và kiểm soát hàng tồn kho",
        "Phân tích dữ liệu kinh doanh và ra quyết định",
      ],
      importance: 85,
    },
    softSkills: {
      title: "Kỹ năng mềm",
      details: [
        "Giao tiếp và chăm sóc khách hàng",
        "Lãnh đạo và quản lý đội nhóm",
        "Giải quyết vấn đề và ra quyết định",
        "Quản lý thời gian và tổ chức công việc",
        "Khả năng thích ứng và linh hoạt",
        "Sáng tạo trong phát triển sản phẩm và dịch vụ",
      ],
      importance: 80,
    },
    technology: {
      title: "Kiến thức công nghệ",
      details: [
        "Sử dụng phần mềm quản lý nhà hàng/quán cà phê",
        "Quản lý mạng xã hội và marketing online",
        "Hệ thống thanh toán điện tử và quản lý tài chính",
        "Công nghệ trong bảo quản và chế biến thực phẩm",
        "Ứng dụng IoT trong quản lý không gian và cây xanh",
      ],
      importance: 75,
    },
    legal: {
      title: "Kiến thức pháp lý",
      details: [
        "Quy định về an toàn thực phẩm và vệ sinh",
        "Luật lao động và bảo hiểm xã hội",
        "Quy định về kinh doanh F&B và sử dụng không gian công cộng",
        "Luật bảo vệ môi trường và xử lý chất thải",
        "Quy định về thuế và kế toán cho doanh nghiệp F&B",
      ],
      importance: 70,
    },
  },
  finalEvaluation: {
    feasibility: {
      score: "7.5/10",
      reasons: [
        "Concept độc đáo và phù hợp với xu hướng thị trường",
        "Vị trí đắc địa và không gian rộng rãi",
        "Đội ngũ quản lý có kinh nghiệm trong ngành F&B",
        "Chi phí đầu tư ban đầu cao nhưng có tiềm năng sinh lời tốt",
      ],
    },
    skillMatch: {
      score: "8/10",
      evaluation: [
        "Kiến thức chuyên sâu về cà phê và pha chế",
        "Kinh nghiệm quản lý và vận hành quán cà phê",
        "Kỹ năng marketing và xây dựng thương hiệu tốt",
        "Cần bổ sung kiến thức về quản lý cảnh quan và môi trường",
      ],
    },
    successPotential: {
      score: "8/10",
      factors: [
        "Xu hướng tiêu dùng hướng đến trải nghiệm và không gian xanh",
        "Vị trí đắc địa và concept độc đáo",
        "Đội ngũ quản lý có kinh nghiệm và tầm nhìn",
        "Tiềm năng mở rộng và phát triển thương hiệu",
      ],
    },
    conclusion:
      "Dự án Quán cà phê sân vườn Green Oasis có tiềm năng thành công cao với concept độc đáo, vị trí đắc địa và đội ngũ quản lý có kinh nghiệm, tuy nhiên cần chú ý đến việc quản lý chi phí và xây dựng thương hiệu trong giai đoạn đầu.",
    recommendations: [
      "Tập trung vào xây dựng thương hiệu và marketing trong giai đoạn đầu",
      "Đầu tư vào đào tạo nhân viên để đảm bảo chất lượng dịch vụ cao",
      "Phát triển các chương trình khách hàng thân thiết để tăng tỷ lệ quay lại",
      "Thường xuyên cập nhật menu và tổ chức các sự kiện đặc biệt để thu hút khách hàng",
    ],
  },
  chartData: {
    overviewChart: [
      {
        subject: "Concept độc đáo",
        A: 90,
        fullMark: 100,
      },
      {
        subject: "Vị trí",
        A: 85,
        fullMark: 100,
      },
      {
        subject: "Chất lượng sản phẩm",
        A: 88,
        fullMark: 100,
      },
      {
        subject: "Không gian xanh",
        A: 95,
        fullMark: 100,
      },
      {
        subject: "Dịch vụ khách hàng",
        A: 82,
        fullMark: 100,
      },
    ],
    financialMetrics: [
      {
        name: "Doanh thu dự kiến/tháng",
        amount: 500000000,
      },
      {
        name: "Chi phí vận hành/tháng",
        amount: 250000000,
      },
      {
        name: "Lợi nhuận dự kiến/tháng",
        amount: 150000000,
      },
    ],
    marketAnalysis: [
      {
        name: "Tiềm năng tăng trưởng",
        value: 85,
      },
      {
        name: "Mức độ cạnh tranh",
        value: 70,
      },
    ],
    implementation: [
      {
        name: "Chuẩn bị cơ sở vật chất",
        value: 90,
      },
      {
        name: "Đào tạo nhân viên",
        value: 85,
      },
      {
        name: "Marketing và quảng bá",
        value: 80,
      },
      {
        name: "Quản lý vận hành",
        value: 88,
      },
    ],
    riskAssessment: [
      {
        subject: "Rủi ro tài chính",
        A: 70,
        fullMark: 100,
      },
      {
        subject: "Rủi ro thị trường",
        A: 65,
        fullMark: 100,
      },
      {
        subject: "Rủi ro vận hành",
        A: 60,
        fullMark: 100,
      },
      {
        subject: "Rủi ro pháp lý",
        A: 55,
        fullMark: 100,
      },
    ],
    strengthWeakness: [
      {
        name: "Concept độc đáo",
        strength: 90,
        weakness: 10,
      },
      {
        name: "Vị trí",
        strength: 85,
        weakness: 15,
      },
      {
        name: "Chất lượng sản phẩm",
        strength: 88,
        weakness: 12,
      },
      {
        name: "Chi phí vận hành",
        strength: 60,
        weakness: 40,
      },
    ],
    knowledgeRequired: [
      {
        subject: "Ẩm thực và pha chế",
        A: 90,
        fullMark: 100,
      },
      {
        subject: "Kinh doanh và quản lý",
        A: 85,
        fullMark: 100,
      },
      {
        subject: "Kỹ năng mềm",
        A: 80,
        fullMark: 100,
      },
      {
        subject: "Công nghệ",
        A: 75,
        fullMark: 100,
      },
      {
        subject: "Pháp lý",
        A: 70,
        fullMark: 100,
      },
    ],
    finalScore: [
      {
        name: "Score",
        value: 78,
      },
    ],
  },
};
