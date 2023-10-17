import { Field, Form, Formik } from "formik";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PublicIcon from "@mui/icons-material/Public";

import BlockWrapper from "@/components/BlockWrapper/BlockWrapper";
import { styles } from "@/components/SignUpForm/SignUpForm.styles";
import { TextField } from "@mui/material";

const SignUpForm = () => {
  return (
    <Box sx={styles.root}>
      <PublicIcon sx={styles.icon} />
      <BlockWrapper sx={styles.block}>
        <Formik
          initialValues={{ firstName: "" }}
          onSubmit={async (values) => {
            console.log("Values", values);
          }}
        >
          <Form style={styles.form}>
            <Field
              id="firstName"
              placeholder="Enter you first name"
              name="firstName"
              render={({ field, form }) => {
                <TextField name={"firstName"} />;
              }}
            ></Field>
            <Button type="submit">Sign Up</Button>
          </Form>
        </Formik>
      </BlockWrapper>
    </Box>
  );
};

export default SignUpForm;
