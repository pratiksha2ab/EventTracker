import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react'
import { SearchBox } from '../Search';
import { AuthContext } from 'utils/authcontext';
import { firebase } from 'utils/firebase';
import router from 'next/router';

const HeaderWrapper = styled.div`
height:800px;
   background-image:url("/mountain.png");
   background-repeat:no-repeat;
   background-size:cover;
padding:0px 80px;
@media (max-width: 850px){
    height:800px;
    padding:0px 30px;

}
 & .usermail{
     color:#fff;
 }
 & span{
     color:#19b2ff;
     font-weight:500;
     padding-left:8px;
     cursor:pointer;
 }
   
`;
const Container = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
`;
const MenuWrapper = styled.div`
max-width:800px;
width:100%;
display:flex;
justify-content:flex-end;
    align-items: center;
    @media (max-width: 850px){
        display:none;

    }


`;
const StyledLink = styled.a`
   font-size:24px ;
   cursor:pointer;
   padding:0px 30px;
   color:#fff;
   :hover{
    color: #fff;
    
}
@media (max-width: 850px){
    color:#05052e;
}
`;
const StyledIcon = styled.div`
cursor: pointer;
@media (min-width: 850px){
    display:none;
}
`;
const SearchContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:500px;
margin-top:50px;
`;


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const {user,setUser}= useContext(AuthContext)

    const headerMenu = [
        { link: "/", title: "Home" },
        { link: "/blogdetail", title: "Blog" },
        { link: "/submit", title: "Submit Event" },
        

    ]
    const [showWide, setShowWide] = useState(true);
    useEffect(() => {
        window.addEventListener('resize', navbarUpdate)
    }, [])

    const navbarUpdate = () => {
        // console.log(window.innerWidth)
        if (window.innerWidth < 350) {
            setShowWide(true)
        } else {
            setShowMenu(false)
            setShowWide(false)
        }
    }
    return (
        <HeaderWrapper>
            <Container>
                <div>
                    <Link href="/" passHref>
                        <img src="/eventlogo.png" height={100} width={250} />
                    </Link>
                </div>
                <MenuWrapper>
                    {
                        headerMenu.map((item, index) => <Link key={`event-sathi-${index}`} href={item.link}>
                            <StyledLink>{item.title}</StyledLink>
                        </Link>)
                    }
                   { user?<div><strong className={"usermail"}>{user?.email}</strong> <span onClick={()=>{firebase.auth().signOut();setUser(null);router.push("/")}}>Logout</span></div>: <Button onClick={()=>{router.push("/login")}} inverted color="green">Login</Button>}
                </MenuWrapper>
                <StyledIcon>
                    <Icon onClick={() => setShowMenu(!showMenu)} size="large" color="green" name="list ul" />
                </StyledIcon>
            </Container>
            <SearchContainer>
                <SearchBox />
            </SearchContainer>
            <Sidebar onHide={() => setShowMenu(false)} as={Menu} animation="overlay" visible={showMenu} width={showWide ? "thin" : "wide"} vertical direction="left">

                {
                    headerMenu.map((item, index) => <Menu.Item key={`event-sathi-${index}`}>
                        <Link href={item.link}>
                            <StyledLink>{item.title}</StyledLink>
                        </Link></Menu.Item>)
                }


            </Sidebar>
        </HeaderWrapper>
    )
}

export { Header };
