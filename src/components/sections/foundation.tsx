"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/fade-in-section";
import { Factory, Landmark, BookOpen, Heart } from "lucide-react";

export function FoundationSection() {
  const foundations = [
    {
      icon: Factory,
      title: "Cơ sở Kinh tế - Xã hội",
      number: "01",
      content: "Sự phát triển của lực lượng sản xuất và tương ứng trình độ của lực lượng sản xuất là quan hệ sản xuất mới, xã hội chủ nghĩa. Chế độ sở hữu xã hội chủ nghĩa đối với tư liệu sản xuất từng bước hình thành và củng cố thay thế chế độ tư hữu, tạo cơ sở kinh tế cho việc xây dựng quan hệ bình đẳng trong gia đình và giải phóng phụ nữ.",
      quote: "Xóa bỏ chế độ tư hữu về tư liệu sản xuất là xóa bỏ nguồn gốc gây nên tình trạng thống trị của người đàn ông trong gia đình, sự bất bình đẳng giữa nam và nữ.",
    },
    {
      icon: Landmark,
      title: "Cơ sở Chính trị - Xã hội",
      number: "02",
      content: "Việc thiết lập chính quyền nhà nước của giai cấp công nhân và nhân dân lao động, nhà nước xã hội chủ nghĩa. Nhà nước là công cụ xóa bỏ những luật lệ cũ kỹ, lạc hậu, đè nặng lên vai người phụ nữ đồng thời thực hiện việc giải phóng phụ nữ và bảo vệ hạnh phúc gia đình.",
      quote: "Chính quyền xô viết là chính quyền đầu tiên và duy nhất trên thế giới đã hoàn toàn thủ tiêu tất cả pháp luật cũ kỹ, tư sản, đê tiện.",
    },
    {
      icon: BookOpen,
      title: "Cơ sở Văn hóa",
      number: "03",
      content: "Những giá trị văn hóa được xây dựng trên nền tảng hệ tư tưởng chính trị của giai cấp công nhân từng bước hình thành và dần giữ vai trò chủ đạo. Sự phát triển hệ thống giáo dục, đào tạo, khoa học và công nghệ góp phần nâng cao trình độ dân trí.",
      quote: "Thiếu đi cơ sở văn hóa, hoặc cơ sở văn hóa không đi liền với cơ sở kinh tế, chính trị, thì việc xây dựng gia đình sẽ lệch lạc, không đạt hiệu quả cao.",
    },
    {
      icon: Heart,
      title: "Chế độ Hôn nhân Tiến bộ",
      number: "04",
      content: "Hôn nhân xuất phát từ tình yêu, tự nguyện, một vợ một chồng, vợ chồng bình đẳng và được đảm bảo về pháp lý. Đây là bước phát triển tất yếu của quan hệ hôn nhân trong xã hội mới.",
      quote: "Tình yêu là khát vọng của con người trong mọi thời đại. Chừng nào hôn nhân không được xây dựng trên cơ sở tình yêu thì chừng đó hạnh phúc gia đình sẽ bị hạn chế.",
    },
  ];

  return (
    <section id="foundation" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Phần 4
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cơ sở xây dựng Gia đình
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trong thời kỳ quá độ lên chủ nghĩa xã hội
          </p>
        </FadeInSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <StaggerContainer className="space-y-12" staggerDelay={0.2}>
            {foundations.map((item, index) => (
              <StaggerItem key={index}>
                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow duration-300">
                      <div className={`flex items-center gap-4 mb-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-7 h-7 text-accent" />
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">
                            Cơ sở {item.number}
                          </span>
                          <h3 className="font-serif text-xl font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {item.content}
                      </p>

                      <blockquote className={`border-l-4 border-accent/30 pl-4 py-2 bg-secondary/50 rounded-r-lg ${index % 2 === 1 ? "md:border-l-0 md:border-r-4 md:pr-4 md:pl-0 md:rounded-l-lg md:rounded-r-none md:text-right" : ""}`}>
                        <p className="text-sm text-foreground/70 italic">
                          {item.quote}
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-md" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
