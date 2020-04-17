import React from 'react'
import { FormSchema } from '../common/validation'
import { Formik, Form, Field, ErrorMessage } from 'formik'


const divStyle = {
  all: {
    margin: '15px',
    marginLeft: '25px'
  },
  lable: {
    margin: '10px'
  }
}


const FormikNewUserComopnent = (props) => {
  return (
      <Formik
        initialValues={ 
          { id: new Date(),
            firstname: '',
            lastname: '',
            contact: '',
            address: '',
            editing: false }
          }
        validationSchema={FormSchema}
        onSubmit={(values,{ setSubmitting }) => {
          setTimeout(()=>{
            console.log("Formik Submit", values);
            props.addUser(values);
            console.log("Submited");
            setSubmitting(false);
          },400)
        }}
      > 
      <Form>
        <div className = "firstname" style={divStyle.all}>
          <label htmlFor="firstname" style={divStyle.lable}>First Name </label> <br />
          <Field name="firstname" type="text" /> <br />
          <ErrorMessage name="firstname" /> <br />
        </div>
        <div className = "lastname" style={divStyle.all}>
          <label htmlFor="lastname">Last Name </label> <br />
          <Field name="lastname" type="text" /> <br />
          <ErrorMessage name="lastname" /> <br />
        </div>
        <div className="contact" style={divStyle.all}>
          <label htmlFor="contact">Contact </label> <br />
          <Field name="contact" type="text" /> <br />
          <ErrorMessage name="contact" /> <br />
        </div>
        <div className="address" style={divStyle.all}>
          <label htmlFor="address">Address</label> <br />
          <Field name="address" type="text" /> <br />
          <ErrorMessage name="address" /> <br />
        </div>
        <div className="button" style={divStyle.all}>
          <button type="submit">Submit</button>
        </div>
      </Form>
      </Formik>
  )
}

export default FormikNewUserComopnent