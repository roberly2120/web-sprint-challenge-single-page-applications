import * as yup from 'yup'

const formSchema = yup.object().shape({
    name:yup
        .string()
        .trim()
        .required("Please enter a name")
        .min(3, "name must be at least 2 characters"),
    size:yup.string(),
    sauce:yup.string(),
    pepperoni:yup.bool(),
    mushrooms:yup.bool(),
    olives:yup.bool(),
    pineapple:yup.bool(),
    special:yup.string()
})
export default formSchema;