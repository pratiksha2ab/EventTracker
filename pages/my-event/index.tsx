import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Label } from "semantic-ui-react";
import styled from "styled-components";
import { API } from "utils/api";
import { AuthContext } from "utils/authcontext";

const MyContainer = styled.div`
  padding: 50px 30px;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1000px){
    grid-template-columns: 1fr 1fr ;  
  }
  @media (max-width: 650px){
    grid-template-columns: 1fr  ;  
  }
  
  gap: 10px;
  width: 100%;
  & .card {
    border: 1px solid;
    padding: 8px;
    margin-bottom: 20px;
    display: flex;
    cursor: pointer;
    & .subCard{
        margin-left: 20px;
    }
  }
`;

const MyEventList = () => {
  const { user } = useContext(AuthContext);
  const [event, setEvent] = useState<any>();
  
  const router = useRouter();
  useEffect(() => {
    if (user?.uid) {
      fetchMyEventList();
    }
  }, [user]);
  const fetchMyEventList = async () => {
    const response: any = await API.get(`/register/${user?.uid}`);

    setEvent(response);
  };
  console.log(event, "-----------------");
  return (
    <MyContainer>
      {event &&
        event?.map((item, id) => (
          <div onClick={()=>router.push(`/details/${item?.eventId}`)} className="card" key={id}>
              <img src={item?.imageUrl || "/dummy.png"} height={120} width={120}/>
              <div className="subCard">

              
            <strong>{item?.eventTitle}</strong>
            <p>{item?.email}</p>
            <Label color="blue">{item?.type}</Label>
            </div>
          </div>
        ))}
    </MyContainer>
  );
};

export default MyEventList;
