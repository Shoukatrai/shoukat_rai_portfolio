import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://raishoukat.vercel.app"),
  title: "Shoukat Rai | MERN Stack Developer",
  description:
    "Official portfolio of Shoukat Rai, a Full-Stack MERN Developer specializing in React, Next.js, and Node.js.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} scroll-smooth`}
    >
      <head>
        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="6wBik4iQjKxYhzrFUQjvQYYPjMbbtGC4itX72PDKAEw"
        />

        {/* Primary Meta Tags */}
        <meta name="title" content="Shoukat Rai | MERN Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raishoukat.vercel.app/" />
        <meta
          property="og:title"
          content="Shoukat Rai - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Building scalable web applications with the MERN Stack. Explore my projects and skills."
        />
        {/* Image path fix: Ensure this file is in your 'public' folder as 'og-image.png' */}
        <meta
          property="og:image"
          content="https://raishoukat.vercel.app/og-image.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://raishoukat.vercel.app/" />
        <meta
          property="twitter:title"
          content="Shoukat Rai - Full Stack Developer"
        />
        <meta
          property="twitter:description"
          content="MERN Stack Developer Portfolio."
        />
        <meta
          property="twitter:image"
          content="https://raishoukat.vercel.app/og-image.png"
        />

        {/* Favicon Fix */}
        {/* Make sure 'favicon.png' is in the public folder */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
