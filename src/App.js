
import './App.css';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
// import * as yup from 'yup';
// import Button from '@material-ui/Button';
// import TextField from '@material-ui/TextField';
import Button from "@mui/material/Button";
// import { TextField } from '@mui/material';
// import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object({
  firstName: Yup
  .string('Enter your First Name')
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Enter your FirstName'),
  lastName: Yup
  .string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Enter your LastName'),
  email: Yup

  .string('Enter your Email')
  .email('Enter a valid Email')
  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password:Yup
    .string('Enter your Password')
  .required('Enter a password')
    .min(6, 'password is weak!')
    .required('Please enter password here'),
});
function onSubmitFunction(values) {
  console.log("values: ", values)
}

function App(){
  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
      firstName:'',
      lastName:'',
      email: '',
      password: '',
    },
   

    onSubmit: onSubmitFunction

  });

  return (
  <div className="main">
    <div className="form">

     <h1>SIGNUP FORM</h1>

      <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
      <TextField
          fullWidth
          className="text"
          color="secondary"

          id="firstName"
          name=""
          label="FisrtName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      <TextField
          fullWidth
          className="text"
          color="secondary"
          id="lastName"
          name="lastName"
          label="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          color="secondary"
          className="text"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          color="secondary"
          className="text"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="secondary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
        </Stack>
      </form>
      </div>
    </div>
  );
 
}
  export default App;