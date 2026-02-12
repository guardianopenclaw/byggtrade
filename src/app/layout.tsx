import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nordic Floor | Premium Klikk-Vinyl Gulv",
  description:
    "Nordic Floor er Norges ledende leverandør av premium klikk-vinyl gulv. Vanntett, slitesterkt og enkelt å installere. Utforsk våre kolleksjoner.",
  keywords:
    "klikk-vinyl, vinyl gulv, click vinyl, vanntett gulv, Nordic Floor, nordicfloor, gulv Norge",
  openGraph: {
    title: "Nordic Floor | Premium Klikk-Vinyl Gulv",
    description:
      "Norges ledende leverandør av premium klikk-vinyl gulv. Vanntett, slitesterkt og enkelt å installere.",
    type: "website",
    locale: "nb_NO",
    url: "https://nordicfloor.no",
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
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-nordic-50 text-nordic-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
