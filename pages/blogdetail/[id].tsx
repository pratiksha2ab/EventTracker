import React from 'react'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Styled from "styled-components";
import { API } from 'utils/api';
import { ItemDescription } from 'semantic-ui-react';

const HeadWrapper= Styled.div`
    padding: 20px;
    h1{
        font-size: 2.5rem;
        text-transform: capitalize;
        font-weight: 800;
        font-family: Jost;
        letter-spacing: 1.2px;
        line-height: 1.2;
    }
    h2{
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

function BlogDetail() {
    const router=useRouter()
    const {id}=router.query
    const[blogInfo,setblogInfo]=useState<any>();
    const[loading,setLoading]=useState(false);
    const getBlogInformationFromAPI=async()=>{
        setLoading(true)
        try {
            const response:any=await API.get(`/blog/${id}`)
            console.log('abc',response)
            setblogInfo(response)
        } catch (error) {
            
        }
        setLoading(false)
        
    
    }
    useEffect(()=>{
        getBlogInformationFromAPI()
    },[id])
    console.log('abccc',id)

    return (
        <div>
            <HeadWrapper>
                <h1>{blogInfo?.blogTitle}</h1>
                <h2>{blogInfo?.date}   <span>{blogInfo?.writerName}</span></h2>
                <p>{blogInfo?.description} </p>
               
            </HeadWrapper> 


        </div>
    )
}

export default BlogDetail
