import { Field, Form, Formik } from "formik";
import { Box, Button, TextField, Typography } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import { styles } from "@/components/SignUpForm/SignUpForm.styles";
import {
  initialValues,
  inputTypes,
  inputs,
  validationSchema,
} from "@/components/SignUpForm/SignUpForm.constants";

const SignUpForm = () => {
  return (
    <Box sx={styles.root}>
      <AppRegistrationIcon sx={styles.icon} />
      <Typography variant="h2" sx={styles.title}>
        Create Account
      </Typography>
      <Typography sx={styles.description} mb={4}>
        Register for your new account.
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          console.log("Values", values);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Box sx={styles.form}>
              {inputs.map((input) => (
                <Field
                  key={input.id}
                  id={input.id}
                  autoComplete="off"
                  error={touched[input.id] && !!errors[input.id]}
                  helperText={touched[input.id] && errors[input.id]}
                  sx={styles.input}
                  as={TextField}
                  label={input.label}
                  name={input.id}
                  placeholder={input.placeholder}
                  required={input.required}
                  type={inputTypes[input.id]}
                  margin="dense"
                />
              ))}
              <Button
                variant="contained"
                type="submit"
                sx={styles.button}
                data-testid="submit-btn"
              >
                Sign Up
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignUpForm;
