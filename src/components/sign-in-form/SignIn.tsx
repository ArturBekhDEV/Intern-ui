import TextField from "@mui/material/TextField";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styles } from "./SignIn.styles";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface formTypes {
  email: string;
  password: string;
}

const SignIn = () => {
  const initialValues: formTypes = {
    email: "",
    password: "",
  };
  const onSubmit = (values: formTypes, props: FormikHelpers<formTypes>) => {
    console.log(values);
    props.resetForm();
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
              <Button
                variant="contained"
                color="primary"
                sx={styles.btn}
                type="submit"
              >
                Sign In
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignIn;
