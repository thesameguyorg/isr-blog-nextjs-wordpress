import { AppProps } from 'next/app'
import '../styles/index.css'
import AppRouter from '../components/AppRouter'

function MyApp({ Component, pageProps }: AppProps) {
  return <AppRouter />
}

export default MyApp
