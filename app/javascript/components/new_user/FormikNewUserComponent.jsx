import React from 'react'
import { FormSchema } from '../common/validation'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const FormikNewUserComopnent = () => {
  return (
      <Formik
        initialValues={ 
          { firstname: '',
            lastname: '',
            contact: '',
            address: '' }
          }
        validationSchema={FormSchema}
        onSubmit={(values,{ setSubmitting }) => {
          setTimeout(()=>{
            addUser(values);
            console.log("Formik Submit", values);
            setSubmitting(false);
          },400)
        }}
      > 
      <Form>
        <div className = "firstname">
          <label htmlFor="firstname">First Name </label>
          <Field name="firstname" type="text" />
          <ErrorMessage name="firstname" />
        </div>
        <div className = "lastname">
          <label htmlFor="lastname">Last Name </label>
          <Field name="lastname" type="text" />
          <ErrorMessage name="lastname" />
        </div>
        <div className="contact">
          <label htmlFor="contact">Contact </label>
          <Field name="contact" type="text" />
          <ErrorMessage name="contact" />
        </div>
        <div className="address">
          <label htmlFor="address">Address</label>
          <Field name="address" type="text" />
          <ErrorMessage name="address" />
        </div>
        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </Form>
      </Formik>
  )
}

export default FormikNewUserComopnent