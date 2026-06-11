import { BookProvider } from "@/context/BookContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookVault - Library Management System",
  description: "Implementing the concepts like Context API and routing",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html>
       <body>
        <BookProvider>
          {children}
        </BookProvider>
      </body>
    </html>
  );
}
