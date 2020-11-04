import * as Yup from "yup"

const formSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Must be a valid email address").required('Email is required'),
    password: Yup.string().required("Please, provide a password"),
    terms: Yup.boolean().oneOf([true], "Please, agree to the Terms of Service"),
})

export default formSchema