import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import 'easymde/dist/easymde.min.css' 
import { Toaster } from "@/components/ui/toaster";

const workSans = localFont({
  src: [{
    path: "./fonts/WorkSans-Black.ttf",
    weight: "900",
    style: "normal",
  }, {
    path: "./fonts/WorkSans-ExtraBold.ttf",
    weight: "800",
    style: "normal",
  },
  {
    path: "./fonts/WorkSans-Bold.ttf",
    weight: "700",
    style: "normal",
  },
  {
    path: "./fonts/WorkSans-SemiBold.ttf",
    weight: "600",
    style: "normal",
  },
  {
    path: "./fonts/WorkSans-Medium.ttf",
    weight: "500",
    style: "normal",
  },
  {
    path: "./fonts/WorkSans-Regular.ttf",
    weight: "400",
    style: "normal",
  },
  {
    path: "./fonts/WorkSans-Thin.ttf",
    weight: "200",
    style: "normal",
  },
  {
    path: "./fonts/WorkSans-ExtraLight.ttf",
    weight: "100",
    style: "normal",
  }],
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title:{
    template: "%s | Ameri Startups",
    default: "Ameri Startups"
  },
  description: "Discover, pitch, and vote for innovative startups. Join the entrepreneurial journey with Ameri Startups.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} font-work-sans`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
