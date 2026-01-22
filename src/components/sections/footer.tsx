"use client";

import { FadeInSection } from "@/components/fade-in-section";
import { Heart, ArrowUp, MessageCircle } from "lucide-react";
import Link from "next/link";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center">
          <div className="mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
              Chương 7: Vấn đề Gia đình
            </h3>
            <p className="text-background/70 max-w-xl mx-auto">
              Trong thời kỳ quá độ lên chủ nghĩa xã hội
            </p>
          </div>

          <div className="w-16 h-px bg-background/30 mx-auto mb-8" />

          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60 mb-8">
            <a href="#concept" className="hover:text-background transition-colors">Khái niệm</a>
            <a href="#position" className="hover:text-background transition-colors">Vị trí</a>
            <a href="#functions" className="hover:text-background transition-colors">Chức năng</a>
            <a href="#foundation" className="hover:text-background transition-colors">Cơ sở</a>
            <a href="#changes" className="hover:text-background transition-colors">Biến đổi</a>
            <a href="#directions" className="hover:text-background transition-colors">Phương hướng</a>
          </div>

          <p className="text-sm text-background/50 flex items-center justify-center gap-2">
            Môn học: Chủ nghĩa xã hội khoa học
            <Heart className="w-4 h-4 text-rose-400" />
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/10 hover:bg-background/20 text-background text-sm transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              Về đầu trang
            </button>

            {/* Chatbot AI button */}
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              Chatbot AI
            </Link>
          </div>
        </FadeInSection>
      </div>
    </footer>
  );
}
