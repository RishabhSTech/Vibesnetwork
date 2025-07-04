import { Inter } from "next/font/google";
import "./globals.css"; 

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Vibes Network",
  icons: {
    icon: "/Favicon.ico", // Path to your favicon inside the "public" folder
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
