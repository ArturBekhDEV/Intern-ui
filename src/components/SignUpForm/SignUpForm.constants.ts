import * as yup from "yup";
import { InputTypes } from "@/components/SignUpForm/SignUpForm.types";

const validationMessages = {
  required: "This field is required.",
  tooShort: "This field is too short.",
  tooLong: "This field is too long.",
  password: (type: string) => `Password should contain at least ${type}.`,
  confirmPassword: "Passwords must match",
  email: "Email format should be like: name@example.com",
};

const passwordPatterns = {
  oneDigit: /(?=.*\d)/,
  oneLowerCase: /(?=.*[a-z])/,
  oneUpperCase: /(?=.*[A-Z])/,
  oneSpecialSymbol: /.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-].*/,
};

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, validationMessages.tooShort)
    .max(50, validationMessages.tooLong)
    .required(validationMessages.required),
  lastName: yup
    .string()
    .min(3, validationMessages.tooShort)
    .max(60, validationMessages.tooLong),
  email: yup
    .string()
    .email(validationMessages.email)
    .required(validationMessages.required),
  password: yup
    .string()
    .min(8, validationMessages.tooShort)
    .max(50, validationMessages.tooLong)
    .matches(passwordPatterns.oneDigit, {
      message: validationMessages.password("one digit"),
    })
    .matches(passwordPatterns.oneLowerCase, {
      message: validationMessages.password("one lower case character"),
    })
    .matches(passwordPatterns.oneUpperCase, {
      message: validationMessages.password("one upper case character"),
    })
    .matches(passwordPatterns.oneSpecialSymbol, {
      message: validationMessages.password("one special symbol"),
    })
    .required(validationMessages.required),
  confirmPassword: yup
    .string()
    .max(50, validationMessages.tooLong)
    .oneOf([yup.ref("password"), ""], validationMessages.confirmPassword),
});

export const inputs = [
  {
    id: "firstName",
    label: "First name",
    placeholder: "Enter your first name",
    required: true,
  },
  {
    id: "lastName",
    label: "Last name",
    placeholder: "Enter your last name",
    required: false,
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    required: true,
  },
  {
    id: "confirmPassword",
    label: "Confirm password",
    placeholder: "Please confirm your password",
    required: true,
  },
];

export const initialValues: Record<string, string> = {
  password: "",
  confirmPassword: "",
  email: "",
  firstName: "",
  lastName: "",
};

export const inputTypes: Record<string, InputTypes> = {
  password: InputTypes.password,
  confirmPassword: InputTypes.password,
  email: InputTypes.email,
  firstName: InputTypes.text,
  lastName: InputTypes.text,
};
