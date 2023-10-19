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
      .email("Please enter valid email adress*")
      .required("Required"),
    password: Yup.string().required("Required*"),
  });
  return (
    <Box sx={styles.container}>
      <Box sx={styles.containerBlock}>
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
          <Form>
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
            />
            <Button
              variant="contained"
              color="primary"
              sx={styles.btn}
              type="submit"
            >
              Sign In
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default SignIn;
