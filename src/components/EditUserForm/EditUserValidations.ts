import * as yup from "yup";
import { InputTypes } from "@/components/SignUpForm/SignUpForm.types";

const validationMessages = {
  required: "This field is required.",
  tooShort: "This field is too short.",
  tooLong: "This field is too long.",
  email: "Email format should be like: name@example.com",
};

export const editValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, validationMessages.tooShort)
    .max(50, validationMessages.tooLong),
  lastName: yup
    .string()
    .min(3, validationMessages.tooShort)
    .max(60, validationMessages.tooLong),
  email: yup.string().email(validationMessages.email),
});

export const editInputTypes: Record<string, InputTypes> = {
  email: InputTypes.email,
  firstName: InputTypes.text,
  lastName: InputTypes.text,
  role: InputTypes.text,
};
