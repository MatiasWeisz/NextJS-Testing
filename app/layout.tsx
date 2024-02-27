import { nunito } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>

      {children}
      <footer className='py-10 flex justify-center items-center'>
        "Footer general de toda la navegacion"
      </footer>
      </body>
    </html>
  );
}
