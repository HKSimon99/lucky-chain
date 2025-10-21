import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
    title: "Lucky Chain Lottery",
    description: "Decentralized lottery experience powered by Polygon.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
        <body>
            <Providers>{children}</Providers>
        </body>
        </html>
    );
}