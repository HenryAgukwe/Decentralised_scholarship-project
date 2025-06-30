'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wallet, Menu, X, GraduationCap } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface HeaderProps {
  isConnected: boolean
  userAddress: string
  setIsConnected: (connected: boolean) => void
  setUserAddress: (address: string) => void
}

export default function Header({ isConnected, userAddress, setIsConnected, setUserAddress }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const connectWallet = async () => {
    try {
      // Mock wallet connection for demonstration
      // In a real app, you'd integrate with Stacks Connect here
      setIsConnected(true)
      setUserAddress('SP1K1A1PMGW2ZJCNF46NWZWHG8TS1D23FGH0S7H6T')
      toast.success('Wallet connected successfully!')
    } catch (error) {
      toast.error('Failed to connect wallet')
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setUserAddress('')
    toast.success('Wallet disconnected')
  }

  return (
    <header className="relative z-50">
      <nav className="glass rounded-2xl mx-4 my-4 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-web3-gradient rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">
              ScholarFund
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#home" 
              className="text-white/80 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#donate" 
              className="text-white/80 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate
            </motion.a>
            <motion.a 
              href="#apply" 
              className="text-white/80 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-white/80 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
          </div>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            {!isConnected ? (
              <motion.button
                onClick={connectWallet}
                className="flex items-center space-x-2 bg-web3-gradient px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </motion.button>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="glass-dark px-4 py-2 rounded-lg">
                  <span className="text-sm text-white/80">
                    {userAddress.slice(0, 6)}...{userAddress.slice(-4)}
                  </span>
                </div>
                <motion.button
                  onClick={disconnectWallet}
                  className="text-white/60 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pt-4 border-t border-white/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300">
                Home
              </a>
              <a href="#donate" className="text-white/80 hover:text-white transition-colors duration-300">
                Donate
              </a>
              <a href="#apply" className="text-white/80 hover:text-white transition-colors duration-300">
                Apply
              </a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">
                About
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
