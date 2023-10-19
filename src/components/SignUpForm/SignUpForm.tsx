import { Field, Form, Formik } from "formik";
import { Box, Button, TextField } from "@mui/material";

import BlockWrapper from "@/components/BlockWrapper/BlockWrapper";
import { styles } from "@/components/SignUpForm/SignUpForm.styles";
import {
  initialValues,
  inputs,
  validationSchema,
} from "@/components/SignUpForm/SignUpForm.constants";

const SignUpForm = () => {
  return (
    <Box sx={styles.root}>
      <BlockWrapper sx={styles.block}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            console.log("Values", values);
            resetForm();
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form style={styles.form}>
              {inputs.map((input) => (
                <Field
                  key={input.id}
                  id={input.id}
                  autoComplete="off"
                  error={touched[input.id] && errors[input.id]}
                  helperText={touched[input.id] && errors[input.id]}
                  sx={styles.input}
                  as={TextField}
                  label={input.label}
                  name={input.id}
                  placeholder={input.placeholder}
                  required={input.required}
                  type={
                    ["password", "confirmPassword"].includes(input.id)
                      ? "password"
                      : ""
                  }
                />
              ))}
              <Button variant="contained" type="submit" sx={styles.button}>
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </BlockWrapper>
    </Box>
  );
};

export default SignUpForm;
