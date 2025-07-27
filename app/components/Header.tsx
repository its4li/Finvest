'use client'

import { motion } from 'framer-motion'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { TrendingUp } from 'lucide-react'

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 glass-effect border-b border-primary-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 p-2 rounded-xl">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold gradient-text">Finvest</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">خانه</a>
            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">سرمایه‌گذاری</a>
            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">آموزش</a>
            <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">تماس</a>
          </nav>
          
          <ConnectButton />
        </div>
      </div>
    </motion.header>
  )
}
