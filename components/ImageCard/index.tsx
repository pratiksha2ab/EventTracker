import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled,{keyframes} from 'styled-components';
import {slideInUp} from 'react-animations'
const SlideUpAnimation = keyframes`${slideInUp}`;
import {useRouter} from 'next/router'

const InfoBox = styled.div`
     position:absolute;
     /* height:90px; */
     width:100%;
     background-color:rgb(0,0,0,75%);
     bottom:0px;
     padding:15px 20px;

   h3{
       color:#fff;
       font-size:18px;
       padding-left:15px;
       
   }
   span{
    color:#fff;
       font-size:20px;

   }
   p{
    color:#fff;
         margin-left:37px;
   }
   @media(max-width: 768px){
       h3{
           font-size:25px;
           
       }
       span{
           font-size:16px;
       }

   }
`;
const ImageCardWrapper = styled.div`
   /* background-image:url(${props => props.image}); */
   /* background-repeat:no-repeat; */
   /* background-size:contain; */
   position:relative;
   max-width:400px;
   width: 100%;
   height:550px;
   cursor: pointer;
   @media (max-width: 768px){
       max-height:400px;
   }
   &:hover ${InfoBox}{
    background-color:rgb(256,256,256,85%); 
    animation:2s ${SlideUpAnimation};
    
    h3{
        color:#250303;  
    }
    span{
        color:#250303;  

   }
   p{
    color:#250303;
   }
   }
  
`;

interface ImageCardProps{
    title?: string;
    id?: string;
    location?:string;
    date?: string;
    image?:string;
}

const ImageCard = (props:ImageCardProps) => {
    const router=useRouter();
    return (
        <ImageCardWrapper image={props.image} onClick={()=>router.push(`/details/${props.id}`)} >
<img src={props.image} height={550} width={400}/>
            <InfoBox>
                <h3>
                    {props.title}
                </h3>
                <Icon size="big" name="point" color="teal" />
                <span>{props.location}</span>
                <p>{props.date}</p>
            </InfoBox>
        </ImageCardWrapper>
    )
}

export default ImageCard
