import React,{ Component } from 'react'
import Button from '@material-ui/core/Button'
import { Formik, Form, ErrorMessage } from 'formik'
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
            () => this.props.updateUser(values);
            console.log("Formik ReSubmit", values);
            console.log("RESubmited");
            setSubmitting(false);
          },400)
        }}
      >
        <Form>
        <div>
          <label htmlFor="newFirstname">New First Name </label> <br />
          <input name="newFirstname" type="text" defaultValue={this.props.user.firstname}/> <br />
          <ErrorMessage name="firstname" /> <br />
        </div>
        <div>
          <label htmlFor="newLastname">New Last Name </label> <br />
          <input name="newLastname" type="text" defaultValue={this.props.user.lastname}/> <br />
          <ErrorMessage name="lastname" /> <br />
        </div>
        <div>
          <label htmlFor="newContact">Contact </label> <br />
          <input name="newContact" type="text" defaultValue={this.props.user.contact} /> <br />
          <ErrorMessage name="contact" /> <br />
        </div>
        <div>
          <label htmlFor="newAddress">Address</label> <br />
          <input name="newAddress" type="text" defaultValue={this.props.user.address}/> <br />
          <ErrorMessage name="address" /> <br />
        </div>
          <button type="submit">
            Update
          </button>
        </Form>
        </Formik>
      </div>
    );
  }
}

export default EditUserComponent