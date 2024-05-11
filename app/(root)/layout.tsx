import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import { Stream } from 'stream'

export const metadata: Metadata = {
  title: "Doom",
  description: "Video Calling app",
  icons: {
    icon: "/icons/logo.png",
  }
};

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
      {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
