import React from 'react';
import Styled from "styled-components";
import {Button, Icon, Image} from "semantic-ui-react"
import Link from "next/link";
import router from 'next/router';

const Container= Styled.div`
    background-color: #f4f4f4;
    margin-bottom: 80px;
    border-bottom: 1px solid;
`;
const BGImageContainer= Styled.div`
    min-height: 50.625rem;
    max-height: 50.625rem;
    width: 100%;
    background-image: url('event.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
   // border: 2px solid red;
    opacity: 1;
    @media(max-width: 800px){
        height:550px;
        min-height:auto;
        
    }
`;

const DetailWrapper= Styled.div`
  
    background-color: #fff;
    max-width: 1250px;
    width: 100%;
    margin:0 auto;
    margin-top: -120px;
    
    padding:20px;
  
`;

const HeadWrapper= Styled.div`
    padding: 20px;
    h1{
        font-size: 2.5rem;
        text-transform: capitalize;
        font-weight: 800;
        letter-spacing: 1.2px;
        line-height: 1.2;
        text-decoration: underline;
        
        @media(max-width: 800px){
            font-size: 2rem;
            letter-spacing: 0px;
        }
    }
    p{
        font-size: 1.2rem;
        font-weight: 500;
        margin-top: 5px;
        color: #ff7500;
        span{
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
        text-transform: capitalize ;
        font-weight: bold;
    }
    span{
        font-weight: 500;
        @media(max-width: 320px){
            margin-left: 30px;
        }
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
        padding: 0px 20px 20px 20px;
        line-height: 1.6;
    }
     border-bottom: 1px solid lightgray;
`;
const PhotoWrapper=  Styled.div`
    padding: 0px 20px;
`;

const LocationWrapper= Styled.div`
    border-top: 1px solid lightgrey;
`;

const InfoWrapper= Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    padding: 10px;
    border-bottom: 1px solid lightgrey;
    div{
        margin: 10px;
        display: flex;
        align-items: center;
        border: 2px dotted lightgrey;
        padding: 20px;
        p{
        text-align: justify;
        text-justify: inter-word;
        text-align: left;
        font-size: 16px;
        line-height: 1.6;
        margin-left: 7px;

        }
    }
`;
const EventDetail = () => {
    return (
        <Container>
        <BGImageContainer>
        </BGImageContainer>
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
                   <span><Link href="#">www.event-sathi.com</Link></span>
               </BodyItem>
                <ButtonContainer>
                    <Button  inverted color="orange" size="big">Join Event </Button>
                </ButtonContainer>
            </BodyWrapper>  

            <AboutWrapper>
                <HeadWrapper>
                    <h1>About Event</h1>
                </HeadWrapper>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime suscipit ex nesciunt harum cumque rem assumenda. Nobis quo temporibus esse dolores voluptatem animi eligendi accusamus, odit voluptatum dicta corporis exercitationem. Fugiat numquam inventore, tenetur sunt ipsam molestias excepturi tempora? Error, natus sit. Ipsam explicabo officiis fugit quos esse. Facere, esse mollitia dolorum placeat consequatur doloremque hic enim tenetur vel nemo excepturi fugit id similique quaerat error repudiandae ipsum quam, nesciunt, quo magni corporis nam sunt? Totam quam sit expedita consequuntur debitis consequatur aliquid, corrupti odit nisi reiciendis delectus quia aliquam dignissimos nobis necessitatibus. Eius voluptas laudantium maiores porro iusto molestiae fugit. Delectus deleniti ipsum nihil exercitationem? Minima, dignissimos voluptate repellendus mollitia, ducimus possimus veritatis cumque ab dolores nihil autem temporibus repudiandae necessitatibus dolor voluptatem? Iure numquam voluptates ex explicabo dolores nam! Facilis et doloribus est dolorum, recusandae sint incidunt! Totam exercitationem quia assumenda recusandae quae incidunt quisquam, repellendus impedit?</p>
            </AboutWrapper>
            <PhotoWrapper>
                <HeadWrapper>
                    <h1>Who's Speaking?</h1>
                </HeadWrapper>
                <Image fluid centered src="/speaker.PNG"/>
            </PhotoWrapper>
            <LocationWrapper>
                <HeadWrapper>
                    <h1>Location</h1>
                </HeadWrapper>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.276892118934!2d85.29111324002486!3d27.709031933447857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1620107583211!5m2!1sen!2snp"
                    width= "100%"
                    height="450"
                    frameBorder="0"
                    allowFullScreen={false}
                    style={{ border: 0, padding: '0px 20px'}}
                    aria-hidden="false"
                    tabIndex={0}
                />
                <InfoWrapper>
                    <div>
                        <Icon name="map marker alternate" circular color="grey"/>
                        <p>08 Kageshwori Manahara, Kathmandu, Nepal</p>
                    </div>
                    <div>
                        <Icon name="phone" color="grey"/>
                        <p>+977 XXXXXXXXXX</p>
                    </div>
                    <div>
                        <Icon name="mail" color="grey" />
                        <p>youremail@email.com</p>
                    </div>
                    <div>
                        <Icon name="globe" color="grey"/>
                        <p>www.website.com</p>
                    </div>
                </InfoWrapper>
            </LocationWrapper>

            <PhotoWrapper>
                <HeadWrapper>
                    <h1>Our Sponsors</h1>
                </HeadWrapper>
                <Image fluid centered src="/sponsor.PNG"/>
            </PhotoWrapper>
        </DetailWrapper>

        </Container>
    )
}

export default EventDetail
