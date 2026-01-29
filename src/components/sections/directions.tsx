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
      details: "Đẩy mạnh công tác tuyên truyền để các cấp ủy, chính quyền nhận thức sâu sắc về vị trí, vai trò và tầm quan trọng của gia đình. Đưa nội dung, mục tiêu của công tác xây dựng gia đình vào chiến lược phát triển kinh tế - xã hội.",
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Phát triển kinh tế - xã hội",
      description: "Nâng cao đời sống vật chất, kinh tế hộ gia đình",
      details: "Xây dựng và hoàn thiện chính sách phát triển kinh tế - xã hội, có chính sách ưu tiên hỗ trợ cho các gia đình liệt sỹ, thương binh, dân tộc ít người, gia đình nghèo. Tạo điều kiện thuận lợi cho các hộ gia đình vay vốn, xóa đói giảm nghèo.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Kế thừa và tiếp thu",
      description: "Kế thừa giá trị truyền thống, tiếp thu tiến bộ nhân loại",
      details: "Xác định, duy trì những nét đẹp có ích của gia đình truyền thống; đồng thời tìm ra những hạn chế và khắc phục hủ tục. Xây dựng mô hình gia đình hiện đại, phù hợp với công nghiệp hóa, hiện đại hóa và hội nhập quốc tế.",
    },
    {
      number: "04",
      icon: Award,
      title: "Phát triển phong trào Gia đình Văn hóa",
      description: "Nâng cao chất lượng phong trào xây dựng gia đình văn hóa",
      details: "Gia đình văn hóa là gia đình ấm no, hòa thuận, tiến bộ, khỏe mạnh và hạnh phúc. Nghiên cứu, nhân rộng mô hình gia đình văn hóa trong thời kỳ công nghiệp hóa với những giá trị mới tiên tiến, đảm bảo nguyên tắc công bằng, dân chủ.",
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

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.details}
                  </p>
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
