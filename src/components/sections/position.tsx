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
      description: "Gia đình có vai trò quyết định đối với sự tồn tại, vận động và phát triển của xã hội. Với việc sản xuất ra tư liệu tiêu dùng, tư liệu sản xuất, tái sản xuất ra con người, gia đình như một tế bào tự nhiên, là đơn vị cơ sở để tạo nên cơ thể xã hội. Không có gia đình để tái tạo ra con người thì xã hội không thể tồn tại và phát triển được.",
      details: [
        "Theo Ăngghen: hai loại sản xuất quyết định trật tự xã hội — sản xuất tư liệu sinh hoạt và sản xuất ra bản thân con người (truyền nòi giống); trình độ phát triển của lao động và của gia đình quyết định xã hội.",
        "Mức độ tác động của gia đình phụ thuộc vào bản chất chế độ xã hội, đường lối chính sách của giai cấp cầm quyền. Muốn xã hội lành mạnh phải quan tâm xây dựng tế bào gia đình tốt.",
      ],
    },
    {
      icon: Home,
      title: "Tổ ấm của mỗi người",
      quote: "Gia đình là môi trường tốt nhất để mỗi cá nhân được yêu thương, nuôi dưỡng, chăm sóc, trưởng thành, phát triển.",
      author: "",
      description: "Từ khi còn nằm trong bụng mẹ đến lúc lọt lòng và suốt cuộc đời, mỗi cá nhân đều gắn bó chặt chẽ với gia đình. Sự yên ổn, hạnh phúc của mỗi gia đình là tiền đề cho sự hình thành, phát triển nhân cách, thể lực, trí lực để trở thành công dân tốt. Chỉ trong môi trường yên ấm của gia đình, cá nhân mới cảm thấy bình yên, hạnh phúc, có động lực phấn đấu trở thành con người xã hội tốt.",
      details: [
        "Gia đình mang lại các giá trị hạnh phúc, sự hài hòa trong đời sống cá nhân của mỗi thành viên.",
        "Quan hệ tình cảm thiêng liêng, sâu đậm giữa vợ chồng, cha mẹ và con cái, anh chị em mà không cộng đồng nào có thể thay thế.",
      ],
    },
    {
      icon: Link2,
      title: "Cầu nối với xã hội",
      quote: "Gia đình là cộng đồng xã hội đầu tiên mà mỗi cá nhân sinh sống, có ảnh hưởng rất lớn đến sự hình thành và phát triển nhân cách của từng người.",
      author: "",
      description: "Gia đình là môi trường đầu tiên mà mỗi cá nhân học được và thực hiện quan hệ xã hội. Mỗi cá nhân vừa là thành viên gia đình vừa là thành viên xã hội. Gia đình cũng là cộng đồng để xã hội tác động đến cá nhân — nhiều thông tin, hiện tượng xã hội thông qua lăng kính gia đình tác động tích cực hoặc tiêu cực đến tư tưởng, đạo đức, lối sống, nhân cách.",
      details: [
        "Giai cấp cầm quyền muốn quản lý xã hội đều coi trọng việc xây dựng và củng cố gia đình. Trong CNXH: bảo vệ hôn nhân một vợ một chồng, bình đẳng trong gia đình, giải phóng phụ nữ.",
        "Bác Hồ: \"Nếu không giải phóng phụ nữ là xây dựng chủ nghĩa xã hội chỉ một nửa.\" Quan hệ gia đình trong CNXH có đặc điểm khác về chất so với các chế độ trước.",
      ],
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
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {item.details && item.details.length > 0 && (
                      <ul className="space-y-2 mt-4 border-t border-border/50 pt-4">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
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
