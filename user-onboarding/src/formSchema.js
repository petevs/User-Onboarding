import * as Yup from "yup"

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required("Must included your name"),
    email: Yup
        .string()
        .email("Must be a valid email address")
        .required("Must include an email"),
    password: Yup
        .string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Password is Required"),
    tos: Yup
        .boolean()
        .oneOf([true], "You must accept Terms and Conditions")
})

export default formSchema