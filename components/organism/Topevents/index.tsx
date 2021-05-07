import ImageCard from '@/components/ImageCard'
import React from 'react';
import styled from 'styled-components';
const EventWrapper = styled.div`
display: grid;
grid-template-columns:1fr 1fr 1fr;
margin: 0 auto;
padding:20px;
gap:20px;
max-width: 1440px;
width:100%;
@media (max-width: 850px){
    grid-template-columns:1fr 1fr;


}
@media (max-width: 550px){
    grid-template-columns:1fr ;


}
 `;
const Container = styled.div`
  
    text-align: center;
     font-size:34px;
      color: #a5011d; 
      padding: 20px;

  
 
 `;

const TopEventList = () => {
    return (

        <div >
            <Container>Upcoming Top Events</Container>
            <EventWrapper >
                {
                    Array.from(Array(6)).map((item, index) =>
                        <ImageCard key={index} image="/2.jpg" title={"Google I/O 2021"} location={"Kathmandu Nepal"}
                            date={"2020-01-02"}
                        />)
                }

            </EventWrapper>
        </div>

    )
}
export { TopEventList }
