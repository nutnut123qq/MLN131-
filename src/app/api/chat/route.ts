import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Đọc nội dung từ file giaotrinh.txt
const getTextbookContent = () => {
  try {
    const filePath = path.join(process.cwd(), "giaotrinh.txt");
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
    const altPath = path.join(process.cwd(), "..", "giaotrinh.txt");
    if (fs.existsSync(altPath)) {
      return fs.readFileSync(altPath, "utf-8");
    }
    console.error("Textbook file not found");
    return "";
  } catch (error) {
    console.error("Error reading textbook:", error);
    return "";
  }
};

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BLACKBOX_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "BLACKBOX_API_KEY is not configured. Thêm API key vào file .env.local (lấy tại https://blackbox.ai/dashboard)" },
        { status: 500 }
      );
    }

    const textbookContent = getTextbookContent();

    const systemPrompt = `Bạn là trợ lý AI chuyên về chủ đề "VẤN ĐỀ GIA ĐÌNH TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI" (theo quan điểm chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh và Đảng Cộng sản Việt Nam).

Nhiệm vụ: Chỉ trả lời dựa trên nội dung giáo trình dưới đây. KHÔNG trả lời câu hỏi ngoài phạm vi này. Nếu câu hỏi không liên quan, lịch sự từ chối và gợi ý hỏi về chủ đề trong giáo trình.

NỘI DUNG GIÁO TRÌNH:

${textbookContent}

Trả lời chính xác, chi tiết, bám sát giáo trình.`;

    const response = await fetch("https://api.blackbox.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "blackboxai/openai/gpt-5.1",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        temperature: 0.5,
        max_tokens: 2048,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const errMsg = errData.error?.message || errData.message || response.statusText;
      return NextResponse.json(
        { error: errMsg || `Blackbox API lỗi: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content?.trim();

    if (!text) {
      return NextResponse.json(
        { error: "Không nhận được phản hồi từ AI." },
        { status: 500 }
      );
    }

    return NextResponse.json({ response: text });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Error calling Blackbox API:", err);

    let errorMessage = "Đã có lỗi xảy ra khi xử lý câu hỏi của bạn.";

    if (err.message?.includes("401") || err.message?.includes("unauthorized")) {
      errorMessage = "API key Blackbox không hợp lệ. Kiểm tra BLACKBOX_API_KEY trong .env.local hoặc tạo key tại https://blackbox.ai/dashboard";
    } else if (err.message?.includes("403") || err.message?.includes("suspended")) {
      errorMessage = "API key Blackbox bị từ chối hoặc đình chỉ. Kiểm tra key tại https://blackbox.ai/dashboard";
    } else if (err.message) {
      errorMessage = err.message;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
