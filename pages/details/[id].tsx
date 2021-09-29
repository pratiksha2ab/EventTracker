import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Button, Loader } from "semantic-ui-react";
import { API } from "utils/api";
import { useRouter } from "next/router";

const DetailWrapper = Styled.div`
    margin:0 auto;
    margin:24px;
    margin-top:50px;
    width: 90%;
    padding:24px 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const HeadWrapper = Styled.div`
    padding: 20px;
    h1{
        font-size: 2.5rem;
        text-transform: capitalize;
        font-weight: 800;
        font-family: Jost;
        letter-spacing: 1.2px;
        line-height: 1.2;
    }
    p{
        font-family: Jost;
        font-size: 1.4rem;
        font-weight: 600;
        margin-top: 5px;
        color: #f04700;
        span{
            font-weight: 500;
            margin-left: 7px;
            color: #000;
        }
    }
`;

const BodyWrapper = Styled.div`
   padding: 10px 20px;
   border-bottom: 1px solid lightgray;
`;

const BodyItem = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 18px;
    border-bottom: 1px solid lightgray;
    margin-top: 20px;
     p{
        text-transform: uppercase ;
        font-weight: 600;
        font-family: Jost;  
    }
    span{
        font-weight: 500;
    }
`;

const ButtonContainer = Styled.div`
    padding: 25px 0px 15px 0px;
    display: flex;
    @media(max-width: 800px){
        justify-content: center;
    }
`;

const AboutWrapper = Styled.div`
    p{
        text-align: justify;
        text-justify: inter-word;
        text-align: left;
        font-size: 18px;
        padding: 0px 20px;
        line-height: 1.6;
    }
     border-bottom: 1px solid lightgray;
`;
const LoadingWrapper = Styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`;
const EventDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [detailInfo, setDetailInfo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const getDetailsInformationFromAPI = async () => {
    setLoading(true);
    try {
      const response: any = await API.get(`/event/${id}`);
      console.log("abc", response);
      setDetailInfo(response);
    } catch (error) {}
    setLoading(false);
  };
  useEffect(() => {
    getDetailsInformationFromAPI();
  }, [id]);
  console.log("abccc", detailInfo?.eventType);

  return (
    <DetailWrapper>
      {" "}
      {loading ? (
        <LoadingWrapper>
          <Loader active size="medium" />
        </LoadingWrapper>
      ) : (
        <>
          <HeadWrapper>
            <h1>{detailInfo?.eventTitle}</h1>
            <p>
              {detailInfo?.startDate} to {detailInfo?.endDate}{" "}
              <span>{detailInfo?.Address}</span>
            </p>
          </HeadWrapper>

          <BodyWrapper>
            <BodyItem>
              <p>location:</p>
              <span>{detailInfo?.venueName}</span>
            </BodyItem>
            <BodyItem>
              <p>email:</p>
              <span>{detailInfo?.organizationEmail}</span>
            </BodyItem>
            <BodyItem>
              <p>organization name:</p>
              <span>{detailInfo?.organizationName}</span>
            </BodyItem>
            <ButtonContainer>
              <Button
                onClick={() =>
                  router.push({
                    pathname: "/register-event",
                    query: {
                      type: detailInfo?.eventType,
                      name: detailInfo?.eventTitle,
                      id: detailInfo?.id,
                      image: detailInfo?.Banner,
                    },
                  })
                }
                inverted
                color="orange"
                size="big"
              >
                Join Event{" "}
              </Button>
            </ButtonContainer>
          </BodyWrapper>

          <AboutWrapper>
            <HeadWrapper>
              <h1>ABOUT EVENT</h1>
            </HeadWrapper>
            <p>{detailInfo?.eventSummary}</p>
          </AboutWrapper>
        </>
      )}
    </DetailWrapper>
  );
};

export default EventDetail;
