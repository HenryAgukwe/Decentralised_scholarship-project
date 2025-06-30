'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Heart, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-web3-gradient-3 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-web3-gradient-2 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-white">Empowering</span>{' '}
            <span className="gradient-text">Education</span>{' '}
            <span className="text-white">Through</span>{' '}
            <span className="gradient-text-2">Blockchain</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join our decentralized scholarship fund to make education accessible for everyone. 
            Donate, apply, and transform lives through the power of blockchain technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="group flex items-center space-x-3 bg-web3-gradient px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-6 h-6" />
              <span>Donate Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="group flex items-center space-x-3 glass px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-6 h-6" />
              <span>Apply for Scholarship</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.div 
            className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-16 h-16 bg-web3-gradient-3 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Decentralized</h3>
            <p className="text-white/70 leading-relaxed">
              Built on blockchain technology for transparency, security, and global accessibility.
            </p>
          </motion.div>

          <motion.div 
            className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-16 h-16 bg-web3-gradient-4 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Transparent</h3>
            <p className="text-white/70 leading-relaxed">
              Every donation and scholarship award is recorded on the blockchain for full transparency.
            </p>
          </motion.div>

          <motion.div 
            className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-16 h-16 bg-web3-gradient-5 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Impactful</h3>
            <p className="text-white/70 leading-relaxed">
              Direct funding to students worldwide, removing barriers and creating opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
