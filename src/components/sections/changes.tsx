"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/fade-in-section";
import { ArrowRight, Users, Settings, HeartHandshake } from "lucide-react";

export function ChangesSection() {
  const changes = [
    {
      icon: Users,
      title: "Biến đổi về Quy mô, Kết cấu",
      traditional: [
        "Gia đình đa thế hệ (3-4 thế hệ)",
        "Quy mô lớn, nhiều thành viên",
        "Cấu trúc gia đình truyền thống",
      ],
      modern: [
        "Gia đình hạt nhân (2 thế hệ)",
        "Quy mô nhỏ, ít thành viên",
        "Gia đình đơn thân xuất hiện",
      ],
      note: "Đáp ứng nhu cầu và điều kiện của thời đại mới, cuộc sống riêng tư được tôn trọng hơn.",
    },
    {
      icon: Settings,
      title: "Biến đổi về Chức năng",
      traditional: [
        "Sinh đẻ theo phong tục, tập quán",
        "Kinh tế tự cấp tự túc",
        "Giáo dục là nền tảng",
      ],
      modern: [
        "Sinh đẻ chủ động, có kế hoạch",
        "Kinh tế hàng hóa thị trường",
        "Giáo dục xã hội bao trùm",
      ],
      note: "Từ đơn vị kinh tế khép kín thành đơn vị sản xuất đáp ứng nhu cầu thị trường toàn cầu.",
    },
    {
      icon: HeartHandshake,
      title: "Biến đổi về Quan hệ",
      traditional: [
        "Người chồng là chủ gia đình duy nhất",
        "Quan hệ gia trưởng, bất bình đẳng",
        "Cha mẹ quyết định hôn nhân",
      ],
      modern: [
        "Nhiều mô hình chủ gia đình",
        "Quan hệ bình đẳng hơn",
        "Tự do lựa chọn trong hôn nhân",
      ],
      note: "Xuất hiện mô hình người vợ làm chủ và cả hai vợ chồng cùng làm chủ gia đình.",
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
              Thách thức cần đối mặt
            </h4>
            <p className="text-amber-800 leading-relaxed">
              Bên cạnh những biến đổi tích cực, gia đình Việt Nam cũng đối mặt với nhiều thách thức: 
              gia tăng tỷ lệ ly hôn, bạo lực gia đình, quan hệ gia đình lỏng lẻo, mâu thuẫn thế hệ, 
              và các tệ nạn xã hội đe dọa sự bền vững của gia đình.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
