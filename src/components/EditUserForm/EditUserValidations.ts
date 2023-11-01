import * as yup from "yup";
import { InputTypes } from "@/components/SignUpForm/SignUpForm.types";
import { dataRowType } from "@/components/UserTable/UserTable.constans";

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

export function createEditUserInputs(userData: dataRowType[]) {
  const user = userData[0];

  const editUserInputs = [
    {
      id: "firstName",
      label: "First name",
      placeholder: user.firstName,
      required: true,
    },
    {
      id: "lastName",
      label: "Last name",
      placeholder: user.lastName,
      required: false,
    },
    {
      id: "email",
      label: "Email",
      placeholder: user.email,
      required: true,
    },
    {
      id: "role",
      required: true,
      label: "Role",
      placeholder: "Please choose a role",
    },
  ];

  return editUserInputs;
}
