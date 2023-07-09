import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './provider/theme-provider'
import { Metadata } from 'next'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata  = {
  title: 'Punkies y Cerebro',
  description: 'Banda de Punk Rock de la ciudad de Medellín',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body>
      <ThemeProvider>
       { children }
      </ThemeProvider>
      </body>
    </html>
  )
}
