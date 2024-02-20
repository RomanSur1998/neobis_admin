import * as yup from "yup";

export const validationShemas = {
  authForm: yup.object({
    code: yup.string().required().min(4).max(4),
  }),
  loginForm: yup.object({
    identifier: yup.string().required(),
    password: yup.string().required().min(5),
  }),
};
