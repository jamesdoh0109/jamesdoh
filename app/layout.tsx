import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "James Doh",
  description: "Personal website for James Doh",
  icons: {
    icon: "/logo_dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} bg-grey-3 dark:bg-grey-0`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="h-dvh">
            <Navbar />
            <div className="h-full">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
