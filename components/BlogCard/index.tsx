import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';


const CardContainer = styled.div`

width:100%;
display:flex;
justify-content:center;
& .content{
    background-color:#f0f0f0 !important;
}

`;

const StyledCard = styled(Card)`
  max-width: 350px !important;
  width: 100% !important;
 min-height:350px;
 & .header{
     font-size:24px;
 }
 & .description{
     font-size:18px;
     color:#020418 !important;
 }
  
`;
interface BlogProps {
    href?: string;
    image?: string;
    id?: string;
    date?: string;
    description?: string;
    title?: string;

}
const BlogCard = (props: BlogProps) => {
    return (
        <CardContainer>
            <StyledCard
                fluid
                href={"https://github.com"}
                image={props.image}
                header={props.title}
                meta={props.date}
                description={props.description} />
        </CardContainer>
    )
}

export  {BlogCard}
