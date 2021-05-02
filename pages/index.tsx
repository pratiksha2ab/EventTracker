import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import {Button} from 'semantic-ui-react'
import { Header } from '@/components/Header';
import { CityCard } from '@/components/CityCard';
import { CityList } from '@/components/organism/CityList';
import {BlogCard} from '@/components/BlogCard';
import { BlogList } from '@/components/organism/BlogList';
import ImageCard from '@/components/ImageCard';
import { TopEventList } from '@/components/organism/Topevents';
import {Footer} from '@/components/Footer';
import { ContactUS } from '@/components/organism/Contact-us';
const CityListContainer=styled.div`
margin-top:120px;
margin-bottom:100px;
`;


export default function Home() {
  return (
    <div>
      <Head>
        <title>Event Sathi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div><Header/></div>
      <CityListContainer>
     <CityList/>
      </CityListContainer>
      <div style={{background:'#ddd9d9',padding:30}}>
        <BlogList/>
      </div>
      <TopEventList/>
      <ContactUS/>
      <Footer/>
    </div>
  )
}
