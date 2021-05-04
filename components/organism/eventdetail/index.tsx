import React from 'react';
import Styled from "styled-components";
import {Button} from "semantic-ui-react"

const DetailWrapper= Styled.div`
    max-width: 600px;
    width: 100%;
   // border: 2px solid black;
    padding: 20px;
`;

const HeadWrapper= Styled.div`
    padding: 0px 20px;
    h1{
        font-size: 2.6rem;
        text-transform: capitalize;
        font-weight: 800;
        font-family: Jost;
        letter-spacing: 1.2px;
    }
    p{
        font-family: Jost;
        font-size: 1.4rem;
        font-weight: 600;
        margin-top: 5px;
        color: #f04700;
        span{
            font-weight: 500;
            margin-left: 7px;
            color: #000;
        }
    }
`;

const BodyWrapper= Styled.div`
   padding: 20px;
`;

const BodyItem= Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 18px;
    border-bottom: 1px solid lightgray;
    margin-top: 25px;
     p{
        text-transform: uppercase ;
        font-weight: 600;
        font-family: Jost;
        
    }
    span{
        font-weight: 500;
    }
`;

const ButtonContainer= Styled.div`
    padding: 25px 0px;
    display: flex;
    @media(max-width: 800px){
        justify-content: center;
    }
`;

const EventDetail = () => {
    return (
        <DetailWrapper>
            <HeadWrapper>
                <h1>the paradise beach hotel</h1>
                <p>02-05 April 2020 <span>Kathmandu</span></p>
            </HeadWrapper> 

            <BodyWrapper>
               <BodyItem>
                   <p>location:</p>
                   <span>New Baneshwor, Kathmandu</span>
               </BodyItem>
               <BodyItem>
                   <p>phone:</p>
                   <span>+977 9849788407</span>
               </BodyItem>
               <BodyItem>
                   <p>website:</p>
                   <span>www.event-sathi.com</span>
               </BodyItem>
                <ButtonContainer>
                    <Button inverted color="orange" size="big">Join Event</Button>
                </ButtonContainer>
                
            </BodyWrapper>     
        </DetailWrapper>
    )
}

export default EventDetail
