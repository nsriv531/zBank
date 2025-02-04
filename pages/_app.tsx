// pages/_app.tsx
import "./globals.css"; // Make sure the path is correct
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}