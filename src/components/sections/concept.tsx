"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/fade-in-section";
import { Heart, Users, Scale, Quote } from "lucide-react";

export function ConceptSection() {
  const relationships = [
    {
      icon: Heart,
      title: "Quan hệ hôn nhân",
      description: "Quan hệ giữa vợ và chồng - cơ sở, nền tảng hình thành nên các mối quan hệ khác trong gia đình, là cơ sở pháp lý cho sự tồn tại của mỗi gia đình.",
      points: [
        "Là cơ sở pháp lý cho sự tồn tại của mỗi gia đình",
        "Hình thành nên các mối quan hệ khác trong gia đình",
      ],
    },
    {
      icon: Users,
      title: "Quan hệ huyết thống",
      description: "Quan hệ giữa những người cùng một dòng máu, nảy sinh từ quan hệ hôn nhân. Đây là mối quan hệ tự nhiên, là yếu tố mạnh mẽ nhất gắn kết các thành viên trong gia đình.",
      points: [
        "Quan hệ cha mẹ và con cái, ông bà với cháu chắt, anh chị em, cô dì chú bác với cháu",
        "Ngày nay còn thừa nhận quan hệ cha mẹ nuôi (người đỡ đầu) với con nuôi (công nhận bằng thủ tục pháp lý)",
      ],
    },
    {
      icon: Scale,
      title: "Quan hệ nuôi dưỡng",
      description: "Sự quan tâm chăm sóc nuôi dưỡng giữa các thành viên trong gia đình cả về vật chất và tinh thần. Vừa là trách nhiệm, nghĩa vụ, vừa là quyền lợi thiêng liêng.",
      points: [
        "Dù hình thành từ hình thức nào, trong gia đình tất yếu nảy sinh quan hệ nuôi dưỡng",
        "Xã hội có thể chia sẻ nhưng không thể thay thế hoàn toàn sự chăm sóc, nuôi dưỡng của gia đình",
      ],
    },
  ];

  return (
    <section id="concept" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Phần 1
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Khái niệm Gia đình
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
        </FadeInSection>

        {/* Trích dẫn Mác - Ăngghen */}
        <FadeInSection delay={0.1} className="mb-12">
          <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground/90 leading-relaxed font-serif italic mb-4">
                  &ldquo;Quan hệ thứ ba tham dự ngay từ đầu vào quá trình phát triển lịch sử: hàng ngày tái tạo ra đời sống của bản thân mình, con người bắt đầu tạo ra những người khác, sinh sôi, nảy nở — đó là quan hệ giữa chồng và vợ, cha mẹ và con cái, đó là gia đình.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground font-medium">— C. Mác và Ph. Ăngghen</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2} className="mb-16">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 border border-border/50">
            <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-serif italic text-center">
              &ldquo;Gia đình là một hình thức cộng đồng xã hội đặc biệt, được hình thành, duy trì và củng cố chủ yếu dựa trên cơ sở hôn nhân, quan hệ huyết thống và quan hệ nuôi dưỡng, cùng với những quy định về quyền và nghĩa vụ của các thành viên trong gia đình.&rdquo;
            </blockquote>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Các quan hệ này có mối liên hệ chặt chẽ với nhau và biến đổi, phát triển phụ thuộc vào trình độ phát triển kinh tế và thể chế chính trị - xã hội.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
            Ba mối quan hệ cơ bản
          </h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Cơ sở hình thành gia đình dựa trên các mối quan hệ tồn tại trong sự gắn bó, liên kết, ràng buộc và phụ thuộc lẫn nhau, bởi nghĩa vụ, quyền lợi và trách nhiệm của mỗi người, được quy định bằng pháp lý hoặc đạo lý.
          </p>
        </FadeInSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {relationships.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
