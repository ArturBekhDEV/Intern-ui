import TextField from "@mui/material/TextField";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styles } from "./SignIn.styles";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FC } from "react";
import AppButton from "@/components/AppButton/AppButton";

interface SignInProps {
  onSubmit: (
    values: Record<string, string>,
    helpers?: FormikHelpers<Record<string, string>>
  ) => Promise<void>;
}

const SignIn: FC<SignInProps> = ({ onSubmit }) => {
  const initialValues: Record<string, string> = {
    email: "",
    password: "",
  };
  const validateYupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address*")
      .required("Required"),
    password: Yup.string().required("Required*"),
  });
  return (
    <Box sx={styles.container}>
      <LockOpenIcon sx={styles.icon} />
      <Typography variant="h2" sx={styles.title}>
        Welcome back
      </Typography>
      <Typography sx={styles.description} mb={4}>
        We missed you! Please enter your details.
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateYupSchema}
      >
        {(formik) => (
          <Form>
            <Box sx={styles.form}>
              <Field
                as={TextField}
                margin="normal"
                name="email"
                label="Email"
                placeholder="Enter your email"
                required
                fullWidth
                helperText={<ErrorMessage name="email" />}
                sx={styles.input}
                error={formik.touched.email && formik.errors.email}
              />
              <Field
                as={TextField}
                margin="normal"
                name="password"
                fullWidth
                label="Password"
                placeholder="Enter your password"
                required
                helperText={<ErrorMessage name="password" />}
                type="password"
                sx={styles.input}
                error={formik.touched.password && formik.errors.password}
              />
              <AppButton sx={styles.btn} type="submit">
                Sign In
              </AppButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignIn;
