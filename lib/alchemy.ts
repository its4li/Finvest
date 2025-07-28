import { Alchemy, Network } from 'alchemy-sdk';

const API_KEY = '6oMykkcLRuuKHB-IMQszY';

// تنظیمات برای شبکه‌های مختلف
const networks = {
  ethereum: new Alchemy({ apiKey: API_KEY, network: Network.ETH_MAINNET }),
  base: new Alchemy({ apiKey: API_KEY, network: Network.BASE_MAINNET }),
  polygon: new Alchemy({ apiKey: API_KEY, network: Network.MATIC_MAINNET }),
  bnb: new Alchemy({ apiKey: API_KEY, network: Network.BNB_MAINNET })
};

export interface TokenBalance {
  contractAddress: string;
  tokenBalance: string;
  symbol?: string;
  name?: string;
  decimals?: number;
  logo?: string;
}

export interface WalletData {
  address: string;
  ethBalance: string;
  tokenBalances: TokenBalance[];
  nftCount: number;
  transactionCount: number;
}

export interface NetworkData {
  [key: string]: WalletData;
}

// دریافت موجودی ETH
export async function getEthBalance(address: string, network: keyof typeof networks): Promise<string> {
  try {
    const alchemy = networks[network];
    const balance = await alchemy.core.getBalance(address);
    return balance.toString();
  } catch (error) {
    console.error(`Error getting ETH balance for ${network}:`, error);
    return '0';
  }
}

// دریافت موجودی توکن‌ها
export async function getTokenBalances(address: string, network: keyof typeof networks): Promise<TokenBalance[]> {
  try {
    const alchemy = networks[network];
    const balances = await alchemy.core.getTokenBalances(address);
    
    const tokenBalances: TokenBalance[] = [];
    
    for (const token of balances.tokenBalances) {
      if (token.tokenBalance && token.tokenBalance !== '0x0') {
        try {
          const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);
          tokenBalances.push({
            contractAddress: token.contractAddress,
            tokenBalance: token.tokenBalance,
            symbol: metadata.symbol,
            name: metadata.name,
            decimals: metadata.decimals,
            logo: metadata.logo
          });
        } catch (metadataError) {
          tokenBalances.push({
            contractAddress: token.contractAddress,
            tokenBalance: token.tokenBalance
          });
        }
      }
    }
    
    return tokenBalances;
  } catch (error) {
    console.error(`Error getting token balances for ${network}:`, error);
    return [];
  }
}

// دریافت تعداد NFT ها
export async function getNftCount(address: string, network: keyof typeof networks): Promise<number> {
  try {
    const alchemy = networks[network];
    const nfts = await alchemy.nft.getNftsForOwner(address);
    return nfts.totalCount;
  } catch (error) {
    console.error(`Error getting NFT count for ${network}:`, error);
    return 0;
  }
}

// دریافت تعداد تراکنش‌ها
export async function getTransactionCount(address: string, network: keyof typeof networks): Promise<number> {
  try {
    const alchemy = networks[network];
    const count = await alchemy.core.getTransactionCount(address);
    return count;
  } catch (error) {
    console.error(`Error getting transaction count for ${network}:`, error);
    return 0;
  }
}

// دریافت اطلاعات کامل کیف پول برای یک شبکه
export async function getWalletData(address: string, network: keyof typeof networks): Promise<WalletData> {
  const [ethBalance, tokenBalances, nftCount, transactionCount] = await Promise.all([
    getEthBalance(address, network),
    getTokenBalances(address, network),
    getNftCount(address, network),
    getTransactionCount(address, network)
  ]);

  return {
    address,
    ethBalance,
    tokenBalances,
    nftCount,
    transactionCount
  };
}

// دریافت اطلاعات کامل کیف پول برای تمام شبکه‌ها
export async function getAllNetworksData(address: string): Promise<NetworkData> {
  const networkKeys = Object.keys(networks) as (keyof typeof networks)[];
  const results = await Promise.allSettled(
    networkKeys.map(network => getWalletData(address, network))
  );

  const networkData: NetworkData = {};
  
  results.forEach((result, index) => {
    const networkKey = networkKeys[index];
    if (result.status === 'fulfilled') {
      networkData[networkKey] = result.value;
    } else {
      console.error(`Failed to get data for ${networkKey}:`, result.reason);
      networkData[networkKey] = {
        address,
        ethBalance: '0',
        tokenBalances: [],
        nftCount: 0,
        transactionCount: 0
      };
    }
  });

  return networkData;
}
