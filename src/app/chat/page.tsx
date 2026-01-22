import Link from "next/link";
import { ChatBot } from "@/components/chatbot";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-8 px-4">
      <div className="container mx-auto">
        <div className="mb-6 flex items-start justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur transition hover:bg-white"
          >
            ← Về trang chủ
          </Link>
        </div>
        <ChatBot />
      </div>
    </div>
  );
}
