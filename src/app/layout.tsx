// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Saira } from "next/font/google";
import ThemeRegistry from "@components/ThemeRegistry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const saira = Saira({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-saira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NPAAS Engineers",
  description: "Numerical Protection and Automation Application Support Engineers",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${saira.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
