'use client'

import { motion } from 'framer-motion'
import { DollarSign, PieChart, TrendingUp, BarChart3 } from 'lucide-react'

const categories = [
  {
    title: 'سرمایه‌گذاری دلاری',
    icon: DollarSign,
    items: [
      'Ethereum Staking',
      'Bitcoin Investment',
      'DeFi Protocols',
      'Yield Farming',
      'Liquidity Mining'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'سرمایه‌گذاری ریالی',
    icon: PieChart,
    items: [
      'صندوق‌های سرمایه‌گذاری',
      'بورس اوراق بهادار',
      'طلا و جواهر',
      'املاک و مستغلات',
      'سپرده بانکی'
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'سرمایه‌گذاری ترکیبی',
    icon: TrendingUp,
    items: [
      'پورتفوی متنوع',
      'ریسک متعادل',
      'بازده بلندمدت',
      'مدیریت حرفه‌ای',
      'مشاوره رایگان'
    ],
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'تحلیل و گزارش',
    icon: BarChart3,
    items: [
      'تحلیل تکنیکال',
      'گزارش بازار',
      'پیش‌بینی قیمت',
      'مدیریت ریسک',
      'آموزش رایگان'
    ],
    color: 'from-orange-500 to-red-600'
  }
]

export default function InvestmentCategories() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white mb-6">دسته‌بندی سرمایه‌گذاری</h3>
      
      {categories.map((category, index) => {
        const IconComponent = category.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass-effect rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">{category.title}</h4>
            </div>
            
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <button className="mt-4 w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-2 rounded-lg transition-all text-sm font-medium">
              مشاهده همه
            </button>
          </motion.div>
        )
      })}
    </div>
  )
}
