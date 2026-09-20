import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earth & Tide Art | Coming Soon",
  description:
    "Earth & Tide Art is undergoing a rebrand. Visit Blue Door Art Gallery while our new website is being created.",
  robots: {
    index: true,
    follow: true,
  },
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
