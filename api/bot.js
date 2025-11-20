import axios from "axios";

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const API = `https://api.telegram.org/bot${TOKEN}`;

export default async function handler(req, res) {
  const update = req.body;

  // If it's a text message
  if (update?.message?.text) {
    const chatId = update.message.chat.id;
    const name = update.message.chat.first_name || "there";

    if (update.message.text === "/start") {
      await axios.post(`${API}/sendMessage`, {
        chat_id: chatId,
        text: `Hi ${name}! 🎉`
      });
    }
  }

  res.status(200).send("OK");
}
