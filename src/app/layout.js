import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quotimizer',
  description: 'Your quote generating app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-lemon min-h-screen bg-slate-300 heropattern-boxes-slate-200">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
