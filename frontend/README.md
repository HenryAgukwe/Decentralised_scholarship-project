# Decentralized Scholarship Fund - Frontend

A beautiful, modern frontend for the Decentralized Scholarship Fund built with Next.js 14, TypeScript, and TailwindCSS featuring stunning web3 gradients and animations.

## 🌟 Features

- **Modern Design**: Beautiful UI with web3-inspired gradients and glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Wallet Integration**: Ready for Stacks wallet integration
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized with Next.js 14 and the App Router

## 🎨 Design Elements

- **Web3 Gradients**: 8 different gradient combinations for various UI elements
- **Glassmorphism**: Frosted glass effects for cards and overlays
- **Animations**: Floating elements, gradient animations, and smooth transitions
- **Icons**: Lucide React icons for consistent iconography
- **Typography**: Clean, modern typography with gradient text effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
frontend/
├── app/
│   ├── components/
│   │   ├── Header.tsx              # Navigation header with wallet connection
│   │   ├── Hero.tsx                # Landing section with CTAs
│   │   ├── StatsSection.tsx        # Statistics and progress visualization
│   │   ├── DonationSection.tsx     # Donation form and impact visualization
│   │   ├── ApplicationSection.tsx  # Scholarship application form
│   │   ├── Footer.tsx             # Footer with links and newsletter
│   │   └── BackgroundAnimation.tsx # Animated background elements
│   ├── globals.css                # Global styles and custom CSS
│   ├── layout.tsx                 # Root layout component
│   └── page.tsx                   # Main page component
├── public/                        # Static assets
├── package.json                   # Dependencies and scripts
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── next.config.js                # Next.js configuration
```

## 🎨 Color Palette & Gradients

The application uses a carefully crafted set of web3-inspired gradients:

- **Primary**: Purple to Blue (`#667eea` to `#764ba2`)
- **Secondary**: Pink to Red (`#f093fb` to `#f5576c`)
- **Accent 1**: Blue to Cyan (`#4facfe` to `#00f2fe`)
- **Accent 2**: Green to Cyan (`#43e97b` to `#38f9d7`)
- **And more beautiful combinations...

## 🔧 Configuration

### Tailwind CSS
The `tailwind.config.js` includes custom:
- Gradient backgrounds
- Animations (float, gradient movements)
- Glass morphism utilities
- Extended color palette

### Components
All components are built with:
- TypeScript for type safety
- Framer Motion for animations
- Responsive design patterns
- Accessibility considerations

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔗 Integration

This frontend is designed to integrate with:
- Stacks blockchain for wallet connectivity
- The Clarity smart contract for scholarship management
- IPFS for decentralized storage (future enhancement)

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🎯 Performance Features

- Next.js 14 App Router for optimal performance
- Image optimization
- Code splitting
- SEO optimization
- Progressive Web App ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
