import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import EventList from "@/components/organism/eventlist";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Event Sathi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    {/* <EventList/> */}
    <Footer/>
    </div>
  )
}
