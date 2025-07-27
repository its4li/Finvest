'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, TrendingUp, Shield, Star, Info, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const dollarInvestments = [
  {
    id: 1,
    title: 'Ethereum Staking',
    description: 'استیک کردن اتریوم و دریافت پاداش سالانه',
    expectedReturn: '4-6%',
    riskLevel: 'کم',
    minInvestment: '$100',
    features: ['پاداش روزانه', 'امنیت شبکه', 'نقدشوندی بالا', 'مدیریت خودکار'],
    color: 'from-blue-500 to-cyan-600',
    icon: '⟠'
  },
  {
    id: 2,
    title: 'DeFi Liquidity Pools',
    description: 'فراهم کردن نقدینگی در پروتکل‌های DeFi',
    expectedReturn: '8-15%',
    riskLevel: 'متوسط',
    minInvestment: '$50',
    features: ['بازده بالا', 'تنوع پروتکل‌ها', 'کامپاند کردن سود', 'انعطاف‌پذیری'],
    color: 'from-green-500 to-emerald-600',
    icon: '🌊'
  },
  {
    id: 3,
    title: 'Copy Trading',
    description: 'کپی کردن معاملات تریدرهای حرفه‌ای',
    expectedReturn: '15-30%',
    riskLevel: 'متوسط تا بالا',
    minInvestment: '$25',
    features: ['تریدرهای تأیید شده', 'شفافیت کامل', 'کنترل ریسک', 'آموزش رایگان'],
    color: 'from-purple-500 to-pink-600',
    icon: '👥'
  },
  {
    id: 4,
    title: 'Yield Farming',
    description: 'کشاورزی بازده در پروتکل‌های مختلف DeFi',
    expectedReturn: '20-50%',
    riskLevel: 'بالا',
    minInvestment: '$100',
    features: ['بازده بسیار بالا', 'استراتژی‌های متنوع', 'کامپاند خودکار', 'مدیریت ریسک'],
    color: 'from-yellow-500 to-orange-600',
    icon: '🚜'
  },
  {
    id: 5,
    title: 'Bitcoin Investment',
    description: 'سرمایه‌گذاری بلندمدت در بیت‌کوین',
    expectedReturn: '25-100%',
    riskLevel: 'بالا',
    minInvestment: '$10',
    features: ['ذخیره ارزش', 'رشد بلندمدت', 'نقدشوندی جهانی', 'محدودیت عرضه'],
    color: 'from-orange-500 to-red-600',
    icon: '₿'
  },
  {
    id: 6,
    title: 'NFT Trading',
    description: 'خرید و فروش توکن‌های غیرقابل تعویض',
    expectedReturn: '10-200%',
    riskLevel: 'بسیار بالا',
    minInvestment: '$20',
    features: ['بازار نوظهور', 'پتانسیل رشد بالا', 'تنوع پروژه‌ها', 'جامعه فعال'],
    color: 'from-pink-500 to-purple-600',
    icon: '🎨'
  }
]

export default function DollarInvestmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950">
      <Header />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                بازگشت به خانه
              </Link>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              سرمایه‌گذاری دلاری
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              دنیای بی‌نهایت فرصت‌های سرمایه‌گذاری در ارزهای دیجیتال و بازارهای جهانی.
              از استیکینگ تا DeFi، از کپی ترید تا NFT.
            </p>
            
            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2 text-green-400">
                <Zap className="w-5 h-5" />
                <span>سرعت بالا</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span>بازده بالا</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Star className="w-5 h-5" />
                <span>دسترسی جهانی</span>
              </div>
            </div>
          </motion.div>
          
          {/* Investment Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dollarInvestments.map((investment, index) => (
              <motion.div
                key={investment.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-effect rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all cursor-pointer"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{investment.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{investment.title}</h3>
                  <p className="text-gray-300">{investment.description}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">بازده مورد انتظار:</span>
                    <span className="text-green-400 font-semibold">{investment.expectedReturn}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">سطح ریسک:</span>
                    <span className="text-yellow-400 font-semibold">{investment.riskLevel}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">حداقل سرمایه:</span>
                    <span className="text-blue-400 font-semibold">{investment.minInvestment}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    ویژگی‌ها:
                  </h4>
                  <ul className="space-y-2">
                    {investment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full bg-gradient-to-r ${investment.color} hover:opacity-90 text-white py-3 rounded-xl transition-all font-semibold flex items-center justify-center gap-2`}>
                  شروع سرمایه‌گذاری
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 glass-effect rounded-2xl p-8 purple-glow"
          >
            <h2 className="text-3xl font-bold gradient-text mb-6 text-center">
              مزایای سرمایه‌گذاری دلاری
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">سرعت بالا</h3>
                <p className="text-gray-300">تراکنش‌های فوری و دسترسی 24/7 به بازارهای جهانی</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">بازده بالا</h3>
                <p className="text-gray-300">فرصت‌های سرمایه‌گذاری با بازده بالا در بازارهای نوظهور</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">تنوع بالا</h3>
                <p className="text-gray-300">دسترسی به هزاران پروژه و پروتکل مختلف در سراسر جهان</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Info className="w-6 h-6 text-yellow-400" />
                <h4 className="text-yellow-400 font-semibold">توجه مهم</h4>
              </div>
              <p className="text-gray-300">
                سرمایه‌گذاری در ارزهای دیجیتال دارای ریسک بالایی است. لطفاً قبل از سرمایه‌گذاری، 
                مطالعه کافی انجام دهید و تنها مبلغی را سرمایه‌گذاری کنید که از دست دادن آن برایتان قابل تحمل باشد.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
