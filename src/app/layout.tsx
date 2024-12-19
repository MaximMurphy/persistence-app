import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import AuthProvider from "./AuthProvider";

// If loading a variable font, you don't need to specify the font weight
const sapceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Persistence - A Productivity App",
  description: "Complete your daily tasks with Persistence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sapceGrotesk.className} antialiased min-h-screen lg:h-screen w-full flex flex-col`}
      >
        <div className="flex-grow">
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  );
}
