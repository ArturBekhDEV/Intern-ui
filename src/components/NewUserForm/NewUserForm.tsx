import { FC } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Box, MenuItem, TextField, Typography } from "@mui/material";

import { styles } from "@/components/NewUserForm/NewUserForm.styles";
import AppButton from "../AppButton/AppButton";
import {
  authInitialValues,
  authInputTypes,
  authInputs,
  authValidationSchema,
} from "@/constants/validations";
import { selectorInput } from "./NewUserForm.constants";

interface NewUserFormProps {
  onSubmit: (
    values: Record<string, string>,
    helpers?: FormikHelpers<Record<string, string>>
  ) => Promise<void>;
}

const NewUserForm: FC<NewUserFormProps> = ({ onSubmit }) => {
  const selectorOptions = selectorInput.items.map((option) => (
    <MenuItem data-testid='selector-option' key={option.value} value={option.value}>
      {option.name}
    </MenuItem>
  ));

  return (
    <Box sx={styles.root}>
      <Typography variant="h4" sx={styles.title}>
        Create a new user
      </Typography>
      <Formik
        initialValues={authInitialValues}
        onSubmit={onSubmit}
        validationSchema={authValidationSchema}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <Box sx={styles.form}>
              {authInputs.map((input) => {
                if (input.id === "confirmPassword") {
                  return (
                    <TextField
                      key={input.id}
                      sx={styles.selectorInput}
                      variant="outlined"
                      name={selectorInput.id}
                      id={selectorInput.id}
                      select
                      data-testid="selector"
                      inputProps={{ 'data-testid': "selector" }}
                      label={selectorInput.placeholder}
                      value={values.role}
                      onChange={handleChange}
                      error={touched.role && Boolean(errors.role)}
                      helperText={touched.role && errors.role}
                    >
                      {selectorOptions}
                    </TextField>
                  );
                } else {
                  return (
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
                  );
                }
              })}
              <AppButton
                type="submit"
                sx={styles.button}
                data-testid="submit-btn"
              >
                Submit
              </AppButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default NewUserForm;
