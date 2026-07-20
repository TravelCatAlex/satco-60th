import './globals.css';

export const metadata = {
  title: 'Satco 60th Anniversary',
  description: 'Celebrating 60 years of lighting innovation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
