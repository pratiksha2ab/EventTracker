import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import { Input, Dropdown, Button, Icon } from 'semantic-ui-react';
import { useRouter } from "next/router"
import { bounce } from 'react-animations'

const bounceAnimation = keyframes`${bounce}`

const SearchContainer = styled.div`
max-width:1500px;
width:100%;
display:flex;
   align-items:center;
   flex-direction:column;
`;
const StyleSearchWrapper = styled.div`
  height:80px;
   background-color:#fff;
   max-width: 1500px;
   width: 100%;
   display:flex;
   align-items:center;
   justify-content: space-around;
   padding:0px 20px;
   border-radius:8px;
   @media (max-width: 850px){
       flex-direction:column;
       margin-top:100px;
       height:400px;
       max-width:400px;
   }
`;
const StyledDatePicker = styled(DatePicker)`
    max-width:350px;
    width: 100%;
    font-size:18px;
    height:60px;
    
    .react-date-picker__wrapper{
        border-radius:8px;
    }
    
`;
const StyledInput = styled(Input)`
    height:50px;
    max-width:350px;
    margin:0px 8px;
    width: 100%;
    font-size:18px;
    height:60px;
    border:1px solid gray;
    border-radius:8px;
`;
const StyledDropdown = styled(Dropdown)`
    max-width:350px;
    margin:0px 8px;
    width: 100%;
    font-size:18px;
    height:60px;
    border:1px solid gray !important;
    border-radius:8px;`;

const StyeldSearchButton = styled(Button)`
max-width:250px;
    width: 100%;
    font-size:25px;
    height:60px;
    border:1px solid gray;
    font-size:18px;
    font-weight:bold;
     background-color: #1d1010;  
`;
const StyledMessage = styled.div`
margin-top:50px;
font-size:32px;
color:#fff;
text-align:center;
@media (max-width: 850px){
    font-size:16px;
    margin-top:10px;
    margin-bottom:10px;
}
`;

const IconContainer = styled.div`
display: flex;
flex-direction: column;
align-items:center;
cursor: pointer;
strong{
    color:#fff;
    padding-top:10px;
    font-size:18px;
    @media (max-width: 850px){
        font-size:14px;
        font-weight:400;
    }
}
img:hover{
    animation:2s ${bounceAnimation};

}

`;
const Iconbox = styled.div`
margin-top:80px;
width:100%;
display:flex;
justify-content:space-evenly;
@media (max-width: 850px){
    margin-top:10px;

    img{
        width:50px;
        height:50px;
        
        }
}
@media(max-width: 450px){
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:8px;
}

`;
const SearchBox = () => {
    const [search, setSearch] = useState({ date: "", location: "", catagories: "" });
    const quickSearch = [
        { icon: '/it.svg', link: "te", alt: "information and technology events", label: "IT Events" },
        { icon: '/music.svg', link: "mu", alt: "musical and entertainment events", label: "Muscial Events" },
        { icon: '/edu.svg', link: "edu", alt: "Educational events", label: "Educational Events" },
        { icon: '/food.svg', link: "fo", alt: "Food Events", label: "Foods Events" },
    ]
    const categoriesOption = [
        { key: 1, value: "It", text: "IT and Technology" },
        { key: 2, value: "food", text: "Food" },
        { key: 3, value: "music", text: "Entertainment" },

    ]
    const router = useRouter();
    return (
        <SearchContainer>
            {/* <StyleSearchWrapper>
                <StyledDatePicker value={search.date} onChange={e => setSearch({ ...search, date: e })} monthAriaLabel="date" monthPlaceholder="month" yearPlaceholder="year" dayPlaceholder="day" label="Select Date From" />
                <StyledInput value={search.location} onChange={e => setSearch({ ...search, location: e.target.value })} placeholder="Enter Location" />
                <StyledDropdown fluid selection placeholder="All Categories" options={categoriesOption} />
                <StyeldSearchButton size="large" inverted color="orange" icon>
                    <Icon name="search" />   Discover Now

                </StyeldSearchButton>
            </StyleSearchWrapper> */}
            <StyledMessage>Quick Search By Categories</StyledMessage>
            <Iconbox>
                {
                    quickSearch.map((item, index) => <IconContainer onClick={() => router.push({
                       pathname: `/filter`,
                       query:{
                           type:item.link
                       }
                    })}><img key={`events-icons-${index}`} src={item.icon} alt={item.alt} height={80} width={80} /><strong>{item.label}</strong></IconContainer>)
                }
            </Iconbox>
        </SearchContainer>

    )
}

export { SearchBox };
