import React from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'

const phoneRegExp = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/


// class EditUserComponent extends Component {
//   render() {
  const EditUserComponent = (props) => {
    return (
        <Formik
        initialValues={ 
          { id: new Date(),
            newFirstname: '',
            // newLastname: '',
            // newContact: '',
            // newAddress: '',
            editting:false }
          }
        validationSchema={Yup.object({
          newFirstname: Yup.string()
              .min(2, "*First Name at least have 2 characters")
              .max(50, "*First cant be longer than 50 character")
              .required('First Name is Required'),
          newLastname: Yup.string()
              .min(2, "*Last Name at least have 2 characters")
              .max(50, "*Last cant be longer than 50 character")
              .required('Last Name is Required'),
          newContact: Yup.string()
              .matches(phoneRegExp, "*Phone number is not valid")
              .required("*Phone number Required"),
          newAddress: Yup.string()
              .min(20, "*Address at least have 20 characters")
              .max(100, "*Address cant be longer than 100 character")
              .required("Adress is required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(()=>{
            props.updateUser(values)
            console.log("Clicked", values.firstname);
            console.log("Formik ReSubmit", values);
            console.log("RESubmited");
            setSubmitting(false);
          },400)
        }}

      >
        <Form>
        <div>
          <label htmlFor="newFirstname">New First Name </label> <br />
          <Field name="newFirstname" type="text" placeholder={props.user.firstname}/> <br />
          <ErrorMessage name="newFirstname" /> <br />
        </div>
        {/* <div>
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
        </div> */}
        <button type="submit" 
        // onClick={(values) => {
        //   setTimeout(()=>{
        //     console.log("Clicked", values.firstname);
        //     props.updateUser(values)
        //     console.log("Formik ReSubmit", values);
        //     console.log("RESubmited");
        //   },400)
        // }}
        >Submit</button>
        </Form>
        </Formik>
    );
  }
// }

export default EditUserComponent