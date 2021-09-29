import React, { useState } from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { Button, Form, Input, TextArea,Message} from 'semantic-ui-react';
import styled from 'styled-components';
import {API} from '../../../utils/api';
import ImageUploading from 'react-images-uploading';
import router from 'next/router';


const Container = styled.div`
background-color:#ebfdfb;
`;
const FormWrapper=styled.div`
 max-width:1200px;
 width:100%;
 margin:0 auto;
 padding:40px;
 
 
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
margin-top:50px !important;
margin-left:12px !important;
`;

const SubmitEvent = () => {
    const [loading, setLoading]=useState(false)
    const[isEventSubmitted, setIsEventSubmitted]=useState(false)
    const [images, setImages] = useState([]);
    const [imageFile, setImageFile] = useState();
    const maxNumber = 1;
    const validationSchema = yup.object().shape({
   
       
        eventName:yup.string().required("Event Name is required"),
        eventType:yup.string().required("Event type is required"),
        venueName:yup.string().required("Venue Name is required"),
        address:yup.string().required("Address is required"),
        eventSummary:yup.string().required("Event Summary is required"),
        eventDescription:yup.string().required("Event Description is required"),
        startDate:yup.string().required("Start date is required"),
        endDate:yup.string().required("End date is required"),
        organizationName:yup.string().required(""),
        email:yup
        .string()
        .email("Invalid Email")
        .required("Email is required"),
        
       
        
      });
     
      const handleEventSubmit=async()=>{
          setLoading(true)
          console.log("abc")
          const formData=new FormData();
        formData.append('eventTitle',formik.values.eventName)
        formData.append('eventType',formik.values.eventType)
        formData.append('venueName',formik.values.venueName)
        formData.append('Address',formik.values.address)
        formData.append('eventSummary',formik.values.eventSummary)
        formData.append('eventDescription',formik.values.eventDescription)
        formData.append('startDate',formik.values.startDate)
        formData.append('endDate',formik.values.endDate)
        formData.append('organizationName',formik.values.organizationName)
        formData.append('organizationEmail',formik.values.email)
        formData.append('Banner',imageFile)

          try {
              await API.post("/event",formData)
              setIsEventSubmitted(true)
              router.reload()
          } catch (error) {
              
          }
          setLoading(false)

      }
      const formik=useFormik({
        initialValues:{
            eventName:"",
            eventType:"",
            venueName:"",
            eventDescription:"",
             address:"",
             eventSummary:"",
            organizationName:"",
            email:"",
            startDate:"",
            endDate:""
         
         
        },
        validationSchema,
        onSubmit:handleEventSubmit,
   
    })

      const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log("image=======>", imageList[0]?.file);
        setImageFile(imageList[0]?.file);
        setImages(imageList);
      };


       
     
  
   
    console.log(formik.errors)
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
                    
                    <InputForm error={formik.touched.eventType && formik.errors.eventType?true:false} size="large" name="eventType" onBlur={formik.handleBlur} fluid label="Event Type" value={formik.values.eventType} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.eventType && formik.errors.eventType) && <Error>{formik.errors.eventType}</Error>}
                <Form.Group widths="equal">
                    
                    <Form.TextArea error={formik.touched.eventDescription && formik.errors.eventDescription?true:false} size="large" name="eventDescription" onBlur={formik.handleBlur} fluid label="Event Description" value={formik.values.eventDescription} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.eventDescription && formik.errors.eventDescription) && <Error>{formik.errors.eventDescription}</Error>}

                <Form.Group widths="equal">
                    
                    <Form.TextArea error={formik.touched.eventSummary && formik.errors.eventSummary?true:false} size="large" name="eventSummary" onBlur={formik.handleBlur} fluid label="Event Summary" value={formik.values.eventSummary} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.eventSummary && formik.errors.eventSummary) && <Error>{formik.errors.eventSummary}</Error>}

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

                <Form.Group widths="equal">
                    
                    <InputForm error={formik.touched.startDate && formik.errors.startDate?true:false} size="large" name="startDate" onBlur={formik.handleBlur} fluid label="Start Date" value={formik.values.startDate} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.startDate && formik.errors.startDate) && <Error>{formik.errors.startDate}</Error>}
                   
                <Form.Group widths="equal">
                    
                    <InputForm error={formik.touched.endDate && formik.errors.endDate?true:false} size="large" name="endDate" onBlur={formik.handleBlur} fluid label="End Date" value={formik.values.endDate} onChange={formik.handleChange}/>
               
                </Form.Group>
                {(formik.touched.endDate && formik.errors.endDate) && <Error>{formik.errors.endDate}</Error>}
                
                 <div>Event Image </div>
                 <ImageUploading 
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,

          onImageUpdate,
          onImageRemove
        }) => (
          // write your building UI
          <div className="upload__image-wrapper" >
            <button type="button" onClick={()=>onImageUpload()}>Upload Image</button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <Button onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button
                    icon="delete"
                    color="red"
                    
                    onClick={() => onImageRemove(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
  
               

<Form.Group>
    <StyledButton loading={loading}  secondary>Submit</StyledButton>
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
