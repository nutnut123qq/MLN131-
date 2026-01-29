"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/fade-in-section";
import { ArrowRight, Users, Settings, HeartHandshake } from "lucide-react";

export function ChangesSection() {
  const changes = [
    {
      icon: Users,
      title: "Biến đổi về Quy mô, Kết cấu",
      traditional: [
        "Gia đình đa thế hệ (3–4 thế hệ cùng chung sống dưới một mái nhà)",
        "Quy mô lớn, nhiều thành viên; phải có con, càng đông con càng tốt, nhất thiết phải có con trai nối dõi",
        "Cấu trúc gia đình truyền thống từng giữ vai trò chủ đạo",
      ],
      modern: [
        "Gia đình hạt nhân (cha mẹ – con cái) rất phổ biến ở đô thị và nông thôn",
        "Quy mô nhỏ, ít thành viên; số con mong muốn giảm, nhu cầu bắt buộc có con trai giảm",
        "Một số ít gia đình đơn thân; phổ biến nhất là gia đình hạt nhân quy mô nhỏ",
      ],
      note: "Quy mô thu nhỏ đáp ứng nhu cầu và điều kiện thời đại mới: bình đẳng nam nữ được đề cao, cuộc sống riêng tư được tôn trọng, tránh mâu thuẫn trong gia đình truyền thống. Tuy nhiên có thể tạo sự ngăn cách không gian, khó khăn trong giữ gìn tình cảm và giá trị văn hóa truyền thống.",
    },
    {
      icon: Settings,
      title: "Biến đổi về Chức năng",
      traditional: [
        "Sinh đẻ theo phong tục, tập quán; nhu cầu con cái thể hiện: phải có con, càng đông càng tốt, nhất thiết con trai",
        "Kinh tế tự cấp tự túc — sản xuất chủ yếu đáp ứng nhu cầu gia đình",
        "Giáo dục gia đình là cơ sở của giáo dục xã hội",
      ],
      modern: [
        "Sinh đẻ chủ động, có kế hoạch (1–2 con); dân số chuyển sang giai đoạn già hóa; thông điệp mới: mỗi cặp vợ chồng nên sinh đủ hai con",
        "Kinh tế hàng hóa, thị trường toàn cầu; thu nhập bằng tiền tăng; gia đình là đơn vị tiêu dùng quan trọng; kinh tế gia đình gặp khó khăn do quy mô nhỏ, lao động ít",
        "Giáo dục xã hội bao trùm lên giáo dục gia đình, đưa ra mục tiêu cho giáo dục gia đình; đầu tư tài chính của gia đình cho giáo dục con cái tăng; vai trò giáo dục của cha mẹ có xu hướng giảm; kỳ vọng vào nhà trường trong rèn đạo đức, nhân cách giảm — mâu thuẫn chưa có lời giải.",
      ],
      note: "Chức năng thỏa mãn tâm lý – tình cảm đang tăng; gia đình chuyển từ chủ yếu đơn vị kinh tế sang chủ yếu đơn vị tình cảm. Gia đình một con tăng có thể khiến đời sống tâm lý – tình cảm của trẻ em và người lớn kém phong phú (thiếu tình anh chị em).",
    },
    {
      icon: HeartHandshake,
      title: "Biến đổi về Quan hệ",
      traditional: [
        "Người chồng là chủ gia đình duy nhất, chủ sở hữu tài sản, quyết định công việc quan trọng, kể cả quyền dạy vợ, đánh con",
        "Quan hệ gia trưởng, độc đoán; phụ nữ phải tuyệt đối trung thành với chồng, cha",
        "Trẻ lớn lên dưới sự dạy bảo thường xuyên của ông bà, cha mẹ; người cao tuổi sống cùng con cháu, nhu cầu tâm lý – tình cảm được đáp ứng",
      ],
      modern: [
        "Ba mô hình cùng tồn tại: chồng làm chủ; vợ làm chủ; cả hai vợ chồng cùng làm chủ. Người chủ gia đình là người có phẩm chất, năng lực, đóng góp vượt trội; đòi hỏi mới: người lãnh đạo gia đình phải kiếm ra nhiều tiền (bối cảnh kinh tế thị trường)",
        "Ly hôn, ly thân, ngoại tình, quan hệ tình dục trước/ngoài hôn nhân, chung sống không kết hôn tăng; bạo hành, xâm hại tình dục; giá trị truyền thống bị coi nhẹ; gia đình đơn thân, độc thân, kết hôn đồng tính, sinh con ngoài giá thú",
        "Mâu thuẫn thế hệ: người già hướng giá trị truyền thống, bảo thủ; tuổi trẻ hướng giá trị hiện đại, phủ nhận truyền thống. Giáo dục trẻ gần như phó mặc cho nhà trường; người cao tuổi đối mặt cô đơn, thiếu thốn tình cảm.",
      ],
      note: "Thách thức lớn nhất: mâu thuẫn giữa các thế hệ do khác biệt tuổi tác. Cần thay đổi tâm lý truyền thống về vai trò con trai; tạo quan niệm bình đẳng con trai – con gái trong trách nhiệm nuôi dưỡng cha mẹ già và thờ phụng tổ tiên.",
    },
  ];

  return (
    <section id="changes" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Phần 5
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sự biến đổi của Gia đình Việt Nam
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Dưới tác động của kinh tế thị trường, công nghiệp hóa, hiện đại hóa và toàn cầu hóa, 
            gia đình Việt Nam đã có sự biến đổi toàn diện
          </p>
        </FadeInSection>

        <StaggerContainer className="space-y-12" staggerDelay={0.2}>
          {changes.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    {/* Traditional */}
                    <div className="bg-secondary/50 rounded-xl p-6">
                      <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                        Truyền thống
                      </h4>
                      <ul className="space-y-3">
                        {item.traditional.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </div>

                    {/* Modern */}
                    <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                      <h4 className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
                        Hiện đại
                      </h4>
                      <ul className="space-y-3">
                        {item.modern.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground italic border-t border-border/50 pt-4">
                    {item.note}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Challenges note */}
        <FadeInSection delay={0.4} className="mt-12">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h4 className="font-serif text-xl font-semibold text-amber-900 mb-4">
              Thách thức và vấn đề cần giải quyết
            </h4>
            <ul className="space-y-3 text-amber-800 leading-relaxed mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                Gia tăng ly hôn, ly thân, ngoại tình, sống thử; bạo lực gia đình, xâm hại tình dục; người già cô đơn, trẻ em sống ích kỷ; giá trị truyền thống bị coi nhẹ; kiểu gia đình truyền thống lung lay.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                Hiện tượng trẻ em hư, bỏ học sớm, lang thang, nghiện hút ma túy, mại dâm... cho thấy phần nào sự bất lực của xã hội và bế tắc của một số gia đình trong chăm sóc, giáo dục trẻ em.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                Phân hóa giàu nghèo; Nhà nước cần chính sách hỗ trợ hộ nghèo, khắc phục khoảng cách giàu nghèo; bảo đảm an toàn tình dục, giáo dục giới tính và sức khỏe sinh sản; củng cố chức năng xã hội hóa của gia đình; xây dựng chuẩn mực và mô hình mới về giáo dục gia đình.
              </li>
            </ul>
            <p className="text-amber-800/90 text-sm italic">
              Sức ép từ cuộc sống hiện đại (công việc căng thẳng, không ổn định, di chuyển nhiều...) cũng khiến hôn nhân và giữ gìn gia đình trở nên khó khăn với nhiều người.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
