"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/fade-in-section";
import { Hexagon, Home, Link2 } from "lucide-react";

export function PositionSection() {
  const positions = [
    {
      icon: Hexagon,
      title: "Tế bào của xã hội",
      quote: "\"Nhiều gia đình cộng lại mới thành xã hội, xã hội tốt thì gia đình càng tốt, gia đình tốt thì xã hội mới tốt. Hạt nhân của xã hội chính là gia đình.\"",
      author: "Chủ tịch Hồ Chí Minh",
      description: "Gia đình có vai trò quyết định đối với sự tồn tại, vận động và phát triển của xã hội. Với việc sản xuất ra tư liệu tiêu dùng, tư liệu sản xuất, tái sản xuất ra con người, gia đình như một tế bào tự nhiên, là đơn vị cơ sở để tạo nên cơ thể xã hội.",
    },
    {
      icon: Home,
      title: "Tổ ấm của mỗi người",
      quote: "Gia đình là môi trường tốt nhất để mỗi cá nhân được yêu thương, nuôi dưỡng, chăm sóc, trưởng thành, phát triển.",
      author: "",
      description: "Sự yên ổn, hạnh phúc của mỗi gia đình là tiền đề, điều kiện quan trọng cho sự hình thành, phát triển nhân cách, thể lực, trí lực để trở thành công dân tốt cho xã hội. Chỉ trong môi trường yên ấm của gia đình, cá nhân mới cảm thấy bình yên, hạnh phúc.",
    },
    {
      icon: Link2,
      title: "Cầu nối với xã hội",
      quote: "Gia đình là cộng đồng xã hội đầu tiên mà mỗi cá nhân sinh sống, có ảnh hưởng rất lớn đến sự hình thành và phát triển nhân cách của từng người.",
      author: "",
      description: "Gia đình là môi trường đầu tiên mà mỗi cá nhân học được và thực hiện quan hệ xã hội. Nhiều thông tin, hiện tượng của xã hội thông qua lăng kính gia đình mà tác động tích cực hoặc tiêu cực đến sự phát triển của mỗi cá nhân.",
    },
  ];

  return (
    <section id="position" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Phần 2
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vị trí của Gia đình trong Xã hội
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </FadeInSection>

        <StaggerContainer className="space-y-8" staggerDelay={0.2}>
          {positions.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <blockquote className="border-l-4 border-accent/30 pl-6 py-2 mb-4 bg-secondary/50 rounded-r-lg">
                      <p className="text-foreground/80 italic leading-relaxed">
                        {item.quote}
                      </p>
                      {item.author && (
                        <footer className="text-sm text-accent mt-2 font-medium">
                          — {item.author}
                        </footer>
                      )}
                    </blockquote>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
