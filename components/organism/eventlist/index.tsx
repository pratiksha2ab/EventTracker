import React, { useState,useEffect } from 'react'
import EventCard from "@/components/EventCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styled from "styled-components";
import { API } from 'utils/api';


const ListContainer= Styled.div`
    max-width: 1200px;
    height: 400px;
    width: 100%;
    margin: 0 auto;
`;

const EventList = () => {
    const[eventsList,setEventsList]=useState("");
    const[loading,setLoading]=useState(false);
    const getListInformationFromAPI=async()=>{
        setLoading(true)
        try {
            const response=await API.get("/event")
            setEventsList(response?.data[0])
        } catch (error) {
            
        }
        setLoading(false)
        
    
    }
    useEffect(()=>{
      getListInformationFromAPI()
    },[])
    console.log(eventsList)
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
            eventBanner: "",
             eventName:"",
             eventDescription:"",
             venueName:"",
             address:"",
             organizationName:"",
             email:"",
             date:""
             
            
        }
       
       
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
                    image= {items.eventBanner}
                    title= {items.eventName}
                    description= {items.eventDescription}
                    location= {items.venueName}
                    date= {items.organizationName}
                    phone= {items.date}
                />
            )}
            </Carousel> 
            </ListContainer>
    )
}

export  {EventList};