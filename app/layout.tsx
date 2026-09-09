import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
export const metadata: Metadata = { title: { default: "CanarisTech | High-tech premium au Cameroun", template: "%s | CanarisTech" }, description: "CanarisTech, votre spécialiste high-tech premium : smartphones, ordinateurs, accessoires et conseils personnalisés.", keywords: ["high-tech", "smartphones", "ordinateurs", "Cameroun", "CanarisTech"], openGraph: { type: "website", locale: "fr_CM", siteName: "CanarisTech", title: "CanarisTech | High-tech premium au Cameroun", description: "La technologie qui vous accompagne au quotidien." }, twitter: { card: "summary", title: "CanarisTech", description: "Votre spécialiste high-tech premium." }, robots: { index: true, follow: true } };

export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="fr" className={`${inter.variable} h-full`}><head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /></head><body className="flex min-h-full flex-col font-sans antialiased"><Navbar /><main className="flex-1 pt-20">{children}</main><Footer /></body></html>; }
