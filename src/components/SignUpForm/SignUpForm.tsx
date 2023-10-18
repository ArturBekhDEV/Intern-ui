import { Field, Form, Formik } from "formik";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import BlockWrapper from "@/components/BlockWrapper/BlockWrapper";
import { styles } from "@/components/SignUpForm/SignUpForm.styles";
import { TextField } from "@mui/material";
import {
  initialValues,
  inputs,
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
        >
          <Form style={styles.form}>
            {inputs.map((input) => (
              <Field
                key={input.id}
                id={input.id}
                autoComplete="off"
                sx={styles.input}
                as={TextField}
                label={input.label}
                name={input.id}
                placeholder={input.placeholder}
                required={input.required}
              />
            ))}
            <Button variant="contained" type="submit" sx={styles.button}>
              Sign Up
            </Button>
          </Form>
        </Formik>
      </BlockWrapper>
    </Box>
  );
};

export default SignUpForm;
