import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css';
import { Header } from '@/components/Header';
import {Footer} from '@/components/Footer';
import {AuthProvider} from '../utils/authcontext';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router=useRouter()
  return <div> <AuthProvider>{ router.pathname!=="/login" && <Header/>}<Component {...pageProps} /> {  router.pathname!=="/login" &&<Footer/>} </AuthProvider></div> 
}

export default MyApp
