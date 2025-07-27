'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, TrendingUp, Shield, Star, Info, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const rialInvestments = [
  {
    id: 1,
    title: 'بورس اوراق بهادار',
    description: 'سرمایه‌گذاری در سهام شرکت‌های بورسی',
    expectedReturn: '15-25%',
    riskLevel: 'متوسط تا بالا',
    minInvestment: '1,000,000 ریال',
    features: ['معاملات آنلاین', 'تحلیل تکنیکال', 'پورتفوی متنوع', 'مشاوره حرفه‌ای'],
    color: 'from-blue-500 to-cyan-600',
    icon: '📈'
  },
  {
    id: 2,
    title: 'طلا و جواهرات',
    description: 'خرید و نگهداری طلا، نقره و سنگ‌های قیمتی',
    expectedReturn: '8-15%',
    riskLevel: 'کم تا متوسط',
    minInvestment: '5,000,000 ریال',
    features: ['حفظ ارزش در برابر تورم', 'نقدشوندی بالا', 'امنیت فیزیکی', 'تنوع در انواع'],
    color: 'from-yellow-500 to-orange-600',
    icon: '🥇'
  },
  {
    id: 3,
    title: 'صندوق‌های سرمایه‌گذاری',
    description: 'سرمایه‌گذاری در صندوق‌های مختلف با مدیریت حرفه‌ای',
    expectedReturn: '12-20%',
    riskLevel: 'کم تا متوسط',
    minInvestment: '500,000 ریال',
    features: ['مدیریت حرفه‌ای', 'تنوع سرمایه‌گذاری', 'شفافیت کامل', 'نقدشوندی روزانه'],
    color: 'from-green-500 to-emerald-600',
    icon: '💼'
  },
  {
    id: 4,
    title: 'املاک و مستغلات',
    description: 'خرید، فروش و اجاره املاک مسکونی و تجاری',
    expectedReturn: '10-18%',
    riskLevel: 'کم',
    minInvestment: '100,000,000 ریال',
    features: ['درآمد ثابت از اجاره', 'افزایش ارزش بلندمدت', 'امنیت بالا', 'مالکیت فیزیکی'],
    color: 'from-purple-500 to-pink-600',
    icon: '🏠'
  },
  {
    id: 5,
    title: 'سپرده‌های بانکی',
    description: 'سپرده‌گذاری در بانک‌ها با سود تضمینی',
    expectedReturn: '18-22%',
    riskLevel: 'بسیار کم',
    minInvestment: '1,000,000 ریال',
    features: ['سود تضمینی', 'امنیت کامل', 'نقدشوندی آسان', 'بیمه سپرده'],
    color: 'from-indigo-500 to-purple-600',
    icon: '🏦'
  },
  {
    id: 6,
    title: 'کالاهای اساسی',
    description: 'سرمایه‌گذاری در کالاهای اساسی و استراتژیک',
    expectedReturn: '10-25%',
    riskLevel: 'متوسط',
    minInvestment: '10,000,000 ریال',
    features: ['تنوع در کالاها', 'حفظ ارزش', 'تقاضای ثابت', 'پتانسیل رشد بالا'],
    color: 'from-red-500 to-pink-600',
    icon: '📦'
  }
]

export default function RialInvestmentPage() {
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
              سرمایه‌گذاری ریالی
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              بهترین فرصت‌های سرمایه‌گذاری در بازارهای داخلی ایران با ریال.
              از بورس تا طلا، از املاک تا صندوق‌های سرمایه‌گذاری.
            </p>
            
            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span>امنیت تضمینی</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span>بازده مطلوب</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Star className="w-5 h-5" />
                <span>مشاوره رایگان</span>
              </div>
            </div>
          </motion.div>
          
          {/* Investment Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rialInvestments.map((investment, index) => (
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
              چرا سرمایه‌گذاری ریالی؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">امنیت بالا</h3>
                <p className="text-gray-300">سرمایه‌گذاری در بازارهای تنظیم‌شده و قانونی ایران</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">رشد پایدار</h3>
                <p className="text-gray-300">بازده مناسب و پایدار در بلندمدت با ریسک کنترل‌شده</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">مشاوره تخصصی</h3>
                <p className="text-gray-300">راهنمایی کامل توسط متخصصان بازارهای مالی ایران</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
