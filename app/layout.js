import './globals.css';

import ScrollLenix from "@/components/ScrollLenis"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body><ScrollLenix>{children}</ScrollLenix></body>
    </html>
  );
}
