import React from 'react';
import Styled from "styled-components";
import {Button} from "semantic-ui-react"

const DetailWrapper= Styled.div`
    max-width: 600px;
    width: 100%;
    border: 2px solid black;
`;

const HeadWrapper= Styled.div`
    padding: 20px;
    h1{
        font-size: 2.5rem;
        text-transform: capitalize;
        font-weight: 800;
        font-family: Jost;
        letter-spacing: 1.2px;
        line-height: 1.2;
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
   padding: 10px 20px;
   border-bottom: 1px solid lightgray;
`;

const BodyItem= Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 18px;
    border-bottom: 1px solid lightgray;
    margin-top: 20px;
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
    padding: 25px 0px 15px 0px;
    display: flex;
    @media(max-width: 800px){
        justify-content: center;
    }
`;

const AboutWrapper= Styled.div`
    p{
        text-align: justify;
        text-justify: inter-word;
        text-align: left;
        font-size: 18px;
        padding: 0px 20px;
        line-height: 1.6;
    }
     border-bottom: 1px solid lightgray;
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

            <AboutWrapper>
                <HeadWrapper>
                    <h1>ABOUT EVENT</h1>
                </HeadWrapper>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime suscipit ex nesciunt harum cumque rem assumenda. Nobis quo temporibus esse dolores voluptatem animi eligendi accusamus, odit voluptatum dicta corporis exercitationem. Fugiat numquam inventore, tenetur sunt ipsam molestias excepturi tempora? Error, natus sit. Ipsam explicabo officiis fugit quos esse. Facere, esse mollitia dolorum placeat consequatur doloremque hic enim tenetur vel nemo excepturi fugit id similique quaerat error repudiandae ipsum quam, nesciunt, quo magni corporis nam sunt? Totam quam sit expedita consequuntur debitis consequatur aliquid, corrupti odit nisi reiciendis delectus quia aliquam dignissimos nobis necessitatibus. Eius voluptas laudantium maiores porro iusto molestiae fugit. Delectus deleniti ipsum nihil exercitationem? Minima, dignissimos voluptate repellendus mollitia, ducimus possimus veritatis cumque ab dolores nihil autem temporibus repudiandae necessitatibus dolor voluptatem? Iure numquam voluptates ex explicabo dolores nam! Facilis et doloribus est dolorum, recusandae sint incidunt! Totam exercitationem quia assumenda recusandae quae incidunt quisquam, repellendus impedit?</p>
            </AboutWrapper>
        </DetailWrapper>
    )
}

export default EventDetail
