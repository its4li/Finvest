'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-950/80 border-t border-primary-500/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-600 p-2 rounded-xl">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">Finvest</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              پلتفرم پیشرو سرمایه‌گذاری در ایران با اتصال مستقیم به کیف پول ارز دیجیتال. 
              ما به شما کمک می‌کنیم تا بهترین تصمیمات سرمایه‌گذاری را بگیرید.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 p-3 rounded-lg transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </button>
              <button className="bg-primary-600 hover:bg-primary-700 p-3 rounded-lg transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </button>
              <button className="bg-primary-600 hover:bg-primary-700 p-3 rounded-lg transition-colors">
                <MapPin className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">خدمات</h4>
            <ul className="space-y-3">
              {[
                'سرمایه‌گذاری دلاری',
                'سرمایه‌گذاری ریالی',
                'مشاوره حرفه‌ای',
                'تحلیل بازار',
                'آموزش رایگان'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">پشتیبانی</h4>
            <ul className="space-y-3">
              {[
                'مرکز راهنمایی',
                'تماس با ما',
                'سوالات متداول',
                'گزارش مشکل',
                'درخواست ویژگی'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary-500/20 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Finvest. تمامی حقوق محفوظ است.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
