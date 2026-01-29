"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/fade-in-section";
import { Factory, Landmark, BookOpen, Heart } from "lucide-react";

export function FoundationSection() {
  const foundations = [
    {
      icon: Factory,
      title: "Cơ sở Kinh tế - Xã hội",
      number: "01",
      content: "Sự phát triển của lực lượng sản xuất và quan hệ sản xuất mới xã hội chủ nghĩa. Cốt lõi là chế độ sở hữu xã hội chủ nghĩa đối với tư liệu sản xuất từng bước hình thành và củng cố thay thế chế độ tư hữu. Nguồn gốc áp bức bóc lột và bất bình đẳng trong xã hội và gia đình dần bị xóa bỏ, tạo cơ sở kinh tế cho xây dựng quan hệ bình đẳng trong gia đình và giải phóng phụ nữ.",
      quote: "Bước thứ hai và là bước chủ yếu là thủ tiêu chế độ tư hữu về ruộng đất, công xưởng và nhà máy. Chính như thế và chỉ có như thế mới mở được con đường giải phóng hoàn toàn và thật sự cho phụ nữ, mới thủ tiêu được 'chế độ nô lệ gia đình' nhờ có việc thay thế nền kinh tế gia đình cá thể bằng nền kinh tế xã hội hóa quy mô lớn. — V.I. Lênin",
      details: [
        "Xóa bỏ chế độ tư hữu là xóa bỏ nguồn gốc thống trị của người đàn ông trong gia đình, bất bình đẳng nam-nữ, nô dịch đối với phụ nữ.",
        "Biến lao động tư nhân trong gia đình thành lao động xã hội trực tiếp; hôn nhân được thực hiện dựa trên tình yêu chứ không phải vì lý do kinh tế hay địa vị xã hội.",
      ],
    },
    {
      icon: Landmark,
      title: "Cơ sở Chính trị - Xã hội",
      number: "02",
      content: "Việc thiết lập chính quyền nhà nước của giai cấp công nhân và nhân dân lao động — nhà nước xã hội chủ nghĩa. Lần đầu tiên trong lịch sử, nhân dân lao động thực hiện quyền lực không có sự phân biệt nam-nữ. Nhà nước là công cụ xóa bỏ luật lệ cũ kỹ, lạc hậu đè nặng lên vai người phụ nữ và thực hiện giải phóng phụ nữ, bảo vệ hạnh phúc gia đình.",
      quote: "Chính quyền xô viết là chính quyền đầu tiên và duy nhất trên thế giới đã hoàn toàn thủ tiêu tất cả pháp luật cũ kỹ, tư sản, đê tiện, những pháp luật đó đặt người phụ nữ vào tình trạng không bình đẳng với nam giới... đã hủy bỏ tất cả những đặc quyền của người đàn ông trong gia đình. — V.I. Lênin",
      details: [
        "Hệ thống pháp luật (Luật Hôn nhân và Gia đình) và chính sách xã hội (bình đẳng giới, dân số, việc làm, y tế, bảo hiểm...) vừa định hướng vừa thúc đẩy hình thành gia đình mới.",
        "Chừng nào hệ thống chính sách, pháp luật chưa hoàn thiện thì việc xây dựng gia đình và đảm bảo hạnh phúc gia đình còn hạn chế.",
      ],
    },
    {
      icon: BookOpen,
      title: "Cơ sở Văn hóa",
      number: "03",
      content: "Những giá trị văn hóa được xây dựng trên nền tảng hệ tư tưởng chính trị của giai cấp công nhân từng bước hình thành và giữ vai trò chủ đạo; đồng thời yếu tố văn hóa, phong tục tập quán, lối sống lạc hậu do xã hội cũ để lại từng bước bị loại bỏ. Sự phát triển giáo dục, đào tạo, khoa học và công nghệ góp phần nâng cao trình độ dân trí, cung cấp cho thành viên gia đình kiến thức, nhận thức mới, làm nền tảng cho các giá trị, chuẩn mực mới trong quan hệ gia đình.",
      quote: "Thiếu đi cơ sở văn hóa, hoặc cơ sở văn hóa không đi liền với cơ sở kinh tế, chính trị, thì việc xây dựng gia đình sẽ lệch lạc, không đạt hiệu quả cao.",
      details: [],
    },
    {
      icon: Heart,
      title: "Chế độ Hôn nhân Tiến bộ",
      number: "04",
      content: "Hôn nhân tiến bộ xuất phát từ tình yêu giữa nam và nữ, dẫn đến hôn nhân tự nguyện (nam nữ có quyền tự do lựa chọn người kết hôn, không chấp nhận áp đặt của cha mẹ; cha mẹ vẫn quan tâm, hướng dẫn con cái có trách nhiệm trong việc kết hôn). Hôn nhân một vợ một chồng, vợ chồng bình đẳng về quyền lợi và nghĩa vụ. Hôn nhân được đảm bảo về pháp lý — thủ tục pháp lý thể hiện sự tôn trọng tình yêu, trách nhiệm với gia đình và xã hội, đồng thời là cơ sở để thực hiện quyền tự do kết hôn và ly hôn chính đáng.",
      quote: "Tình yêu là khát vọng của con người trong mọi thời đại. Chừng nào hôn nhân không được xây dựng trên cơ sở tình yêu thì chừng đó hạnh phúc gia đình sẽ bị hạn chế.",
      details: [
        "Ăngghen: hôn nhân dựa trên tình yêu mới hợp đạo đức; khi tình yêu phai nhạt thì ly hôn có thể là điều hay cho cả đôi bên và xã hội — nhưng không khuyến khích ly hôn, cần ngăn chặn ly hôn nông nổi, lợi dụng.",
        "Quan hệ vợ chồng bình đẳng là cơ sở cho bình đẳng giữa cha mẹ với con cái, anh chị em. Giải quyết mâu thuẫn trong gia đình là vấn đề cần mọi người quan tâm.",
      ],
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

                      {item.details && item.details.length > 0 && (
                        <ul className={`mt-6 space-y-2 ${index % 2 === 1 ? "md:text-right" : ""}`}>
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
