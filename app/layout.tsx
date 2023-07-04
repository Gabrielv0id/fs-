import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Financial',
  description: 'Helps to improve your finances and use your money ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
