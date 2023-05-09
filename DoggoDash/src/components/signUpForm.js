import { useState } from "react";
import {useRouter} from "next/router"
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export default function signUpForm() {
  const router = useRouter()
  // States for registration
  const [dogOwner, setDogOwner] = useState("");
  const [dogSitter, setDogSitter] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("ON");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the first name change
  const handleDogOwner= (e) => {
    setDogOwner("Dog Owner");
    setSubmitted(false);
  };

  const handleDogSitter= (e) => {
    setDogSitter("Dog Sitter");
    setSubmitted(false);
  };
  
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  // Handling the last name change
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the street adress change
  const handleStreetAdress = (e) => {
    setStreetAddress(e.target.value);
    setSubmitted(false);
  };

  // Handling the street adress change
  const handleCity = (e) => {
    setCity(e.target.value);
    setSubmitted(false);
  };

  // Handling the street adress change
  const handleProvince = (e) => {
    setProvince(e.target.value);
  };

  const handlePostalCode = (e) => {
    setpostalCode(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      dogOwner === "" && dogSitter === "" ||
      firstName === "" ||
      lastName === "" ||
      streetAddress === "" ||
      city === "" ||
      province === "" ||
      postalCode === "" ||
      email === "" ||
      password === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      router.replace('search')
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {firstName} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
    
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            User Registration
          </h2>
        </div>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <Card className="w-full max-w-[24rem] m-auto">
          <List className="flex-row">
            <ListItem className="p-0">
              <label
                htmlFor="horizontal-list-vue"
                className="px-3 py-2 flex items-center w-full cursor-pointer"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                     onChange={handleDogOwner}
                     value={dogOwner}
                    id="horizontal-list-vue"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="block text-sm font-medium leading-6 text-gray-900">
                  Dog Owner
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0" >
              <label
                htmlFor="horizontal-list-svelte"
                className="px-3 py-2 flex items-center w-full cursor-pointer"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    onChange={handleDogSitter}
                    value={dogSitter}
                    id="horizontal-list-svelte"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="block text-sm font-medium leading-6 text-gray-900">
                  Dog Sitter
                </Typography>
              </label>
            </ListItem>
          </List>
        </Card>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" id="inputFields">
          <form className="space-y-6" action="#" method="POST" >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  onChange={handleFirstName}
                  value={firstName}
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="firstName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  onChange={handleLastName}
                  value={lastName}
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="lastName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street Address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleStreetAdress}
                  value={streetAddress}
                  id="streetAddress"
                  name="streetAddress"
                  type="text"
                  autoComplete="streetAddress"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  onChange={handleCity}
                  value={city}
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="city"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="inline-flex flex-row">
              <div className="province">
                <label
                  htmlFor="province"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Province/Territory
                </label>
                <div className="mt-2">
                  <select
                    onChange={handleProvince}
                    value={province}
                    id="province"
                    name="province"
                    className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>ON</option>
                    <option>AB</option>
                    <option>MB</option>
                    <option>NB</option>
                    <option>NL</option>
                    <option>NT</option>
                    <option>NS</option>
                    <option>NU</option>
                    <option>PE</option>
                    <option>QC</option>
                    <option>SK</option>
                    <option>YT</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Postal Code
                </label>
                <div className="mt-2">
                  <input
                    onChange={handlePostalCode}
                    value={postalCode}
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    autoComplete="postalCode"
                    required
                    className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleEmail}
                  value={email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handlePassword}
                  value={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
