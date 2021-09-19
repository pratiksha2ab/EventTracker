import React, { useState } from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { Button, Form, Input, TextArea,Message } from 'semantic-ui-react';
import styled from 'styled-components';
import {API} from '../../../utils/api';


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

const ContactUS = () => {
    const [loading, setLoading]=useState(false)
    const[isFormSubmitted, setIsFormSubmitted]=useState(false)
    const validationSchema = yup.object().shape({
        email: yup
          .string()
          .email("Invalid Email")
          .required("Email is required"),

        name:yup.string().required("Full Name is required"),
        message:yup.string().required("Message is required")
        
      });
      const handleSubmit=async()=>{
          setLoading(true)
         try {
             await API.post("/contact",formik.values)
            setIsFormSubmitted(true)
             
         } catch (error) {
             
         }
         setLoading(false)

      }
 const formik=useFormik({
     initialValues:{
         email:"",
         name:"",
         message:"",
      
     },
     validationSchema,
     onSubmit:handleSubmit,

 })
 
    return (
        <Container>
        <FormWrapper>
            
            <h3>Contact Us</h3>
            { isFormSubmitted==false?<Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    
                    <InputForm error={formik.touched.email && formik.errors.email?true:false} size="large" name="email" onBlur={formik.handleBlur} fluid label="Email Address" value={formik.values.email} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.email && formik.errors.email) && <Error>{formik.errors.email}</Error>}
                <Form.Group widths="equal">
                    
                    <InputForm error={formik.touched.name && formik.errors.name?true:false} size="large" name="name" onBlur={formik.handleBlur} fluid label="Full Name" value={formik.values.name} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.name && formik.errors.name) && <Error>{formik.errors.name}</Error>}

                <Form.Group widths="equal">
                    
                    <Form.TextArea error={formik.touched.message && formik.errors.message?true:false} size="large" name="message" onBlur={formik.handleBlur} fluid label="Message" value={formik.values.message} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.message && formik.errors.message) && <Error>{formik.errors.message}</Error>}


<Form.Group>
    <StyledButton loading={loading} htmlType="submit" secondary>Submit</StyledButton>
</Form.Group>
            </Form>:<Message positive>
    <Message.Header>Thank you for contacting us</Message.Header>
    <p>
      Our team will contact you soon.
    </p>
  </Message>}
            
        </FormWrapper>
        </Container>
    )
}

export  {ContactUS}
