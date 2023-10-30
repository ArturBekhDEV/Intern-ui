import { FC } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Box, MenuItem, TextField, Typography } from "@mui/material";

import { styles } from "@/components/NewUserForm/NewUserForm.styles";
import AppButton from "../AppButton/AppButton";
import {
  authInputTypes,
  authValidationSchema,
  newUserInitialValues,
  newUserInputs,
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
    <MenuItem
      data-testid="selector-option"
      key={option.value}
      value={option.value}
    >
      {option.name}
    </MenuItem>
  ));

  return (
    <Box sx={styles.root}>
      <Typography variant="h4" sx={styles.title}>
        Create a new user
      </Typography>
      <Formik
        initialValues={newUserInitialValues}
        onSubmit={onSubmit}
        validationSchema={authValidationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Box sx={styles.form}>
              {newUserInputs.map((input) => {
                const selectOptions = input.id == "role" && {
                  select: true,
                  children: selectorOptions,
                  sx: styles.selectorInput
                };
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
                    {...selectOptions}
                  />
                );
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
