import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Byggtrade | Parkett, Laminat & Vinylgulv",
  description:
    "Byggtrade leverer kvalitetsgulv til norske hjem og bedrifter. Utforsk vårt utvalg av parkett, laminat og vinylgulv.",
  keywords: "parkett, laminat, vinyl, gulv, Norge, Byggtrade",
  openGraph: {
    title: "Byggtrade | Parkett, Laminat & Vinylgulv",
    description:
      "Kvalitetsgulv til norske hjem og bedrifter. Parkett, laminat og vinyl.",
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warm-50 text-warm-900 antialiased">{children}</body>
    </html>
  );
}
