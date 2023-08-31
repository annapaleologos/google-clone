import './globals.css'
import Footer from '@/components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
      {children}
      {/* {Footer} */}
      <Footer />
      </body>
    </html>
  )
}
