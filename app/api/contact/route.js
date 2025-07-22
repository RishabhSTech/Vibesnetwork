import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, phone, email, website } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "connect@thevibes.network",
      pass: "pdsjjnwgjecfhtya",
    },
  });

  const mailOptions = {
    from: '"The Vibes Network" <connect@thevibes.network>',
    to: "rishabhpratap76@gmail.com, chahna@thevibes.network, sagar@thevibes.network, anupriya@thevibes.academy",
    subject: "New Contact Form Submission - The Vibes Network",
    text: `You have received a new submission from your website contact form:

Name: ${name}
Phone: ${phone}
Email: ${email}
Website: ${website}

Please respond to the inquiry as soon as possible.
  `.trim(),
  };

  const sheetWebhookUrl = "https://script.google.com/macros/s/AKfycbxyzF2eA5LWAOraC0XXjZRSrSApoBKMBHBbBlJ4foL_pL_QigtPv338HXRXZjBBkXHd/exec";

  try {
    await transporter.sendMail(mailOptions);

    await fetch(sheetWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, website }),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}