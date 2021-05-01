import React from 'react'
import EventCard from "@/components/EventCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styled from "styled-components";


const ListContainer= Styled.div`
    max-width: 1200px;
    height: 400px;
    width: 100%;
    margin: 0 auto;
`;

const EventList = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    const eventlist=[
        {   
            id: "1",
            image: "/eventImage1.jpg",
            title: "Online Training Event",
            description: "Learn Coding in a different way",
            location: "Kathmandu, Nepal",
            phone: "9849788407",
            date: "29 April 2021",
            
        },
        {   
            id: "2",
            image: "/eventImage2.jpg",
            title: "Online Training Event",
            description: "Learn Coding in a different way",
            location: "Kathmandu, Nepal",
            phone: "9849788407",
            date: "29 April 2021",
            
        },
        {   
            id: "3",
            image: "/eventImage1.jpg",
            title: "Online Training Event",
            description: "Learn Coding in a different way",
            location: "Kathmandu, Nepal",
            phone: "9849788407",
            date: "29 April 2021",
            
        },
        {   
            id: "4",
            image: "/eventImage1.jpg",
            title: "Online Training Event",
            description: "Learn Coding in a different way",
            location: "Kathmandu, Nepal",
            phone: "9849788407",
            date: "29 April 2021",
            
        },
        {   
            id: "5",
            image: "/eventImage2.jpg",
            title: "Online Training Event",
            description: "Learn Coding in a different way",
            location: "Kathmandu, Nepal",
            phone: "9849788407",
            date: "29 April 2021",
            
        },
    ]

    return (
            <ListContainer>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
              //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
               // containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
               // deviceType={this.props.deviceType}
               // dotListClass="custom-dot-list-style"
                //itemClass="carousel-item-padding-40-px"
            >
                {eventlist.map((items, key)=>
                <EventCard
                    id= {items.id}
                    image= {items.image}
                    title= {items.title}
                    description= {items.description}
                    location= {items.location}
                    phone= {items.phone}
                    date= {items.date}
                />
            )}
            </Carousel> 
            </ListContainer>
    )
}

export default EventList;