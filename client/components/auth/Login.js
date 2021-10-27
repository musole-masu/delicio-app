import { useState } from "react";
import useRequest from "../../hooks/useRequest";
import { useRouter } from "next/router";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    body: {
      email,
      password,
    },
    method: "post",
    onSuccess: () => router.push("/"),
  });
  const signInHandler = (event) => {
    event.preventDefault();
    doRequest();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col px-12 py-12 max-w-3xl mx-auto shadow-xl rounded-2xl">
      <div className="text-center">
        <h1 className="font-light text-4xl">Login</h1>
      </div>
      <form onSubmit={signInHandler}>
        <div>
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
            onChange={(e) => setEmail(e.target.value)}
            className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="meal-name"
            className="block text-base font-normal text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md"
          />
        </div>

        <div className="flex">
          <button className="bg-yellow-500 text-gray-800 font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl">
            Login Now{" "}
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
export default Login;
