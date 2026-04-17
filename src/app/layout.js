import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"; 

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"],
  variable: '--font-poppins'
});

export const metadata = {
  title: {
    default: "Shoukat Rai | MERN Stack Developer | Saylani IT Student",
    template: "%s | Shoukat Rai"
  },
  description: "Official portfolio of Shoukat Rai, a Full-Stack MERN Developer specialized in React, Next.js, and Node.js. Trained at Saylani Mass IT Training (SMIT).",
  keywords: [
    "Shoukat Rai", 
    "Shoukat Rai Portfolio", 
    "MERN Stack Developer Pakistan", 
    "Saylani Mass IT Training Student", 
    "SMIT Web Developer",
    "React Developer Karachi"
  ],
  authors: [{ name: "Shoukat Rai" }],
  creator: "Shoukat Rai",
  openGraph: {
    title: "Shoukat Rai - Full Stack Developer",
    description: "Building scalable web applications with the MERN Stack.",
    url: "https://shoukatrai.vercel.app", 
    siteName: "Shoukat Rai Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/Generated Image April 17, 2026 - 8_27PM.png" />
      </head>
      <body className="font-poppins bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased selection:bg-indigo-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}