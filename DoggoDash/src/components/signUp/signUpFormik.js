import { Form, Formik } from "formik";
import { advancedSchema } from "./signUpFormSchema";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignupForm() {
  const router = useRouter()
  
  const onSubmit = async (values, actions) => {
    const data = {
      userType: values.userType,
      firstName: values.firstName,
      lastName: values.lastName,
      streetAddress: values.streetAddress,
      city: values.city,
      postalCode: values.postalCode,
      province: values.province,
      email: values.email,
      password: values.password,
    };
    axios.post("/api/signUp", {data});
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    router.replace("search")
  };
  
  return (
    <Formik
      initialValues={{
        userType: "",
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        postalCode: "",
        province: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomSelect
            label="User Type"
            name="userType"
            placeholder="Please select a user type"
          >
            <option value="">Please select an account type</option>
            <option value="dogOwner">Dog Owner</option>
            <option value="dogSitter">Dog Sitter</option>
           
          </CustomSelect>
          <CustomInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
          />

          <CustomInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
          />

          <CustomInput
            label="Street Address"
            name="streetAddress"
            type="text"
            placeholder="Enter your street address"
          />

          <CustomInput
            label="City"
            name="city"
            type="text"
            placeholder="Enter your city"
          />

          <CustomInput
            label="Postal Code"
            name="postalCode"
            type="text"
            placeholder="Enter your postal code"
          />

          <CustomSelect
            label="Province"
            name="province"
            placeholder="Please select a province"
          >
            <option value="">Please select a province</option>
            <option value="ON">Ontario</option>
            <option value="QC">Quebec</option>
            <option value="NS">Nova Scotia</option>
            <option value="NB">New Brunswick</option>
            <option value="MB">Manitoba</option>
            <option value="PEI">Prince Edward Island</option>
            <option value="SK">Saskatchewan</option>
            <option value="AB">Alberta</option>
            <option value="NL">Newfoundland & Labrador</option>
          </CustomSelect>

          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />

          <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />

          <CustomInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />

          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
