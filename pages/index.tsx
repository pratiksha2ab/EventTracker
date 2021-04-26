import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import {Button} from 'semantic-ui-react'
const StyledButton=styled(Button)`
background-color:red;
`;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Event Sathi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledButton>Event Sathi</StyledButton>
      <div>We are using semantic ui</div>
    </div>
  )
}
