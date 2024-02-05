import * as yup from "yup";

export const validationShemas = {
  authForm: yup.object({
    code: yup.string().required().min(4).max(4),
  }),
};
