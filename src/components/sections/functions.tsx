"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/fade-in-section";
import { Baby, GraduationCap, Wallet, Heart } from "lucide-react";

export function FunctionsSection() {
  const functions = [
    {
      icon: Baby,
      title: "Tái sản xuất ra con người",
      color: "bg-rose-500",
      description: "Chức năng đặc thù của gia đình, không một cộng đồng nào có thể thay thế. Đáp ứng nhu cầu tâm, sinh lý tự nhiên của con người, đáp ứng nhu cầu duy trì nòi giống của gia đình, dòng họ mà còn đáp ứng nhu cầu về sức lao động và duy trì sự trường tồn của xã hội.",
      details: [
        "Quyết định mật độ dân cư và nguồn lực lao động",
        "Phụ thuộc vào chính sách xã hội của Nhà nước",
        "Ảnh hưởng bởi trình độ phát triển kinh tế, văn hóa, xã hội",
      ],
    },
    {
      icon: GraduationCap,
      title: "Nuôi dưỡng, Giáo dục",
      color: "bg-blue-500",
      description: "Thể hiện tình cảm thiêng liêng, trách nhiệm của cha mẹ với con cái và trách nhiệm của gia đình với xã hội. Có ý nghĩa quan trọng đối với sự hình thành nhân cách, đạo đức, lối sống.",
      details: [
        "Ảnh hưởng lâu dài và toàn diện đến cuộc đời mỗi thành viên",
        "Mỗi thành viên vừa là chủ thể vừa là khách thể",
        "Kết hợp với giáo dục xã hội để phát triển toàn diện",
      ],
    },
    {
      icon: Wallet,
      title: "Kinh tế và Tổ chức tiêu dùng",
      color: "bg-emerald-500",
      description: "Gia đình tham gia trực tiếp vào quá trình sản xuất và tái sản xuất ra tư liệu sản xuất, tư liệu tiêu dùng, và là đơn vị duy nhất tái sản xuất ra sức lao động cho xã hội.",
      details: [
        "Đảm bảo nguồn sinh sống cho các thành viên",
        "Đóng góp vào sự giàu có của xã hội",
        "Tổ chức tiêu dùng hàng hóa để duy trì đời sống",
      ],
    },
    {
      icon: Heart,
      title: "Thỏa mãn nhu cầu tâm sinh lý",
      color: "bg-purple-500",
      description: "Chức năng thường xuyên của gia đình, bao gồm việc thỏa mãn nhu cầu tình cảm, văn hóa, tinh thần cho các thành viên, đảm bảo sự cân bằng tâm lý.",
      details: [
        "Bảo vệ chăm sóc sức khỏe người ốm, người già, trẻ em",
        "Gia đình là chỗ dựa tình cảm cho mỗi cá nhân",
        "Quyết định đến sự ổn định và phát triển của xã hội",
      ],
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
            Bốn chức năng cơ bản phản ánh vai trò không thể thay thế của gia đình trong xã hội
          </p>
        </FadeInSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {functions.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className={`h-2 ${item.color}`} />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${item.color}/10 flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 text-foreground`} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground pt-2">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-3">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.color} mt-2 flex-shrink-0`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
