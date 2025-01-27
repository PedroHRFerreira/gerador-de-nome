import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <header>
        <h1>Header do Site</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer do Site</p>
      </footer>
    </div>
  );
}
