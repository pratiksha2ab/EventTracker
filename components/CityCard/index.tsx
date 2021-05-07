import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { slideInUp } from 'react-animations';
import { useRouter } from "next/router";

interface CityCardProps {
    image?: string;
    link?: string;
    name?: string;
    height?: number;

}

const SlideUpAnimation = keyframes`${slideInUp}`
const DiscoverBox = styled(Card.Content)`
height:100%;

display:none;
animation:1s ${SlideUpAnimation};
`;


const StyledExtra = styled(Card.Content)`
    background:#575757 !important;
    


`;
const CityBox = styled.h2`
color:#ffffff;
`;


const StyledCard = styled(Card)`
    width:100% !important;
    height:${(porps: any) => `${porps.height}px` || '300px'};
   @media (max-width: 850px){
       height:250px;
   }

    
`;
const StyledButton = styled(Button)`
width:100%;
height:100%;
margin:0px !important;
margin-top:-1px;
font-size:18px !important;
@media (max-width: 400px){
    margin-left:0px;
}

`;
const StyledImage = styled(Image)`
&:hover  ~${DiscoverBox}{
    box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    min-height:40px !important;
    display:flex;
    padding:0px;
    justify-content: space-between;
    align-items: center;

    background:white !important;
   
}
&:hover ~${StyledExtra}{  
    display:none;
}
&:hover ~${CityBox}{
    color:#575757;
}
`;

const CityCard = ({ image, link, name, height }: CityCardProps) => {
    const router = useRouter();
    return (
        <StyledCard href="/" height={height} raised={true}>
            <StyledImage src={image} height={'100%'} width={'100%'} />
            <StyledExtra extra >
                <CityBox>{name}</CityBox>
            </StyledExtra>
            <DiscoverBox>
                <StyledButton onClick={() => router.push(link)} color="orange">
                    Discover Now
            </StyledButton>
            </DiscoverBox>
        </StyledCard>
    )
}

export { CityCard }
