import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

// --- ULTIMATE SEO METADATA ---
export const metadata = {
  metadataBase: new URL("https://raishoukat.vercel.app"),
  title: {
    default: "Shoukat Rai | MERN Stack Developer",
    template: "%s | Shoukat Rai",
  },
  description:
    "MERN Stack Developer specializing in React, Next.js, and Node.js. Check out my latest projects and web development skills.",
  keywords: [
    "Shoukat Rai",
    "MERN Stack Developer",
    "Next.js Portfolio",
    "Full Stack Developer Pakistan",
    "Saylani IT Student",
  ],
  authors: [{ name: "Shoukat Rai" }],
  creator: "Shoukat Rai",
  icons: {
    icon: "/favicon.ico",
  },

  // WhatsApp / Facebook / LinkedIn Preview
  openGraph: {
    title: "Shoukat Rai | Full-Stack Developer Portfolio",
    description: "Building scalable web applications with the MERN Stack.",
    url: "https://raishoukat.vercel.app",
    siteName: "Shoukat Rai Portfolio",
    images: [
      {
        url: "/og-image.png", // Next.js metadataBase se full URL khud bana lega
        width: 1200,
        height: 630,
        alt: "Shoukat Rai Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Preview
  twitter: {
    card: "summary_large_image",
    title: "Shoukat Rai | MERN Developer",
    description: "Full-Stack Web Developer",
    images: ["/og-image.png"],
  },

  // Search Engine Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Google Search Console Verification
  verification: {
    google: "6wBik4iQjKxYhzrFUQjvQYYPjMbbtGC4itX72PDKAEw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} scroll-smooth`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="6wBik4iQjKxYhzrFUQjvQYYPjMbbtGC4itX72PDKAEw"
        />
      </head>
      <body className="font-poppins bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased selection:bg-indigo-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
