import React, { Component } from 'react'
import { Formik } from 'formik'
import Basicform from '../common/form'
import { FormSchema } from '../common/validation'
import { Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles'
import Container from '@material-ui/core/Container';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px `,
    maxWidth: "sm"
  },//
  container: {
  maxWidth: "500px"
  },
  container2: {
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px`,
  }
});

class FormikForm extends Component {
  render() {
    const classes = this.props;
    const values = { id: new Date(), firstname: "", lastname: "", contact: "", address: ""};
    return (
      <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <Container className={classes.container2}>
              <h1>Form</h1>
              <Formik 
                initialValues={values}
                validationSchema={FormSchema}
                onSubmit={(values,{ setSubmitting }) => {
                  setTimeout(() => {
                    console.log(values);
                    addUser(values);
                    console.log("ACTION AFTER SUBMIT",addUser(values));
                    setSubmitting(false);
                  },400);
                }}
              >
                {props => <Basicform {...props}/>}
              </Formik>
            </Container>
          </Paper>
        </div>
    )
  }
}
const NewUserFormComponent = withStyles(styles)(FormikForm)

export default NewUserFormComponent