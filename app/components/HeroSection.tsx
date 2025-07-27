'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap } from 'lucide-react'
import { useAccount } from 'wagmi'

interface HeroSectionProps {
  onInvestmentClick: () => void
}

export default function HeroSection({ onInvestmentClick }: HeroSectionProps) {
  const { isConnected } = useAccount()
  
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-8"
          >
            <span className="gradient-text">Finvest</span>
            <br />
            <span className="text-white">آینده سرمایه‌گذاری</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            پلتفرم هوشمند سرمایه‌گذاری با اتصال مستقیم کیف پول ارز دیجیتال.
            <br />
            بهترین فرصت‌های سرمایه‌گذاری دلاری و ریالی را کشف کنید.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {!isConnected ? (
              <>
                <button 
                  onClick={onInvestmentClick}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-3 purple-glow"
                >
                  شروع سرمایه‌گذاری
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-primary-500 text-primary-400 hover:bg-primary-500/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all">
                  بیشتر بدانید
                </button>
              </>
            ) : (
              <div className="glass-effect rounded-xl p-6 purple-glow">
                <p className="text-green-400 text-lg font-semibold mb-2">✅ کیف پول متصل شد</p>
                <p className="text-gray-300">آماده شروع سرمایه‌گذاری هستید</p>
                <button 
                  onClick={onInvestmentClick}
                  className="mt-4 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 mx-auto"
                >
                  مشاهده گزینه‌ها
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex justify-center gap-12 mt-16"
          >
            <div className="flex items-center gap-3 text-gray-300">
              <Shield className="w-6 h-6 text-primary-400" />
              <span>امنیت بالا</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Zap className="w-6 h-6 text-primary-400" />
              <span>سرعت بالا</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <ArrowRight className="w-6 h-6 text-primary-400" />
              <span>سادگی استفاده</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
