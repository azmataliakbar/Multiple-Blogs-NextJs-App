// pages/_app.js
import '../styles/globals.css'; // Import global styles (if any)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}