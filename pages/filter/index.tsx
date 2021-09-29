import ImageCard from "@/components/ImageCard";
import { useState, useEffect } from "react";
import { API } from "utils/api";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Message } from "semantic-ui-react";
const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  max-width: 1440px;
  width: 100%;
  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const Container = styled.div`
  text-align: center;
  font-size: 34px;
  color: #a5011d;
  padding: 20px;
`;

const FilterEventList = () => {
  const [eventsList, setEventsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getListInformationFromAPI = async () => {
    setLoading(true);
    try {
      if (router.query.type) {
        const response: any = await API.get("/list", {
          params: {
            type: router.query.type,
          },
        });
        console.log("abc", response);
        setEventsList(response);
      } else {
        const response: any = await API.get("/list", {
          params: {
            address: router.query.address,
          },
        });
        console.log("abc", response);
        setEventsList(response);
      }
    } catch (error) {}
    setLoading(false);
  };
  useEffect(() => {
    getListInformationFromAPI();
  }, [router.query.type,router.query.address]);

  return (
    <div>
      <Container>Events of your choice</Container>
      <EventWrapper>
        {eventsList?.map((item, index) => (
          <ImageCard
            key={index}
            image={item?.Banner}
            title={item?.eventTitle}
            location={item?.Address}
            date={`${item?.startDate} to ${item?.endDate}`}
            id={item?.id}
          />
        ))}
      </EventWrapper>
      {
          
          eventsList.length==0 &&
           <Message
           style={{ maxWidth:"500px",margin:"0 auto"}}
          icon='inbox'
          header='Event Not found for now'
          content='Tune us for upcoming event'
        />
      }
    </div>
  );
};
export default FilterEventList ;
