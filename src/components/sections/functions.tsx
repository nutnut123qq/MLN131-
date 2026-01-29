"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/fade-in-section";
import { Baby, GraduationCap, Wallet, Heart, BookOpen, Scale } from "lucide-react";

export function FunctionsSection() {
  const functions = [
    {
      icon: Baby,
      title: "Tái sản xuất ra con người",
      color: "bg-rose-500",
      description: "Chức năng đặc thù của gia đình, không một cộng đồng nào có thể thay thế. Đáp ứng nhu cầu tâm sinh lý tự nhiên, duy trì nòi giống của gia đình, dòng họ và nhu cầu về sức lao động, duy trì sự trường tồn của xã hội.",
      details: [
        "Thực hiện trong từng gia đình nhưng là vấn đề xã hội — quyết định mật độ dân cư và nguồn lực lao động của quốc gia và quốc tế.",
        "Tùy nơi, phụ thuộc nhu cầu xã hội, chức năng được thực hiện theo xu hướng hạn chế hay khuyến khích (ví dụ kế hoạch hóa gia đình).",
        "Trình độ phát triển kinh tế, văn hóa, xã hội ảnh hưởng đến chất lượng nguồn lao động mà gia đình cung cấp.",
      ],
    },
    {
      icon: GraduationCap,
      title: "Nuôi dưỡng, Giáo dục",
      color: "bg-blue-500",
      description: "Trách nhiệm nuôi dưỡng, dạy dỗ con cái trở thành người có ích cho gia đình, cộng đồng và xã hội. Những hiểu biết đầu tiên mà gia đình đem lại thường để lại dấu ấn sâu đậm và bền vững trong cuộc đời mỗi người.",
      details: [
        "Ảnh hưởng lâu dài và toàn diện từ lúc lọt lòng đến trưởng thành và tuổi già. Mỗi thành viên vừa là chủ thể vừa là khách thể trong nuôi dưỡng, giáo dục.",
        "Giáo dục gia đình gắn liền với giáo dục xã hội. Cần tránh coi trọng giáo dục gia đình mà hạ thấp giáo dục xã hội hoặc ngược lại — cả hai khuynh hướng đều khiến cá nhân không phát triển toàn diện.",
        "Thực hiện tốt chức năng này đòi hỏi cha mẹ phải có kiến thức cơ bản, tương đối toàn diện về văn hóa, học vấn, đặc biệt là phương pháp giáo dục.",
      ],
    },
    {
      icon: Wallet,
      title: "Kinh tế và Tổ chức tiêu dùng",
      color: "bg-emerald-500",
      description: "Gia đình tham gia trực tiếp vào sản xuất và tái sản xuất tư liệu sản xuất, tư liệu tiêu dùng, và là đơn vị duy nhất tái sản xuất ra sức lao động cho xã hội. Đồng thời là đơn vị tiêu dùng — tổ chức tiêu dùng hàng hóa để duy trì đời sống.",
      details: [
        "Sử dụng hợp lý các khoản thu nhập vào đảm bảo đời sống vật chất và tinh thần của mỗi thành viên; sử dụng quỹ thời gian nhàn rỗi để tạo môi trường văn hóa lành mạnh, nâng cao sức khỏe, duy trì sở thích, sắc thái riêng của mỗi người.",
        "Quy mô, sở hữu tư liệu sản xuất và cách thức tổ chức sản xuất, phân phối khác nhau tùy hình thức gia đình và giai đoạn phát triển xã hội.",
        "Hiệu quả hoạt động kinh tế của gia đình quyết định hiệu quả đời sống vật chất và tinh thần của mỗi thành viên; đồng thời đóng góp vào sự giàu có của xã hội.",
      ],
    },
    {
      icon: Heart,
      title: "Thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm",
      color: "bg-purple-500",
      description: "Chức năng thường xuyên: thỏa mãn nhu cầu tình cảm, văn hóa, tinh thần; đảm bảo cân bằng tâm lý; bảo vệ chăm sóc sức khỏe người ốm, người già, trẻ em. Sự quan tâm, chăm sóc lẫn nhau vừa là nhu cầu tình cảm vừa là trách nhiệm, đạo lý, lương tâm.",
      details: [
        "Gia đình là chỗ dựa tình cảm cho mỗi cá nhân, nơi nương tựa về mặt tinh thần chứ không chỉ vật chất.",
        "Khi quan hệ tình cảm gia đình rạn nứt, quan hệ tình cảm trong xã hội cũng có nguy cơ bị phá vỡ. Duy trì tình cảm giữa các thành viên có ý nghĩa quyết định đến sự ổn định và phát triển của xã hội.",
      ],
    },
    {
      icon: BookOpen,
      title: "Chức năng văn hóa",
      color: "bg-amber-500",
      description: "Gia đình là nơi lưu giữ truyền thống văn hóa của dân tộc, tộc người. Phong tục, tập quán, sinh hoạt văn hóa của cộng đồng được thực hiện trong gia đình. Gia đình vừa lưu giữ vừa sáng tạo và thụ hưởng những giá trị văn hóa của xã hội.",
      details: [],
    },
    {
      icon: Scale,
      title: "Chức năng chính trị",
      color: "bg-slate-600",
      description: "Gia đình là một tổ chức chính trị của xã hội: nơi tổ chức thực hiện chính sách, pháp luật của nhà nước và quy chế (hương ước) của làng xã, đồng thời hưởng lợi từ hệ thống pháp luật, chính sách đó. Gia đình là cầu nối giữa nhà nước với công dân.",
      details: [],
    },
  ];

  return (
    <section id="functions" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Phần 3
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Chức năng cơ bản của Gia đình
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sáu chức năng của gia đình: tái sản xuất con người, nuôi dưỡng-giáo dục, kinh tế và tổ chức tiêu dùng, thỏa mãn nhu cầu tâm sinh lý, văn hóa và chính trị — phản ánh vai trò không thể thay thế của gia đình trong xã hội
          </p>
        </FadeInSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {functions.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className={`h-2 ${item.color}`} />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground pt-2">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {item.details.length > 0 && (
                    <ul className="space-y-3">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.color} mt-2 flex-shrink-0`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
