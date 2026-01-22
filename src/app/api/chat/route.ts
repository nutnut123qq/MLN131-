import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Đọc nội dung từ file giaotrinh.txt
const getTextbookContent = () => {
  try {
    // Đường dẫn file trong thư mục family-education
    const filePath = path.join(process.cwd(), "giaotrinh.txt");
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
    // Thử đường dẫn khác nếu không tìm thấy (thư mục cha)
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

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    // Lấy nội dung giáo trình
    const textbookContent = getTextbookContent();

    // Tạo system prompt với nội dung giáo trình
    const systemPrompt = `Bạn là một trợ lý AI chuyên về chủ đề "VẤN ĐỀ GIA ĐÌNH TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI".

Nhiệm vụ của bạn là chỉ trả lời các câu hỏi dựa trên nội dung giáo trình sau đây. Bạn KHÔNG được trả lời các câu hỏi ngoài phạm vi nội dung này. Nếu câu hỏi không liên quan đến nội dung giáo trình, hãy lịch sự từ chối và đề nghị người dùng hỏi về chủ đề trong giáo trình.

NỘI DUNG GIÁO TRÌNH:

${textbookContent}

Hãy trả lời câu hỏi của người dùng một cách chính xác, chi tiết và dựa hoàn toàn vào nội dung giáo trình trên.`;

    const prompt = `${systemPrompt}\n\nCâu hỏi của người dùng: ${message}\n\nTrả lời:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    
    // Kiểm tra lỗi API key bị suspended hoặc không hợp lệ
    let errorMessage = "Đã có lỗi xảy ra khi xử lý câu hỏi của bạn.";
    
    if (error.message?.includes("suspended") || error.message?.includes("403")) {
      errorMessage = "API key Gemini đã bị đình chỉ hoặc không hợp lệ. Vui lòng kiểm tra lại API key trong file .env.local hoặc tạo API key mới tại https://makersuite.google.com/app/apikey";
    } else if (error.message?.includes("401") || error.message?.includes("unauthorized")) {
      errorMessage = "API key không hợp lệ. Vui lòng kiểm tra lại API key trong file .env.local.";
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
