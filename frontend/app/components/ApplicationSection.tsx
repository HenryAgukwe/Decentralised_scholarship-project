'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Send, User, DollarSign, MessageSquare, CheckCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface ApplicationSectionProps {
  isConnected: boolean
}

export default function ApplicationSection({ isConnected }: ApplicationSectionProps) {
  const [applicationData, setApplicationData] = useState({
    amount: '',
    reason: '',
    category: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    { id: 'general', name: 'General Education' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'medical', name: 'Medical Studies' },
    { id: 'arts', name: 'Arts & Humanities' },
  ]

  const handleInputChange = (field: string, value: string) => {
    setApplicationData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmitApplication = async () => {
    if (!isConnected) {
      toast.error('Please connect your wallet first')
      return
    }

    if (!applicationData.amount || !applicationData.reason.trim()) {
      toast.error('Please fill in all required fields')
      return
    }

    if (parseFloat(applicationData.amount) <= 0) {
      toast.error('Please enter a valid amount')
      return
    }

    if (applicationData.reason.length < 50) {
      toast.error('Please provide a more detailed reason (minimum 50 characters)')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate application submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Application submitted successfully! You will hear back within 7 days.')
      setApplicationData({ amount: '', reason: '', category: 'general' })
    } catch (error) {
      toast.error('Application submission failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="apply" className="py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Apply for a <span className="gradient-text-2">Scholarship</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Take the first step towards your educational goals. Apply for funding and let us help you achieve your dreams.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Application Form */}
        <motion.div
          className="glass rounded-3xl p-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-web3-gradient-2 rounded-2xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Scholarship Application</h3>
          </div>

          {/* Category Selection */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-3">
              Field of Study *
            </label>
            <select
              value={applicationData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id} className="bg-gray-800">
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Amount Requested */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-3">
              Amount Requested (USD) *
            </label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <input
                type="number"
                value={applicationData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                placeholder="Enter requested amount"
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Reason/Purpose */}
          <div className="mb-8">
            <label className="block text-white font-semibold mb-3">
              Purpose & Reason *
            </label>
            <div className="relative">
              <textarea
                value={applicationData.reason}
                onChange={(e) => handleInputChange('reason', e.target.value)}
                placeholder="Explain why you need this scholarship, your educational goals, and how it will impact your future. Minimum 50 characters."
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
              />
              <div className="absolute bottom-3 right-3 text-sm text-white/50">
                {applicationData.reason.length}/500
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            onClick={handleSubmitApplication}
            disabled={isSubmitting || !isConnected}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              isConnected
                ? 'bg-web3-gradient-2 hover:shadow-2xl hover:scale-105'
                : 'bg-gray-600 cursor-not-allowed'
            } text-white`}
            whileHover={isConnected ? { y: -2 } : {}}
            whileTap={isConnected ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </div>
            ) : !isConnected ? (
              'Connect Wallet to Apply'
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Submit Application</span>
              </div>
            )}
          </motion.button>
        </motion.div>

        {/* Application Process & Requirements */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Application Process */}
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-web3-gradient-3 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Application Process</h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Submit Application',
                  description: 'Fill out the form with your details and requirements',
                  color: 'bg-web3-gradient'
                },
                {
                  step: '2',
                  title: 'Review Period',
                  description: 'Our team reviews applications within 5-7 business days',
                  color: 'bg-web3-gradient-3'
                },
                {
                  step: '3',
                  title: 'Decision & Funding',
                  description: 'If approved, funds are automatically transferred to your wallet',
                  color: 'bg-web3-gradient-4'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Eligibility Requirements */}
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-web3-gradient-5 rounded-2xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Eligibility</h3>
            </div>

            <ul className="space-y-3 text-white/80">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Currently enrolled or accepted to an educational institution</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Demonstrated financial need</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Clear educational goals and purpose</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Valid Stacks wallet address</span>
              </li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-web3-gradient-6 rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Success Stories</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-white/80 text-sm italic mb-2">
                  "Thanks to the scholarship fund, I was able to complete my computer science degree. 
                  Now I'm working at a tech startup and giving back to the community!"
                </p>
                <p className="text-white/60 text-xs">- Sarah, Computer Science Graduate</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-white/80 text-sm italic mb-2">
                  "The $2000 scholarship covered my final semester expenses. 
                  I'm now a certified nurse helping patients in my community."
                </p>
                <p className="text-white/60 text-xs">- Miguel, Nursing Graduate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
