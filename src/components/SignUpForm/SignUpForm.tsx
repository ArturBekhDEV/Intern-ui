import { Field, Form, Formik, FormikHelpers } from "formik";
import { Box, TextField, Typography } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import { styles } from "@/components/SignUpForm/SignUpForm.styles";
import {
  authInputs,
  authValidationSchema,
  authInitialValues,
  authInputTypes
} from "@/constants/validations";
import { FC } from "react";
import AppButton from "../AppButton/AppButton";

interface SignUpFormProps {
  onSubmit: (
    dto: Record<string, string>,
    helpers?: FormikHelpers<Record<string, string>>
  ) => Promise<void>;
}

const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
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
        initialValues={authInitialValues}
        onSubmit={onSubmit}
        validationSchema={authValidationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Box sx={styles.form}>
              {authInputs.map((input) => (
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
                  type={authInputTypes[input.id]}
                  margin="dense"
                />
              ))}
              <AppButton
                type="submit"
                sx={styles.button}
                data-testid="submit-btn"
              >
                Sign Up
              </AppButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignUpForm;
