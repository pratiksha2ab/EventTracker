import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import {Button} from 'semantic-ui-react'
import {EventList} from '@/components/organism/eventlist'
import { CityCard } from '@/components/CityCard';
import { CityList } from '@/components/organism/CityList';
import {BlogCard} from '@/components/BlogCard';
import { BlogList } from '@/components/organism/BlogList';
import ImageCard from '@/components/ImageCard';
import { TopEventList } from '@/components/organism/Topevents';
import{RegisterEvent} from '@/components/organism/register';



import { ContactUS } from '@/components/organism/Contact-us';
import { SubmitEvent } from '@/components/organism/submit';
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
     
      
      <CityListContainer>
     <CityList/>
     {/* <EventList/> */}
      </CityListContainer>
      <div style={{background:'#ddd9d9',padding:30}}>
        <BlogList/>
      </div>
      <TopEventList/>
      <ContactUS/>
      
    </div>
  )
}
