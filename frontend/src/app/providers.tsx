"use client";

import type { ReactNode } from "react";
import { LottoV2ContractProvider } from "@/hooks/useLottoV2Contract";

export function Providers({ children }: { children: ReactNode }) {
    return <LottoV2ContractProvider>{children}</LottoV2ContractProvider>;
}

export default Providers;