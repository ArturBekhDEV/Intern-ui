import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "" }}
      onSubmit={async (values) => {
        console.log("Values", values);
      }}
    >
      <Form>
        <Field id="firstName" placeholder="Enter you first name" name="firstName"></Field>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
