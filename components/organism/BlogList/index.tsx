import { BlogCard } from '@/components/BlogCard';
import React from 'react';
import styled from 'styled-components';
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
    const blogList = [{ image: "/mountain.png", date: "2017-01-01", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", title: "Next js" },
    { image: "/mountain.png", date: "2017-01-01", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", title: "Next js" },
    { image: "/mountain.png", date: "2017-01-01", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", title: "Next js" }]
    return (
        <>
        <TitleBox>Read Our Blogs</TitleBox>
        <ListContainer>
            
            {
                blogList.map((item, index) => <BlogCard key={`blog-${index}`} image={item.image} date={item.date} title={item.title} description={item.description} />)
            }

        </ListContainer>
        </>
    )
}

export { BlogList }
