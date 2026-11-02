import './globals.css'

export const metadata = {
  title: 'DRDA Vizianagaram District – Citizen Services Portal',
  description: 'Empowering Rural Communities Through Information, Transparency, and Digital Services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
