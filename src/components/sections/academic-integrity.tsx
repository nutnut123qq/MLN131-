"use client";

import { FadeInSection } from "@/components/fade-in-section";
import { Bot, Target, MessageSquare, Sliders, Shield, FileCheck } from "lucide-react";

const items = [
  {
    icon: Bot,
    title: "1. CÔNG CỤ AI ĐÃ SỬ DỤNG",
    content: "GPT (Generative Pre-trained Transformer).",
  },
  {
    icon: Target,
    title: "2. MỤC ĐÍCH SỬ DỤNG",
    content: "Hỗ trợ tổng hợp tài liệu, gợi ý cấu trúc nội dung và diễn đạt ý tưởng. Tất cả nội dung đều được nhóm xem xét, chỉnh sửa và chịu trách nhiệm trước khi sử dụng.",
  },
  {
    icon: MessageSquare,
    title: "3. MỘT VÀI PROMPT ĐÃ SỬ DỤNG",
    content: "Ví dụ: \"Tóm tắt khái niệm gia đình theo quan điểm chủ nghĩa xã hội khoa học\"; \"Gợi ý cấu trúc trình bày phần chức năng gia đình\"; \"Diễn đạt lại đoạn sau cho rõ ràng, học thuật hơn\".",
  },
  {
    icon: Sliders,
    title: "4. MỨC ĐỘ CAN THIỆP VÀ VAI TRÒ CỦA AI",
    content: "AI đóng vai trò hỗ trợ nghiên cứu và soạn thảo, không thay thế tư duy và đánh giá của người viết. Nhóm đã đọc, chỉnh sửa, bổ sung và chịu trách nhiệm về toàn bộ nội dung cuối cùng.",
  },
  {
    icon: Shield,
    title: "5. CAM KẾT VỀ TÍNH CHÍNH XÁC VÀ LIÊM CHÍNH",
    content: "Nhóm cam kết trích dẫn đúng nguồn khi sử dụng tài liệu tham khảo; không trình bày nội dung do AI tạo ra như thể hoàn toàn do bản thân tự viết; và sẵn sàng chịu trách nhiệm về tính chính xác và liêm chính học thuật của bài làm.",
  },
  {
    icon: FileCheck,
    title: "6. LỜI CAM ĐOAN",
    content: "Nhóm xác nhận đã sử dụng công cụ AI (GPT) theo đúng mục đích và cam kết nêu trên, đảm bảo minh bạch và trung thực trong quá trình hoàn thành nội dung trình bày này.",
  },
];

export function AcademicIntegritySection() {
  return (
    <section id="academic-integrity" className="py-24 md:py-32 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <FadeInSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Liêm chính học thuật
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            CAM KẾT SỬ DỤNG TRÍ TUỆ NHÂN TẠO (AI)
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Để đảm bảo tính minh bạch và liêm chính trong quá trình tạo lập nội dung trình bày này, 
            nhóm cam kết về việc sử dụng công cụ Trí tuệ Nhân tạo (AI) như sau:
          </p>
        </FadeInSection>

        <div className="space-y-6">
          {items.map((item, index) => (
            <FadeInSection key={index} delay={index * 0.08}>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-accent/30 transition-colors">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
