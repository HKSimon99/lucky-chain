import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers.tsx";

export const metadata: Metadata = {
    title: "Lucky Chain Lottery",
    description: "Decentralized lottery experience powered by Kaia Kairos.",
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