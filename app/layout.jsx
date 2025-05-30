import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: "Haris | Portofolio",

  description:
    "My name is Haris, I'm a software engineer and I'm passionate about it. I'm currently working at Niftonic Pvt Ltd.",

  author: "Haris Mehboob",
  siteUrl: "",
  applicationName: "Haris | Portofolio",

  keywords: [
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Software Engineer in Pakistan",
    "Software Engineer in Rawalpindi",
    "Software Engineer in Islamabad",
    "Haris Mehboob",
    "Haris",
  ],

  openGraph: {
    type: "website",
    url: "",
    title: "Haris | Portofolio",
    site_name: "Haris | Portofolio",
    description: "My name is Haris, This is my portofolio website.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-rev.png",
        alt: "Haris | Portofolio",
      },
    ],
    site_name: "Haris | Portofolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}
        <Chat />
        <Analytics />
      </body>
    </html>
  );
}
