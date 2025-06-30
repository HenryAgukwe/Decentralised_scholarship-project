'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import DonationSection from './components/DonationSection'
import ApplicationSection from './components/ApplicationSection'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'

export default function Home() {
  const [isConnected, setIsConnected] = useState(false)
  const [userAddress, setUserAddress] = useState('')

  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation />
      
      <div className="relative z-10">
        <Header 
          isConnected={isConnected}
          userAddress={userAddress}
          setIsConnected={setIsConnected}
          setUserAddress={setUserAddress}
        />
        
        <Hero />
        
        <StatsSection />
        
        <div className="container mx-auto px-4 py-16 space-y-16">
          <DonationSection isConnected={isConnected} />
          
          <ApplicationSection isConnected={isConnected} />
        </div>
        
        <Footer />
      </div>
    </main>
  )
}
