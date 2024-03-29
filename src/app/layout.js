import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
const inter = Inter({ subsets: ['latin'] })
import { ActiveSectionContextProvider } from './context/active-section-context'

export const metadata = {
  title: 'Joaquin Gerez | Personal Portfolio',
  description: 'Joaquin Gerez is a full-stack developer with 3 years of experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} 
      bg-grey-50 text-gray-950 relative pt-28 sm:pt-36 `}>

        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]">
        </div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left:[-15rem] 2x1:left-[-5rem]">
        </div>

        <ActiveSectionContextProvider>
        <Header />
        {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
