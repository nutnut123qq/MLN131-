"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/fade-in-section";
import { Heart, Users, Scale } from "lucide-react";

export function ConceptSection() {
  const relationships = [
    {
      icon: Heart,
      title: "Quan hệ hôn nhân",
      description: "Quan hệ giữa vợ và chồng - cơ sở, nền tảng hình thành nên các mối quan hệ khác trong gia đình, là cơ sở pháp lý cho sự tồn tại của mỗi gia đình.",
    },
    {
      icon: Users,
      title: "Quan hệ huyết thống",
      description: "Quan hệ giữa những người cùng một dòng máu, nảy sinh từ quan hệ hôn nhân. Đây là mối quan hệ tự nhiên, là yếu tố mạnh mẽ nhất gắn kết các thành viên trong gia đình.",
    },
    {
      icon: Scale,
      title: "Quan hệ nuôi dưỡng",
      description: "Sự quan tâm chăm sóc nuôi dưỡng giữa các thành viên trong gia đình cả về vật chất và tinh thần. Vừa là trách nhiệm, nghĩa vụ, vừa là quyền lợi thiêng liêng.",
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

        <FadeInSection delay={0.2} className="mb-16">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 border border-border/50">
            <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-serif italic text-center">
              &ldquo;Gia đình là một hình thức cộng đồng xã hội đặc biệt, được hình thành, duy trì và củng cố chủ yếu dựa trên cơ sở hôn nhân, quan hệ huyết thống và quan hệ nuôi dưỡng, cùng với những quy định về quyền và nghĩa vụ của các thành viên trong gia đình.&rdquo;
            </blockquote>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
            Ba mối quan hệ cơ bản
          </h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Cơ sở hình thành gia đình dựa trên các mối quan hệ tồn tại trong sự gắn bó, liên kết, ràng buộc và phụ thuộc lẫn nhau
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
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
