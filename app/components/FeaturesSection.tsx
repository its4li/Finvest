'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, PieChart, TrendingUp, Users, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'امنیت بالا',
    description: 'استفاده از آخرین تکنولوژی‌های امنیتی و رمزنگاری',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Zap,
    title: 'سرعت بالا',
    description: 'اجرای فوری تراکنش‌ها و به‌روزرسانی لحظه‌ای',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: PieChart,
    title: 'تنوع سرمایه‌گذاری',
    description: 'دسترسی به انواع مختلف ابزارهای سرمایه‌گذاری',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: TrendingUp,
    title: 'بازده بالا',
    description: 'بهترین فرصت‌های سرمایه‌گذاری با بازده مطلوب',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Users,
    title: 'مشاوره حرفه‌ای',
    description: 'تیم متخصص برای راهنمایی و مشاوره رایگان',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: BarChart3,
    title: 'تحلیل هوشمند',
    description: 'ابزارهای پیشرفته تحلیل و پیش‌بینی بازار',
    color: 'from-red-500 to-pink-600'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            چرا Finvest؟
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ما بهترین ابزارها و خدمات را برای موفقیت شما در سرمایه‌گذاری فراهم کرده‌ایم
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-effect rounded-xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all"
              >
                <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-xl w-fit mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
