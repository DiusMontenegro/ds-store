import type { Metadata } from "next";
import { Roboto, Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";

// Roboto font configuration
const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ["100", "300", "400", "500", "700", "900"],
});

const teko = Teko({
    subsets: ["latin"],
    variable: "--font-teko",
    weight: ["300", "400", "500", "700", "600"],
});

// Metadata configuration
export const metadata: Metadata = {
    title: {
        absolute: "DS Webstore",
        template: "%s | DS Webstore",
    },
    description:
        "Discover the best deals on phones, laptops, desktops, accessories, and computer parts at DS Webstore. Shop top brands, latest models, and quality tech essentials with fast shipping and unbeatable prices. Your trusted online store for electronics and gadgets.",
};

// Root Layout Component
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} ${teko.variable} antialiased`}>
                {/* Add a navbar */}
                <Navbar />
                {children}
            </body>
        </html>
    );
}
