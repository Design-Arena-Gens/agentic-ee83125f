import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Constitution of the Taj Mahal",
  description:
    "A cinematic educational journey through the timeless legacy of the Taj Mahal."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
