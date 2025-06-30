'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, DollarSign, Target, Zap } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface DonationSectionProps {
  isConnected: boolean
}

export default function DonationSection({ isConnected }: DonationSectionProps) {
  const [donationAmount, setDonationAmount] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [isLoading, setIsLoading] = useState(false)

  const categories = [
    { id: 'general', name: 'General Education', icon: '🎓' },
    { id: 'engineering', name: 'Engineering', icon: '⚙️' },
    { id: 'medical', name: 'Medical Studies', icon: '🏥' },
    { id: 'arts', name: 'Arts & Humanities', icon: '🎨' },
  ]

  const quickAmounts = [10, 50, 100, 500, 1000]

  const handleDonate = async () => {
    if (!isConnected) {
      toast.error('Please connect your wallet first')
      return
    }

    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      toast.error('Please enter a valid donation amount')
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate donation transaction
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success(`Successfully donated $${donationAmount} to ${categories.find(c => c.id === selectedCategory)?.name}!`)
      setDonationAmount('')
    } catch (error) {
      toast.error('Donation failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="donate" className="py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Make a <span className="gradient-text">Difference</span> Today
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Your donation directly supports students pursuing their educational dreams. 
          Choose a category or contribute to the general fund.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Donation Form */}
        <motion.div
          className="glass rounded-3xl p-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-web3-gradient rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Donate Now</h3>
          </div>

          {/* Category Selection */}
          <div className="mb-8">
            <label className="block text-white font-semibold mb-4">
              Choose Category
            </label>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-purple-400 bg-purple-400/10'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="text-white text-sm font-medium">
                    {category.name}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Amount Selection */}
          <div className="mb-8">
            <label className="block text-white font-semibold mb-4">
              Quick Amounts (USD)
            </label>
            <div className="flex flex-wrap gap-3">
              {quickAmounts.map((amount) => (
                <motion.button
                  key={amount}
                  onClick={() => setDonationAmount(amount.toString())}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ${amount}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Custom Amount Input */}
          <div className="mb-8">
            <label className="block text-white font-semibold mb-4">
              Custom Amount
            </label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Donate Button */}
          <motion.button
            onClick={handleDonate}
            disabled={isLoading || !isConnected}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              isConnected
                ? 'bg-web3-gradient hover:shadow-2xl hover:scale-105'
                : 'bg-gray-600 cursor-not-allowed'
            } text-white`}
            whileHover={isConnected ? { y: -2 } : {}}
            whileTap={isConnected ? { scale: 0.98 } : {}}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : !isConnected ? (
              'Connect Wallet to Donate'
            ) : (
              `Donate ${donationAmount ? `$${donationAmount}` : ''}`
            )}
          </motion.button>
        </motion.div>

        {/* Impact Visualization */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Impact Cards */}
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-web3-gradient-3 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Your Impact</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <div className="text-white font-semibold">$50 Donation</div>
                  <div className="text-white/70 text-sm">Books for 1 student</div>
                </div>
                <div className="text-2xl">📚</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <div className="text-white font-semibold">$500 Donation</div>
                  <div className="text-white/70 text-sm">1 semester tuition</div>
                </div>
                <div className="text-2xl">🎓</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <div className="text-white font-semibold">$2000 Donation</div>
                  <div className="text-white/70 text-sm">Full year scholarship</div>
                </div>
                <div className="text-2xl">🌟</div>
              </div>
            </div>
          </div>

          {/* Recent Donations */}
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-web3-gradient-4 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Recent Donations</h3>
            </div>

            <div className="space-y-4">
              {[
                { amount: 250, category: 'Engineering', time: '2 minutes ago' },
                { amount: 100, category: 'Medical', time: '15 minutes ago' },
                { amount: 500, category: 'General', time: '1 hour ago' },
              ].map((donation, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <div className="text-white font-semibold">${donation.amount}</div>
                    <div className="text-white/70 text-sm">{donation.category}</div>
                  </div>
                  <div className="text-white/60 text-sm">{donation.time}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
