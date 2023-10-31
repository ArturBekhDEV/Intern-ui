import { FC } from "react";

import { Field, Form, Formik, FormikHelpers } from "formik";
import { selectorInput } from "./EditUserForm.constants";
import AppButton from "../AppButton/AppButton";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { styles } from "./EditUserForm.styles";
import { dataRowType } from "@/components/UserTable/UserTable.constans";

import {
  editInputTypes,
  editValidationSchema,
} from "@/components/EditUserForm/EditUserValidations";

interface NewUserFormProps {
  onSubmit: () => // values: Record<string, string>,
  // helpers?: FormikHelpers<Record<string, string>>
  Promise<void>;
  userData: dataRowType[];
}

const EditUserForm: FC<NewUserFormProps> = ({ onSubmit, userData }) => {
    
  //  винести той масив. едіт

  const editUserInitialValues: Record<string, string> = {
    email: userData[0].email,
    firstName: userData[0]?.firstName,
    lastName: userData[0]?.lastName,
    role: userData[0]?.role,
  };

  console.log(editUserInitialValues);

  const editUserInputs = [
    {
      id: "firstName",
      label: "First name",
      placeholder: userData[0].firstName,
      required: true,
    },
    {
      id: "lastName",
      label: "Last name",
      placeholder: userData[0].lastName,
      required: false,
    },
    {
      id: "email",
      label: "Email",
      placeholder: userData[0].email,
      required: true,
    },
    {
      id: "role",
      required: true,
      label: "Role",
      placeholder: "Please choose a role",
    },
  ];

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
        Edit user
      </Typography>
      <Formik
        initialValues={editUserInitialValues}
        onSubmit={onSubmit}
        validationSchema={editValidationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Box sx={styles.form}>
              {editUserInputs.map((input) => {
                const slectedOptions = input.id === "role" && {
                  select: true,
                  children: selectorOptions,
                  sx: styles.selectorInput,
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
                    type={editInputTypes[input.id]}
                    margin="dense"
                    {...slectedOptions}
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
export default EditUserForm;
