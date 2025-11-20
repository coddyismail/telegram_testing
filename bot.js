import axios from "axios";

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const CONVERT_API = "https://project911-flame.vercel.app/api/convert";

export default async function handler(req, res) {
  if (req.method === 'POST' && req.body.message) {
    const { chat, text } = req.body.message;
    
    if (text === '/start') {
      const name = chat.first_name || "there";
      await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chat.id,
        text: `Hi ${name}! 🎉`
      });
    }
  }
  
  return res.status(200).json({ status: "OK" });
}