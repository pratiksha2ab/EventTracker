import { BlogCard } from '@/components/BlogCard';
import { useState,useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import { API } from 'utils/api';
import { useRouter } from 'next/router';
const ListContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
max-width:1100px;
gap:10px;
margin:0 auto;
@media (max-width: 650px){
    grid-template-columns: 1fr;
    gap:20px;


}

`;
const TitleBox = styled.div`
text-align:center;
font-size:45px;
margin-bottom:30px;
font-weight:bold;
margin-top:10px;
color: rgba(207,67,40,1);
@media (max-width: 850px){
    font-size:28px;
}
`;
const BlogList = () => {
    const[blogsList,setBlogsList]=useState([]);
    const[loading,setLoading]=useState(false);
    const router=useRouter()
    const getBlogListInformationFromAPI=async()=>{
        setLoading(true)
        try {
            const response:any=await API.get("/blog")
            console.log('abc',response)
            setBlogsList(response)
        } catch (error) {
            
        }
        setLoading(false)
        
    
    }
    useEffect(()=>{
        getBlogListInformationFromAPI()
    },[])


   
    return (
        <>
        <TitleBox>Read Our Blogs</TitleBox>
        <ListContainer>
            
            {
                blogsList.map((item, index) => <BlogCard onClick={()=>{router.push(`/blogdetail/${item.id}`)}} key={`blog-${index}`} image={item.image||"/mountain.png"} date={item?.date} title={item?.blogTitle} description={item.description}   />)
            }

        </ListContainer>
        </>
    )
}

export { BlogList }
