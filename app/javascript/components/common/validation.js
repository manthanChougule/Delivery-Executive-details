import * as Yup from 'yup'
//common
const phoneRegExp = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/

export const FormSchema = Yup.object({
  firstname: Yup.string()
      .min(2, "*First Name at least have 2 characters")
      .max(50, "*First cant be longer than 50 character")
      .required('First Name is Required'),
  lastname: Yup.string()
      .min(2, "*Last Name at least have 2 characters")
      .max(50, "*Last cant be longer than 50 character")
      .required('Last Name is Required'),
  contact: Yup.string()
      .matches(phoneRegExp, "*Phone number is not valid")
      .required("*Phone number Required"),
  address: Yup.string()
      .min(20, "*Address at least have 20 characters")
      .max(100, "*Address cant be longer than 100 character")
      .required("Adress is required")
})