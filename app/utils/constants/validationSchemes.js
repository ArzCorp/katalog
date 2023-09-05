import * as Yup from 'yup'

export const VALIDATION_SCHEMES = Object.freeze({
  REGISTER_FORM: Yup.object({
    name: Yup.string().required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
    repeatedPassword: Yup.string().required('Campo requerido'),
    lastName: Yup.string().required('Campo requerido'),
    catalogName: Yup.string().required('Campo requerido'),
    email: Yup.string()
      .required('Campo requerido')
      .email('El correo electrónico no tiene el formato correcto'),
  }),
})
