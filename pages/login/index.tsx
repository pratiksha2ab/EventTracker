import React, { useContext, useEffect, useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { firebase } from 'utils/firebase';
import {AuthContext} from 'utils/authcontext'
import Link from 'next/link';

const StyledButton=styled(Button)`
width: 184px;
height: 42px;
background-color:blue;

border-radius: 2px;
box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
`;

const StyledWrapper=styled.div`
height:fit-content;
max-width:300px;
padding:50px 24px;
display:flex;
justify-content:center;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
flex-direction:column;
`;


function Login() {
    const router=useRouter();
    const {user}=useContext(AuthContext);

    useEffect(()=>{
        if(user){
            router.push("/")
        }
    },[user])

    const handleAuthSuccess=()=>{
        router.push("/")
    }

    const snsLoginHandler = async () => {
      let provider: firebase.auth.AuthProvider;
     
          provider = new firebase.auth.GoogleAuthProvider();
      
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
            handleAuthSuccess();
          })
          
       
    };

    
   

    return (
        <div  style={{
            display:"flex",
            width:"100%",
            justifyContent:"center",
            height:"70vh",
            alignItems:"center"
            // marginTop:"120px"
        }}> 
            <StyledWrapper >
                <h2>Login</h2>
        <StyledButton  onClick={snsLoginHandler}   secondary > <Icon name="google"/> Login With Google</StyledButton>
        </StyledWrapper>
        </div>
       
    )
}

export default Login
