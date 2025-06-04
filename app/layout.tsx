import type React from "react"
export const metadata = {
  title: "Austin Lee - Data Analyst Portfolio",
  description: "Portfolio website for Austin Lee, Data Analyst",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'