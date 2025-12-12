import './globals.css';
import ScrollLenix from "@/components/ScrollLenis"

export const metadata = {
  title: 'Zain Jadoon',
  description: 'Software Engineer',
  icons: {
    icon: '/logo.png', // or '/favicon.ico'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><ScrollLenix>{children}</ScrollLenix></body>
    </html>
  );
}