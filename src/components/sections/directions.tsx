"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/fade-in-section";
import { Target, TrendingUp, Sparkles, Award } from "lucide-react";

export function DirectionsSection() {
  const directions = [
    {
      number: "01",
      icon: Target,
      title: "Tăng cường sự lãnh đạo của Đảng",
      description: "Nâng cao nhận thức của xã hội về xây dựng và phát triển gia đình Việt Nam",
      details: [
        "Đẩy mạnh công tác tuyên truyền để các cấp ủy, chính quyền, các tổ chức đoàn thể từ trung ương đến cơ sở nhận thức sâu sắc về vị trí, vai trò và tầm quan trọng của gia đình và công tác xây dựng, phát triển gia đình Việt Nam hiện nay.",
        "Coi đây là một trong những động lực quan trọng quyết định thành công sự phát triển bền vững kinh tế - xã hội trong thời kỳ công nghiệp hóa, hiện đại hóa đất nước, xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.",
        "Cấp ủy và chính quyền các cấp phải đưa nội dung, mục tiêu của công tác xây dựng và phát triển gia đình vào chiến lược phát triển kinh tế - xã hội và chương trình kế hoạch công tác hàng năm của các bộ, ngành, địa phương.",
      ],
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Phát triển kinh tế - xã hội",
      description: "Nâng cao đời sống vật chất, kinh tế hộ gia đình",
      details: [
        "Xây dựng và hoàn thiện chính sách phát triển kinh tế - xã hội để góp phần củng cố, ổn định và phát triển kinh tế gia đình; có chính sách ưu tiên hỗ trợ phát triển kinh tế gia đình cho các gia đình liệt sỹ, thương binh bệnh binh, gia đình các dân tộc ít người, gia đình nghèo, gia đình đang sinh sống ở vùng sâu, vùng xa, vùng khó khăn.",
        "Có chính sách kịp thời hỗ trợ các gia đình phát triển kinh tế, sản xuất kinh doanh các sản phẩm mới, sản phẩm sử dụng nguyên liệu tại chỗ, hỗ trợ các gia đình tham gia sản xuất phục vụ xuất khẩu.",
        "Tích cực khai thác và tạo điều kiện thuận lợi cho các hộ gia đình vay vốn ngắn hạn và dài hạn nhằm xóa đói giảm nghèo, chuyển dịch cơ cấu sản xuất, mở rộng phát triển kinh tế, đẩy mạnh loại hình kinh tế trang trại, vươn lên làm giàu chính đáng.",
      ],
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Kế thừa và tiếp thu",
      description: "Kế thừa giá trị truyền thống, tiếp thu tiến bộ nhân loại",
      details: [
        "Gia đình truyền thống được hun đúc từ lâu đời trong lịch sử dân tộc; bước vào thời kỳ mới bộc lộ cả mặt tích cực và tiêu cực. Cần xác định, duy trì những nét đẹp có ích; đồng thời tìm ra những hạn chế và tiến tới khắc phục những hủ tục của gia đình cũ.",
        "Xây dựng gia đình Việt Nam hiện nay là xây dựng mô hình gia đình hiện đại, phù hợp với tiến trình công nghiệp hóa, hiện đại hóa đất nước và hội nhập kinh tế quốc tế.",
        "Vừa kế thừa và phát huy những giá trị văn hóa truyền thống tốt đẹp của gia đình Việt Nam, vừa kết hợp với những giá trị tiên tiến của gia đình hiện đại để phù hợp với sự vận động phát triển tất yếu của xã hội.",
      ],
    },
    {
      number: "04",
      icon: Award,
      title: "Phát triển phong trào Gia đình Văn hóa",
      description: "Nâng cao chất lượng phong trào xây dựng gia đình văn hóa",
      details: [
        "Gia đình văn hóa là mô hình tiến bộ, danh hiệu nhiều gia đình Việt Nam mong muốn hướng đến. Tiêu chí: gia đình ấm no, hòa thuận, tiến bộ, khỏe mạnh và hạnh phúc; thực hiện tốt nghĩa vụ công dân; thực hiện kế hoạch hóa gia đình; đoàn kết tương trợ trong cộng đồng dân cư.",
        "Hình thành từ những năm 60 thế kỷ XX tại một địa phương của tỉnh Hưng Yên; đến nay đã trở thành phong trào thi đua có độ bao phủ hầu hết các địa phương. Phong trào tác động đến nền tảng gia đình với những quy tắc ứng xử tốt đẹp, phát huy giá trị đạo đức truyền thống; chất lượng cuộc sống gia đình ngày càng được nâng cao.",
        "Cần tránh xu hướng chạy theo thành tích, phản ánh không thực chất phong trào và chất lượng gia đình văn hóa. Tiêu chí xây dựng gia đình văn hóa phải phù hợp và có ý nghĩa thiết thực với đời sống nhân dân; công tác bình xét danh hiệu phải theo tiêu chí thống nhất, nguyên tắc công bằng, dân chủ, đáp ứng nguyện vọng, tạo sự đồng tình hưởng ứng của nhân dân.",
      ],
    },
  ];

  return (
    <section id="directions" className="py-24 md:py-32 px-6 bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Phần 6
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Phương hướng Xây dựng Gia đình
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bốn phương hướng cơ bản xây dựng và phát triển gia đình Việt Nam 
            trong thời kỳ quá độ lên chủ nghĩa xã hội
          </p>
        </FadeInSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {directions.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                {/* Background number */}
                <span className="absolute -right-4 -top-4 text-[120px] font-serif font-bold text-secondary/80 leading-none select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                  {item.number}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>

                  <p className="text-accent font-medium text-sm mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Conclusion */}
        <FadeInSection delay={0.4} className="mt-16">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
              Mục tiêu hướng đến
            </h3>
            <p className="text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto text-lg">
              Làm cho gia đình thực sự là <strong>tế bào lành mạnh của xã hội</strong>, 
              là <strong>tổ ấm của mỗi người</strong>, góp phần xây dựng xã hội 
              Việt Nam dân giàu, nước mạnh, dân chủ, công bằng, văn minh.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
