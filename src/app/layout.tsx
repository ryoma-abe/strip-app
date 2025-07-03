import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "AI Creator Studio",
  description: "AI画像生成、背景除去、画像圧縮まで。プロフェッショナルな画像編集ツールをワンストップで提供。",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/dashboard">
      <html lang="ja">
        <body className={`${notoSansJP.className} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
