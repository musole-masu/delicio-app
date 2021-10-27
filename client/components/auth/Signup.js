import { useState } from "react";
import useRequest from "../../hooks/useRequest";
import { useRouter } from "next/router";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const router = useRouter();

  const setFirstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const setLastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const setPhoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const setStateHandler = (e) => {
    setState(e.target.value);
  };
  const setCityHandler = (e) => {
    setCity(e.target.value);
  };
  const setStreetHandler = (e) => {
    setStreet(e.target.value);
  };

  const userInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    address: {
      state: state,
      city: city,
      street: street,
    },
  };

  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: userInfo,
    onSuccess: () => router.push("/"),
  });

  const signUpHandler = (event) => {
    event.preventDefault();

    doRequest();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setState("");
    setCity("");
    setStreet("");
  };
  return (
    <div className="flex flex-col px-12 py-12 max-w-3xl mx-auto shadow-xl rounded-2xl">
      <div className="text-center my-4">
        <h1 className="font-light text-4xl">Sign Up here</h1>
      </div>
      <form onSubmit={signUpHandler}>
        <div className="flex space-x-2 px-2">
          <div className="w-1/2">
            <label
              htmlFor="meal-name"
              className="block text-base font-normal text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              required
              value={firstName}
              onChange={setFirstNameHandler}
              className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="meal-name"
              className="block text-base font-normal text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              required
              value={lastName}
              onChange={setLastNameHandler}
              className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
            />
          </div>
        </div>
        <div className="px-2">
          <label
            htmlFor="meal-name"
            className="block text-base font-normal text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={setEmailHandler}
            className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
          />
        </div>
        <div className="px-2">
          <label
            htmlFor="meal-name"
            className="block text-base font-normal text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={setPasswordHandler}
            className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
          />
        </div>
        <div className="px-2">
          <label
            htmlFor="meal-name"
            className="block text-base font-normal text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            required
            value={phoneNumber}
            onChange={setPhoneNumberHandler}
            className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
          />
        </div>
        <div className="bg-indigo-50 rounded-lg p-2">
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label
                htmlFor="state"
                className="block text-base font-normal text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={setStateHandler}
                className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="city"
                className="block text-base font-normal text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                required
                value={city}
                onChange={setCityHandler}
                className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="street"
              className="block text-base font-normal text-gray-700"
            >
              Street
            </label>
            <input
              type="text"
              id="street"
              required
              value={street}
              onChange={setStreetHandler}
              className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
            />
          </div>
        </div>

        <div className="flex mt-4">
          <button
            type="submit"
            className="bg-yellow-500 text-gray-800 font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl"
          >
            Register Now{" "}
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
