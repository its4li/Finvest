'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isConnected } = useAccount();

  return (
    <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Finvest
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-300 transition-colors">
              خانه
            </Link>
            <Link href="/investment/rial" className="text-white hover:text-purple-300 transition-colors">
              سرمایه‌گذاری ریالی
            </Link>
            <Link href="/investment/dollar" className="text-white hover:text-purple-300 transition-colors">
              سرمایه‌گذاری دلاری
            </Link>
            {isConnected && (
              <Link href="/dashboard" className="text-white hover:text-purple-300 transition-colors">
                داشبورد
              </Link>
            )}
            <Link href="#" className="text-white hover:text-purple-300 transition-colors">
              تماس با ما
            </Link>
          </nav>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <ConnectButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-purple-300 transition-colors">
                خانه
              </Link>
              <Link href="/investment/rial" className="text-white hover:text-purple-300 transition-colors">
                سرمایه‌گذاری ریالی
              </Link>
              <Link href="/investment/dollar" className="text-white hover:text-purple-300 transition-colors">
                سرمایه‌گذاری دلاری
              </Link>
              {isConnected && (
                <Link href="/dashboard" className="text-white hover:text-purple-300 transition-colors">
                  داشبورد
                </Link>
              )}
              <Link href="#" className="text-white hover:text-purple-300 transition-colors">
                تماس با ما
              </Link>
              <div className="pt-4">
                <ConnectButton />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
