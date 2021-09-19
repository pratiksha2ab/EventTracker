import React, { useState } from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { Button, Form, Input, TextArea,Message} from 'semantic-ui-react';
import styled from 'styled-components';
import {API} from '../../../utils/api';
import ImageUploading from 'react-images-uploading';


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

const SubmitEvent = () => {
    const [loading, setLoading]=useState(false)
    const[isEventSubmitted, setIsEventSubmitted]=useState(false)
    const[images,setImages]=useState()
    const validationSchema = yup.object().shape({
   
       
        eventName:yup.string().required("Event Name is required"),
        eventDescription:yup.string().required("Event Description is required"),
        venueName:yup.string().required(""),
        address:yup.string().required("Address is required"),
        organizationName:yup.string().required(""),
        email:yup
        .string()
        .email("Invalid Email")
        .required("Email is required"),
        eventBanner:yup.string().required("")
       
        
      });
      const handleEventSubmit=async()=>{
          setLoading(true)
          try {
              await API.post("/event",formik.values)
              setIsEventSubmitted(true)
          } catch (error) {
              
          }
          setLoading(false)

      }


       
      const formik=useFormik({
        initialValues:{
            eventName:"",
            eventDescription:"",
            venueName:"",
            address:"",
            organizationName:"",
            email:"",
            eventBanner:""
         
        },
        validationSchema,
        onSubmit:handleEventSubmit,
   
    })
    const handleImage=()=>{

    }
   

    return (
        <Container>
        <FormWrapper>
            
            <h3>Event Details</h3>
            { isEventSubmitted==false?<Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    
                    <InputForm error={formik.touched.eventName && formik.errors.eventName?true:false} size="large" name="eventName" onBlur={formik.handleBlur} fluid label="Event Name" value={formik.values.eventName} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.eventName && formik.errors.eventName) && <Error>{formik.errors.eventName}</Error>}

                <Form.Group widths="equal">
                    
                    <Form.TextArea error={formik.touched.eventDescription && formik.errors.eventDescription?true:false} size="large" name="eventDescription" onBlur={formik.handleBlur} fluid label="Event Description" value={formik.values.eventDescription} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.eventDescription && formik.errors.eventDescription) && <Error>{formik.errors.eventDescription}</Error>}

               

                <Form.Group widths="equal">
                    
                    <Form.TextArea error={formik.touched.venueName && formik.errors.venueName?true:false} size="large" name="venueName" onBlur={formik.handleBlur} fluid label="Venue Name" value={formik.values.venueName} onChange={formik.handleChange}/>

               
                </Form.Group>
                {(formik.touched.venueName && formik.errors.venueName) && <Error>{formik.errors.venueName}</Error>}

                <Form.Group widths="equal">
                    
                    <Form.TextArea error={formik.touched.address && formik.errors.address?true:false} size="large" name="address" onBlur={formik.handleBlur} fluid label="Address" value={formik.values.address} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.address && formik.errors.address) && <Error>{formik.errors.address}</Error>}

                <Form.Group widths="equal">
                    
                    <Form.TextArea error={formik.touched.organizationName && formik.errors.organizationName?true:false} size="large" name="organizationName" onBlur={formik.handleBlur} fluid label="Organization Name" value={formik.values.organizationName} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.organizationName && formik.errors.organizationName) && <Error>{formik.errors.organizationName}</Error>}

                <Form.Group widths="equal">
                    
                    <InputForm error={formik.touched.email && formik.errors.email?true:false} size="large" name="email" onBlur={formik.handleBlur} fluid label="Email" value={formik.values.email} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.email && formik.errors.email) && <Error>{formik.errors.email}</Error>}

                <Form.Group  >
                 <strong> Event Image</strong> <br/>
                <ImageUploading 
                        multiple
                        value={images}
                        onChange={handleImage}
                        
                        dataURLKey="data_url"
        
        
                >
                 {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    
  
                </Form.Group>
                {(formik.touched.eventBanner && formik.errors.eventBanner) && <Error>{formik.errors.eventBanner}</Error>}


<Form.Group>
    <StyledButton loading={loading} htmlType="submit" secondary>Submit</StyledButton>
</Form.Group>
</Form>:<Message positive>
    <Message.Header>Thank you for submitting event</Message.Header>
    <p>
      Our team will contact you as soon as possible.
    </p>
  </Message>}
        

</FormWrapper>      
 </Container>
    )
}

export  {SubmitEvent}
