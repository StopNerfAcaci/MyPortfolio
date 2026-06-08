import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoang Xuan Truong | Unity Game Developer",
  description: "A Unity game developer portfolio with selected game titles and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
