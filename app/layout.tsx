import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
// import { useContext } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "DevsGround",
  description:
    "A web app for developers to questions and answare. Colleborate with developers and many more.",
  icons: {
    icon: "/public/assests/images/site-logo.svg",
  },
};
// console.log(inter.variable, spaceGrotesk.variable);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const data = useContext(ThemeDataProvider)
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
