import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*يقوم هذا الأمر بإنشاء صور من المطالبات النصية*\n\n*مثال للاستخدام*\n*◉ ${usedPrefix + command} اكبر بطيخه فالعالم*\n*◉ ${usedPrefix + command} Elon Musk in pink output*`;

  try {
    m.reply('انتظر, توليد الصور...*');

    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*فشل إنشاء الصورة*';
    }
  } catch {
    throw '*احا! حدث خطأ ما أثناء إنشاء الصور. الرجاء معاودة المحاولة في وقت لاحق.*';
  }
};

handler.help = ['اصنع'];
handler.tags = ['AI'];
handler.command = ['اصنع', 'أصنع', 'صنع', 'يصنع'];
export default handler;
