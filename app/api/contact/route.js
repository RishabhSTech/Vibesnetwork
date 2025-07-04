import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, phone, email, website } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // SSL
    auth: {
      user: "mail@shrijantech.com",
      pass: "Shrijantech@mailtest2025",
    },
  });

  const mailOptions = {
    from: '"The Vibes Network" <mail@shrijantech.com>',
    to: "rishabhpratap76@gmail.com",
    subject: "New Contact Form Submission - The Vibes Network",
    text: `You have received a new submission from your website contact form:

Name: ${name}
Phone: ${phone}
Email: ${email}
Website: ${website}

Please respond to the inquiry as soon as possible.
  `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
