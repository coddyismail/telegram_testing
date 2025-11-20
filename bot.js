import axios from "axios";

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const update = req.body;

    // Only react if it's an actual message
    if (update.message && update.message.text) {
      const msg = update.message;
      const chatId = msg.chat.id;
      const text = msg.text;
      const name = msg.chat.first_name || "there";

      if (text === "/start") {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
          chat_id: chatId,
          text: `Hi ${name}! 🎉`
        });
      }
    }
  }

  return res.status(200).json({ status: "OK" });
}
