import { Fragment } from "react";
import Head from "next/head";
import buildClient from "../api/build-client";

const HomePage = ({ currentUser }) => {
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <h1 className="font-bold text-5xl text-gray-600">
          Eat healthy every day.{" "}
        </h1>
        <h1 className="font-light text-3xl mt-10">
          The most delicious food in your town.
        </h1>
        <p className="text-gray-700 text-xl font-light">
          New dishes every week, created by our nutritionists and cooked by our
          chefs just for you.
        </p>
      </div>
    </div>
  );
};

HomePage.getInitialProps = async (context) => {
  console.log("HOME PAGE");
  const { data } = await buildClient(context).get("/api/users/currentuser");

  console.log(data);
  return data;
};
export default HomePage;
