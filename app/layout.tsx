import type { Metadata } from "next";
import Script from "next/script";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://krishaiworks.com/#organization",
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
      logo: {
        "@type": "ImageObject",
        url: "https://krishaiworks.com/logo.png",
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://krishaiworks.com/#website",
      url: "https://krishaiworks.com",
      name: "KrishAIWorks",
      description:
        "AI-powered tools, productivity utilities, automation, chatbots, websites and custom digital solutions.",
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "WebApplication",
      "@id": "https://airesumegenerator.krishaiworks.com/#webapplication",
      name: "AI Resume Generator",
      url: "https://airesumegenerator.krishaiworks.com/",
      description:
        "Create a professional, ATS-friendly resume with AI. Generate polished resumes quickly with the AI Resume Generator by KrishAIWorks.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://airesumegenerator.krishaiworks.com/#webpage",
      url: "https://airesumegenerator.krishaiworks.com/",
      name: "AI Resume Generator | Create Professional Resumes",
      description:
        "Create a professional, ATS-friendly resume with AI. Generate polished resumes quickly with the AI Resume Generator by KrishAIWorks.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      about: {
        "@id": "https://airesumegenerator.krishaiworks.com/#webapplication",
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BS6TSMM1ZR"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BS6TSMM1ZR');
          `}
        </Script>
      </body>
    </html>
  );
}