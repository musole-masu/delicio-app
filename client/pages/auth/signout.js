import { useEffect } from "react";
import { useRouter } from "next/router";
import useRequest from "../../hooks/useRequest";
const SignOut = () => {
  const router = useRouter();
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <h1>Signing Out</h1>;
};
export default SignOut;
