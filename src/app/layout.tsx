// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
    <html lang="en" className={poppins.variable}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
