import {GoogleGenerativeAI} from '@google/generative-ai'
import displayLoadingScreen from '../lib/loading.js'
const genAI = new GoogleGenerativeAI('AIzaSyBWozNQdyPr6q5D7U1Izfl3BArjnNfwGuA');


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw امم..ماذا تريد أن تقول?`
    m.react('🤖')
    await displayLoadingScreen(conn, m.chat)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = text

    const result = await model.generateContent(prompt);
    const response = result.response;
    const textt = response.text();
    m.reply(textt)
  } catch (error) {
    console.error(error);
    m.reply('أُووبس! هناك خطأ ما. ، ونحن نحاول إصلاحه في أسرع وقت ممكن');
  }
}
handler.help = ['توأم+النص']
handler.tags = ['tools']
handler.command = /^توأم$/i

export default handler
