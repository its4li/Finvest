'use client'

import { motion } from 'framer-motion'
import { Users, DollarSign, TrendingUp, Star } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'کاربر فعال',
    color: 'text-blue-400'
  },
  {
    icon: DollarSign,
    value: '$100M+',
    label: 'حجم سرمایه‌گذاری',
    color: 'text-green-400'
  },
  {
    icon: TrendingUp,
    value: '15.2%',
    label: 'میانگین بازده',
    color: 'text-purple-400'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'رضایت کاربران',
    color: 'text-yellow-400'
  }
]

export default function StatsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center glass-effect rounded-xl p-6 purple-glow"
              >
                <IconComponent className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
