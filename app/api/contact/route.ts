import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, mail, message } = await req.json();

        if (!name || !mail || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // 環境変数に設定
                pass: process.env.EMAIL_PASS, // 環境変数に設定
            },
        });

        const mailOptions = {
            from: mail,
            to: process.env.EMAIL_USER, // 受信するメールアドレス
            subject: `お問い合わせ: ${name}`,
            text: `Name: ${name}\nEmail: ${mail}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
