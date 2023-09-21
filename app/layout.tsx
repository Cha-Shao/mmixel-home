import { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import classNames from 'classnames'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '映素团队',
  description: '映素,MMixel,ysm,yes steve model',
}

const misans = localFont({
  src: [{
    path: '../fonts/MiSans-Thin.ttf',
    weight: '100',
    style: 'thin',
  }, {
    path: '../fonts/MiSans-Normal.ttf',
    weight: '300',
    style: 'normal',
  }, {
    path: '../fonts/MiSans-Medium.ttf',
    weight: '500',
    style: 'medium',
  }, {
    path: '../fonts/MiSans-Bold.ttf',
    weight: '700',
    style: 'bold',
  }, {
    path: '../fonts/MiSans-Heavy.ttf',
    weight: '900',
    style: 'heavy',
  }]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(misans.className)}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
