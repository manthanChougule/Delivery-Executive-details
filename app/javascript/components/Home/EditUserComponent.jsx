import React,{ Component } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { FormSchema } from '../common/validation'


class EditUserComponent extends Component {
  render() {
    return (
      <div>
        <Formik
        initialValues={ 
          { id: new Date(),
            newFirstname: '',
            newLastname: '',
            newContact: '',
            newAddress: '',
            editting:false }
          }
        validationSchema={FormSchema}
        onSubmit={(values,{ setSubmitting }) => {
          setTimeout(()=>{
            console.log("Clicked");
            this.props.updateUser(values)
            console.log("Formik ReSubmit", values);
            console.log("RESubmited");
            setSubmitting(false);
          },400)
        }}

      >
        <Form>
        <div>
          <label htmlFor="newFirstname">New First Name </label> <br />
          <Field name="newFirstname" type="text" placeholder={this.props.user.firstname}/> <br />
          <ErrorMessage name="firstname" /> <br />
        </div>
        <div>
          <label htmlFor="newLastname">New Last Name </label> <br />
          <Field name="newLastname" type="text" placeholder={this.props.user.lastname}/> <br />
          <ErrorMessage name="lastname" /> <br />
        </div>
        <div>
          <label htmlFor="newContact">New Contact </label> <br />
          <Field name="newContact" type="text" placeholder={this.props.user.contact} /> <br />
          <ErrorMessage name="contact" /> <br />
        </div>
        <div>
          <label htmlFor="newAddress">New Address</label> <br />
          <Field name="newAddress" type="text" placeholder={this.props.user.address}/> <br />
          <ErrorMessage name="address" /> <br />
        </div>
        <button type="submit"
        //onClick={() => this.props.updateUser(initialValues)}
        >
          Submit</button>
        </Form>
        </Formik>
      </div>
    );
  }
}

export default EditUserComponent