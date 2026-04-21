import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://raishoukat.vercel.app"),
  title: "Shoukat Rai | MERN Stack Developer | SMIT IT Student",
  description:
    "Official portfolio of Shoukat Rai, a Full-Stack MERN Developer specialized in React, Next.js, and Node.js.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} scroll-smooth`}
    >
      <head>
        <title>Shoukat Rai | MERN Stack Developer</title>
        <meta
          name="description"
          content="Official portfolio of Shoukat Rai, a Full-Stack MERN Developer specialized in React, Next.js, and Node.js. Trained at Saylani Mass IT Training (SMIT)."
        />
        <meta
          name="keywords"
          content="Shoukat Rai, Shoukat Rai Portfolio, MERN Stack Developer Pakistan, Saylani Mass IT Training Student, SMIT Web Developer, React Developer Karachi"
        />
        <meta name="author" content="Shoukat Rai" />

        <meta
          name="google-site-verification"
          content="6wBik4iQjKxYhzrFUQjvQYYPjMbbtGC4itX72PDKAEw"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raishoukat.vercel.app" />
        <meta
          property="og:title"
          content="Shoukat Rai - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Building scalable web applications with the MERN Stack."
        />
        <meta
          property="og:image"
          content="https://raishoukat.vercel.app/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://raishoukat.vercel.app" />
        <meta
          name="twitter:title"
          content="Shoukat Rai - Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Building scalable web applications with the MERN Stack."
        />
        <meta
          name="twitter:image"
          content="https://raishoukat.vercel.app/og-image.png"
        />

        <link rel="icon" href="/favicon.ico.png" />
        <link rel="apple-touch-icon" href="/favicon.ico.png" />
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
