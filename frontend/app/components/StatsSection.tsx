'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Users, GraduationCap, Globe } from 'lucide-react'

export default function StatsSection() {
  const [stats, setStats] = useState({
    totalFunds: 0,
    totalDonors: 0,
    studentsHelped: 0,
    countries: 0
  })

  // Animate numbers
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        totalFunds: 125420,
        totalDonors: 342,
        studentsHelped: 89,
        countries: 23
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const StatCard = ({ icon: Icon, value, label, prefix = '', suffix = '', delay = 0 }) => (
    <motion.div
      className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      viewport={{ once: true }}
    >
      <div className="w-16 h-16 bg-web3-gradient rounded-2xl flex items-center justify-center mb-6 mx-auto">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <motion.div
        className="text-4xl font-bold gradient-text mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: delay + 0.3 }}
        viewport={{ once: true }}
      >
        {prefix}{value.toLocaleString()}{suffix}
      </motion.div>
      <div className="text-white/70 text-lg font-medium">{label}</div>
    </motion.div>
  )

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Making a <span className="gradient-text">Global Impact</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See how our decentralized scholarship fund is transforming lives and breaking down educational barriers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={DollarSign}
            value={stats.totalFunds}
            label="Total Funds Raised"
            prefix="$"
            delay={0.1}
          />
          <StatCard
            icon={Users}
            value={stats.totalDonors}
            label="Active Donors"
            delay={0.2}
          />
          <StatCard
            icon={GraduationCap}
            value={stats.studentsHelped}
            label="Students Funded"
            delay={0.3}
          />
          <StatCard
            icon={Globe}
            value={stats.countries}
            label="Countries Reached"
            delay={0.4}
          />
        </div>

        {/* Progress Visualization */}
        <motion.div
          className="mt-16 glass rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Current Fund Distribution
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Engineering Scholarships</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <motion.div
                  className="bg-web3-gradient h-3 rounded-full"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '65%' }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Medical Studies</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <motion.div
                  className="bg-web3-gradient-3 h-3 rounded-full"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '45%' }}
                  transition={{ duration: 1.5, delay: 1.0 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Arts & Humanities</span>
                <span>30%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <motion.div
                  className="bg-web3-gradient-4 h-3 rounded-full"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '30%' }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-white mb-2">
                <span>General Education</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <motion.div
                  className="bg-web3-gradient-5 h-3 rounded-full"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '80%' }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
