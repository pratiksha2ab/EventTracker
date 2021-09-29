import React, { useContext, useState } from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { Button, Form, Input, TextArea,Message } from 'semantic-ui-react';
import styled from 'styled-components';
import {API} from '../../../utils/api';
import router from 'next/router';
import { AuthContext } from 'utils/authcontext';


const Container = styled.div`
background-color:#ebfdfb;
`;
const FormWrapper=styled.div`
 max-width:1200px;
 width:100%;
 margin:0 auto;
 padding:40px;
 margin-top:150px;
 
 /* & .ui.form .fields{
     flex-direction:column !important;
 } */
 h3{
     text-align:center;
     padding:30px 0px;
     font-size:28px;
 }
`;
const Error=styled.div`
color:#f80808;
margin-left:6px;
margin-bottom:15px;
`;
const InputForm=styled(Form.Input)`
display:block;
`;
const StyledButton=styled(Button)`
margin-left:12px !important;
`;
interface EventProps{
     name?:any;
     id?:any;
     imageUrl?:any;
     type?:any;
}
const RegisterEvent = ({name,id,imageUrl,type}:EventProps) => {
    const [loading, setLoading]=useState(false)
    const[isFormSubmitted, setIsFormSubmitted]=useState(false);
    const {user}=useContext(AuthContext);
    const validationSchema = yup.object().shape({
        fullname:yup.string().required("Full Name is required"),
        phone:yup.string().required("phone number is required"),
        email: yup
          .string()
          .email("Invalid Email")
          .required("Email is required"),

        
        
      });
      const handleSubmit=async()=>{
          setLoading(true)
         try {
             await API.post("/register",formik.values)
            setIsFormSubmitted(true)
            // router.reload()
             
         } catch (error) {
             
         }
         setLoading(false)

      }
 const formik=useFormik({
     initialValues:{
         fullname:"",
         phone:"",
         email:"",
         userId:user?.uid,
         eventId:id,
         eventTitle:name,
         imageUrl:imageUrl,
         type:type
         
      
     },
     validationSchema,
     onSubmit:handleSubmit,

 })
 
    return (
        <Container>
        <FormWrapper>
            
            <h3>Register for Event</h3>
            { isFormSubmitted==false?<Form onSubmit={formik.handleSubmit}>
                
                <Form.Group widths="equal">
                    
                    <InputForm error={formik.touched.fullname && formik.errors.fullname?true:false} size="large" name="fullname" onBlur={formik.handleBlur} fluid label="Full Name" value={formik.values.fullname} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.fullname && formik.errors.fullname) && <Error>{formik.errors.fullname}</Error>}

                <Form.Group widths="equal">
                    
                    <InputForm error={formik.touched.phone && formik.errors.phone?true:false} size="large" name="phone" onBlur={formik.handleBlur} fluid label="Phone" value={formik.values.phone} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.phone && formik.errors.phone) && <Error>{formik.errors.phone}</Error>}

                <Form.Group widths="equal">
                    
                    <InputForm error={formik.touched.email && formik.errors.email?true:false} size="large" name="email" onBlur={formik.handleBlur} fluid label="Email Address" value={formik.values.email} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.email && formik.errors.email) && <Error>{formik.errors.email}</Error>}


<Form.Group>
    <StyledButton  loading={loading} htmlType="submit" secondary>Submit</StyledButton>
</Form.Group>
            </Form>:<Message positive>
    <Message.Header>Thank you for submitting </Message.Header>
    <p>
      Our team will contact you soon.
    </p>
  </Message>}
            
        </FormWrapper>
     
        </Container>
         
    )
}

export  {RegisterEvent}