'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, DollarSign, Coins, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface InvestmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InvestmentModal({ isOpen, onClose }: InvestmentModalProps) {
  const router = useRouter()

  const handleInvestmentChoice = (type: 'rial' | 'dollar') => {
    onClose()
    router.push(`/investment/${type}`)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="glass-effect rounded-2xl p-8 max-w-2xl w-full purple-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold gradient-text">انتخاب نوع سرمایه‌گذاری</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 text-center">
              لطفاً نوع سرمایه‌گذاری مورد نظر خود را انتخاب کنید:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Rial Investment */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInvestmentChoice('rial')}
                className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-8 text-white hover:from-green-500 hover:to-emerald-600 transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white/20 p-4 rounded-full mb-4">
                    <Coins className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">سرمایه‌گذاری ریالی</h3>
                  <p className="text-green-100 mb-4">
                    سرمایه‌گذاری در بازارهای داخلی با ریال ایران
                  </p>
                  <ul className="text-sm text-green-100 space-y-1 mb-6">
                    <li>• بورس اوراق بهادار</li>
                    <li>• طلا و جواهرات</li>
                    <li>• صندوق‌های سرمایه‌گذاری</li>
                    <li>• املاک و مستغلات</li>
                  </ul>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    انتخاب کنید
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.button>
              
              {/* Dollar Investment */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInvestmentChoice('dollar')}
                className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-8 text-white hover:from-blue-500 hover:to-purple-600 transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white/20 p-4 rounded-full mb-4">
                    <DollarSign className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">سرمایه‌گذاری دلاری</h3>
                  <p className="text-blue-100 mb-4">
                    سرمایه‌گذاری در بازارهای جهانی با ارزهای دیجیتال
                  </p>
                  <ul className="text-sm text-blue-100 space-y-1 mb-6">
                    <li>• استیکینگ ارزهای دیجیتال</li>
                    <li>• استخرهای نقدینگی</li>
                    <li>• کپی ترید</li>
                    <li>• فارمینگ و ماینینگ</li>
                  </ul>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    انتخاب کنید
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                💡 می‌توانید هر دو نوع سرمایه‌گذاری را همزمان انجام دهید
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
