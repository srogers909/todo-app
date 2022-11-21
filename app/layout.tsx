import 'bootstrap/dist/css/bootstrap.css'
import './../styles/global.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}