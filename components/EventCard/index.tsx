import React from 'react';
import styled from "styled-components";
import {Card, Image, Icon}  from 'semantic-ui-react';

const StyledContainer = styled.div`
    width: 350px;

    & .header{
    font-size: 28px !important;
    line-height: 1.2 !important;
    color: #2F2F2F;
    font-family: Jost !important;
    font-Weight: 700 !important;
    text-transform: capitalize;
    }

`;
const Description= styled.p`
    color: #666666;
    font-family: Roboto;
    font-size: 1.2rem;
    line-height: 1.625;
    padding: 5px 0px;

`;
const StyledInfo= styled.div`
    display: flex;
    margin-bottom: 15px;
    p{
        padding-left: 8px;
    }
`;

interface CardProps{
    image?: string;
    title?: string;
    description?: string;
    location?: string;
    phone?: string;
    date?: string;
    id?: string;
}
const EventCard = (props: CardProps) => {
    return (
        <StyledContainer>
            <Card
                fluid
                header={props.title}
                image= {props.image}
                description= {
                    <>
                    <Description>{props.description}</Description>

                    <StyledInfo>
                       <Icon name= "map marker alternate"/>
                       <p>{props.location}</p>
                   </StyledInfo>

                   <StyledInfo>
                       <Icon name= "phone"/>
                       <p>{props.phone}</p>
                   </StyledInfo>

                   <StyledInfo>
                       <Icon name="calendar alternate" />
                       <p>{props.date}</p>
                   </StyledInfo>

                   </>
                }
                href={'/'}

            />
        </StyledContainer>
    )
}

export default EventCard