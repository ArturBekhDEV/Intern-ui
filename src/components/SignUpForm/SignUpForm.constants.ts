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
    placeholder: "Enter your passwoord",
    required: true,
  },
  {
    id: "confirmPassword",
    label: "Confirm password",
    placeholder: "Please confirm your password",
    required: true,
  },
];

export const initialValues: Record<string, string> = {};
inputs.forEach((input) => {
  initialValues[input.id] = "";
});
