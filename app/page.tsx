'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  DollarSign, 
  PieChart,
  ArrowRight,
  Star,
  Users,
  BarChart3,
  X
} from 'lucide-react'
import Header from './components/Header'
import InvestmentCategories from './components/InvestmentCategories'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import InvestmentModal from './components/InvestmentModal'

export default function Home() {
  const { address, isConnected } = useAccount()
  const [showInvestmentModal, setShowInvestmentModal] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950">
      <Header onInvestmentClick={() => setShowInvestmentModal(true)} />
      
      <main className="relative">
        <HeroSection onInvestmentClick={() => setShowInvestmentModal(true)} />
        <StatsSection />
        <FeaturesSection />
        
        {/* Investment Dashboard */}
        {isConnected && (
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold gradient-text mb-4">
                  داشبورد سرمایه‌گذاری شما
                </h2>
                <p className="text-gray-300 text-lg">
                  کیف پول متصل: {address?.slice(0, 6)}...{address?.slice(-4)}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="glass-effect rounded-2xl p-8 purple-glow">
                    <h3 className="text-2xl font-bold mb-6">پیشنهادات سرمایه‌گذاری</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Ethereum Staking', apy: '4.2%', risk: 'کم', amount: '$1,000+' },
                        { name: 'DeFi Liquidity Pool', apy: '8.5%', risk: 'متوسط', amount: '$500+' },
                        { name: 'Yield Farming', apy: '12.3%', risk: 'بالا', amount: '$250+' },
                      ].map((investment, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="bg-dark-800/50 rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="text-xl font-semibold text-white">{investment.name}</h4>
                              <p className="text-gray-400">حداقل سرمایه: {investment.amount}</p>
                            </div>
                            <div className="text-left">
                              <div className="text-2xl font-bold text-green-400">{investment.apy}</div>
                              <div className="text-sm text-gray-400">ریسک: {investment.risk}</div>
                            </div>
                          </div>
                          <button className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                            شروع سرمایه‌گذاری
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <InvestmentCategories />
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </main>
      
      <Footer />
      
      {/* Investment Selection Modal */}
      <InvestmentModal 
        isOpen={showInvestmentModal} 
        onClose={() => setShowInvestmentModal(false)} 
      />
    </div>
  )
}
