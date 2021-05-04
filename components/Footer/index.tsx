import React from 'react';
import Styled from "styled-components";
import Link from "next/link";
import { Icon, Button, Image} from "semantic-ui-react";


const FooterContainer= Styled.div`
 //   height: 500px;
    background-color: #171717;
    color: #fff;

`;
const TopContainer= Styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        font-family: Jost;
        font-weight: 600;
        padding: 10px;
        letter-spacing: 1.3px;
    }
    border-bottom: 1px solid #545454;
`;
const StyledButton= Styled(Button)`

`;

const BottomContainer= Styled.div`
   /* display: grid;
   grid-template-columns: 1fr 1fr 1fr; */
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
   padding: 15px;
`;
const ImageContainer= Styled.div`
    max-width: 300px; 
    //flex: 0 1 350px;
    margin: 20px;
    p{
        text-align: left;
        margin-top: 1.875rem;
        font-size: 18px;
        color: #fff;
        line-height: 1.5;
        
    }
`;
const StyledUsefulLinks= Styled.div`
    flex: 0 1 300px;
    width: 100%;
    margin: 20px;
    display: flex;
    flex-flow: column;
    text-align: center;
    a{  
        text-decoration: none;
        color: #fff;
        pointer: cursor;
        padding: 10px;
        font-size: 18px;
    }
    @media(max-width: 768px){
        display: none;
    }
`;

const StyledTrending= Styled.div`
    flex: 0 1 300px;
    width: 100%;
    margin: 20px;
    display: flex;
    flex-flow: column;
    text-align: center;
    a{  
        text-decoration: none;
        color: #fff;
        pointer: cursor;
        padding: 10px;
        font-size: 18px;
    }

`;

const SocialIconsWrapper= Styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Footer = ()=>{
    return(
        <FooterContainer>
            <TopContainer>
                <div>
                    <Icon 
                    name="phone"
                    color="green"
                    circular
                    size="large"
                    />
                    <p>Free support: <span>+977 9849788407</span></p>
                </div>
                <div>
                    <Icon name="mail"
                    color="green"
                    circular
                    size="large"
                    />
                    <p>Email: <span>example@email.com</span></p>
                </div>
                <div>
                    <StyledButton
                    size= "big"
                    color= "green"
                    >About Us</StyledButton>
                </div>
            </TopContainer>

            <BottomContainer>
                <ImageContainer>
                    <Image 
                        fluid
                        src='/eventImage2.jpg' 
                        as= 'img'
                        href="/"
                        size= "small"
                    />
                    <p>
                    Lorem ipsum dolor sit amet, conse ctetuers adipiscing eli sed diam nonum nibhieLorem ipsum dolor sit amet, conse ctetuers adipiscing eli sed diam nonum nibhie……
                    </p>
                    <SocialIconsWrapper>
                         <Icon name="facebook f" size="large" color="grey"/>
                         <Icon name="twitter" size="large" color="grey"/>
                         <Icon name="google plus g" size="large" color="grey"/>
                         <Icon name="linkedin" size="large" color="grey"/>
                    </SocialIconsWrapper>
                </ImageContainer>
                <StyledUsefulLinks>
                    <h1>Useful Links</h1>
                    <Link href="#"><a>About</a></Link>
                    <Link href="#"><a>Our Story</a></Link> 
                    <Link href="#"><a>Professional Team</a></Link>
                    <Link href="#"><a>Services</a></Link> 
                    <Link href="#"><a>Testimonials</a></Link>
                </StyledUsefulLinks>
                <StyledTrending>
                    <h1>Trending Category</h1>
                    <Link href="#"><a>Exposition</a></Link> 
                    <Link href="#"><a>Workshop</a></Link> 
                    <Link href="#"><a>Webinars</a></Link> 
                    <Link href="#"><a>Interactive Performances</a></Link> 
                    <Link href="#"><a>Conference</a></Link>
                </StyledTrending>
            </BottomContainer>
            
        </FooterContainer>
    )
}

export default Footer;