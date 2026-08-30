import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://airesumegenerator.krishaiworks.com"),

  title: {
    default: "AI Resume Generator | Create Professional Resumes",
    template: "%s | AI Resume Generator",
  },

  description:
    "Create a professional, ATS-friendly resume with AI. Generate polished resumes quickly with the AI Resume Generator by KrishAIWorks.",

  keywords: [
    "AI resume generator",
    "resume generator",
    "AI resume builder",
    "ATS friendly resume",
    "ATS resume builder",
    "resume builder online",
    "professional resume generator",
    "AI CV generator",
    "CV builder",
    "KrishAIWorks",
  ],

  authors: [
    {
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
    },
  ],

  creator: "KrishAIWorks",
  publisher: "KrishAIWorks",

  applicationName: "AI Resume Generator",

  category: "technology",

  alternates: {
    canonical: "https://airesumegenerator.krishaiworks.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://airesumegenerator.krishaiworks.com",
    siteName: "KrishAIWorks",
    title: "AI Resume Generator | Create Professional Resumes",
    description:
      "Create a professional, ATS-friendly resume with AI using KrishAIWorks.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "AI Resume Generator - KrishAIWorks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Resume Generator | KrishAIWorks",
    description:
      "Create professional, ATS-friendly resumes with AI.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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