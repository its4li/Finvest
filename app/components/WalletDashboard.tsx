'use client';

import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { getAllNetworksData, NetworkData, TokenBalance } from '@/lib/alchemy';
import { ethers } from 'ethers';

interface NetworkCardProps {
  networkName: string;
  networkData: any;
  isLoading: boolean;
}

const NetworkCard: React.FC<NetworkCardProps> = ({ networkName, networkData, isLoading }) => {
  const formatBalance = (balance: string, decimals: number = 18) => {
    try {
      const formatted = ethers.utils.formatUnits(balance, decimals);
      return parseFloat(formatted).toFixed(4);
    } catch {
      return '0.0000';
    }
  };

  const getNetworkIcon = (network: string) => {
    const icons: { [key: string]: string } = {
      ethereum: '⟠',
      base: '🔵',
      polygon: '🟣',
      bnb: '🟡'
    };
    return icons[network] || '🔗';
  };

  const getNetworkColor = (network: string) => {
    const colors: { [key: string]: string } = {
      ethereum: 'from-blue-500 to-purple-600',
      base: 'from-blue-400 to-blue-600',
      polygon: 'from-purple-500 to-pink-600',
      bnb: 'from-yellow-400 to-orange-500'
    };
    return colors[network] || 'from-gray-500 to-gray-700';
  };

  if (isLoading) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="animate-pulse">
          <div className="h-6 bg-white/20 rounded mb-4"></div>
          <div className="h-4 bg-white/20 rounded mb-2"></div>
          <div className="h-4 bg-white/20 rounded mb-2"></div>
          <div className="h-4 bg-white/20 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br ${getNetworkColor(networkName)} rounded-2xl p-6 text-white shadow-xl`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{getNetworkIcon(networkName)}</span>
          <h3 className="text-xl font-bold capitalize">{networkName}</h3>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="bg-white/20 rounded-lg p-3">
          <p className="text-sm opacity-80">موجودی اصلی</p>
          <p className="text-lg font-bold">
            {formatBalance(networkData.ethBalance)} {networkName === 'ethereum' ? 'ETH' : networkName === 'bnb' ? 'BNB' : 'MATIC'}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/20 rounded-lg p-3">
            <p className="text-sm opacity-80">توکن‌ها</p>
            <p className="text-lg font-bold">{networkData.tokenBalances.length}</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <p className="text-sm opacity-80">NFT ها</p>
            <p className="text-lg font-bold">{networkData.nftCount}</p>
          </div>
        </div>
        
        <div className="bg-white/20 rounded-lg p-3">
          <p className="text-sm opacity-80">تعداد تراکنش‌ها</p>
          <p className="text-lg font-bold">{networkData.transactionCount}</p>
        </div>
      </div>
    </div>
  );
};

const TokenList: React.FC<{ tokens: TokenBalance[] }> = ({ tokens }) => {
  const formatTokenBalance = (balance: string, decimals: number = 18) => {
    try {
      const formatted = ethers.utils.formatUnits(balance, decimals);
      return parseFloat(formatted).toFixed(4);
    } catch {
      return '0.0000';
    }
  };

  if (tokens.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>هیچ توکنی یافت نشد</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tokens.map((token, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {token.logo && (
                <img src={token.logo} alt={token.symbol} className="w-8 h-8 rounded-full" />
              )}
              <div>
                <p className="font-semibold text-white">{token.symbol || 'Unknown'}</p>
                <p className="text-sm text-gray-300">{token.name || 'Unknown Token'}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-white">
                {formatTokenBalance(token.tokenBalance, token.decimals)}
              </p>
              <p className="text-sm text-gray-300">{token.symbol}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const WalletDashboard: React.FC = () => {
  const { address, isConnected } = useAccount();
  const [networkData, setNetworkData] = useState<NetworkData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum');

  useEffect(() => {
    if (isConnected && address) {
      loadWalletData();
    }
  }, [isConnected, address]);

  const loadWalletData = async () => {
    if (!address) return;
    
    setIsLoading(true);
    try {
      const data = await getAllNetworksData(address);
      setNetworkData(data);
    } catch (error) {
      console.error('Error loading wallet data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">کیف پول متصل نیست</h2>
          <p className="text-gray-300">لطفاً ابتدا کیف پول خود را متصل کنید</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">داشبورد کیف پول</h1>
          <p className="text-gray-300">مدیریت و مشاهده دارایی‌های دیجیتال شما</p>
          <div className="mt-4 bg-white/10 backdrop-blur-lg rounded-lg p-3 inline-block">
            <p className="text-sm text-gray-300">آدرس کیف پول:</p>
            <p className="font-mono text-white">{address}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-xl transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-purple-900 font-semibold'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              نمای کلی
            </button>
            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-6 py-3 rounded-xl transition-all ${
                activeTab === 'tokens'
                  ? 'bg-white text-purple-900 font-semibold'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              توکن‌ها
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['ethereum', 'base', 'polygon', 'bnb'].map((network) => (
              <NetworkCard
                key={network}
                networkName={network}
                networkData={networkData?.[network]}
                isLoading={isLoading}
              />
            ))}
          </div>
        )}

        {activeTab === 'tokens' && (
          <div className="max-w-4xl mx-auto">
            {/* Network Selector */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
                {['ethereum', 'base', 'polygon', 'bnb'].map((network) => (
                  <button
                    key={network}
                    onClick={() => setSelectedNetwork(network)}
                    className={`px-4 py-2 rounded-xl transition-all capitalize ${
                      selectedNetwork === network
                        ? 'bg-white text-purple-900 font-semibold'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {network}
                  </button>
                ))}
              </div>
            </div>

            {/* Token List */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                توکن‌های {selectedNetwork}
              </h3>
              {isLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-4 animate-pulse">
                      <div className="h-4 bg-white/20 rounded mb-2"></div>
                      <div className="h-4 bg-white/20 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <TokenList tokens={networkData?.[selectedNetwork]?.tokenBalances || []} />
              )}
            </div>
          </div>
        )}

        {/* Refresh Button */}
        <div className="text-center mt-8">
          <button
            onClick={loadWalletData}
            disabled={isLoading}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-2xl transition-all transform hover:scale-105 disabled:hover:scale-100"
          >
            {isLoading ? 'در حال بارگذاری...' : 'بروزرسانی اطلاعات'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
