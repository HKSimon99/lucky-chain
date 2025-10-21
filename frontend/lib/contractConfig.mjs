const normalizeString = (value) => {
    if (typeof value !== 'string') {
        return undefined;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
};

const firstDefined = (...values) => values.find((value) => value !== undefined);

const parseChainId = (value) => {
    const normalized = normalizeString(value);
    if (!normalized) {
        return undefined;
    }

    const radix = normalized.startsWith('0x') ? 16 : 10;
    const parsed = Number.parseInt(normalized, radix);

    return Number.isFinite(parsed) ? parsed : undefined;
};

const addressCandidates = [
    normalizeString(process.env.NEXT_PUBLIC_LOTTO_CONTRACT_ADDRESS),
    normalizeString(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
    normalizeString(process.env.NEXT_PUBLIC_LOTTO_ADDRESS),
    normalizeString(process.env.NEXT_PUBLIC_DEPLOYED_ADDRESS),
];

const chainIdCandidates = [
    parseChainId(process.env.NEXT_PUBLIC_LOTTO_CHAIN_ID),
    parseChainId(process.env.NEXT_PUBLIC_CHAIN_ID),
    parseChainId(process.env.NEXT_PUBLIC_DEPLOY_CHAIN_ID),
];

const rpcUrlCandidates = [
    normalizeString(process.env.NEXT_PUBLIC_LOTTO_RPC_URL),
    normalizeString(process.env.NEXT_PUBLIC_RPC_URL),
    normalizeString(process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL),
];

const contractConfig = Object.freeze({
    address: firstDefined(...addressCandidates),
    chainId: firstDefined(...chainIdCandidates),
    rpcUrl: firstDefined(...rpcUrlCandidates),
});

export default contractConfig;