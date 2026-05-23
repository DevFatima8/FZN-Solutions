// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "FZN Solutions | Professional Software Company",
  description: "Building modern web applications, scalable business solutions, and enterprise software for startups and companies worldwide.",
  keywords: "web development, software company, MERN stack, Next.js, UI/UX design",
  authors: [{ name: "FZN Solutions" }],
  openGraph: {
    title: "FZN Solutions - Professional Software Company",
    description: "Building modern digital products and scalable software solutions for businesses worldwide.",
    url: "https://fznsolutions.com",
    siteName: "FZN Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Inter']">{children}</body>
    </html>
  );
}