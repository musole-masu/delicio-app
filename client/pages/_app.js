import axios from "axios";
import "../public/style/globals.css";
import Layout from "../components/layout/Layout";
import buildClient from "../api/build-client";

const MyApp = ({ Component, pageProps, currentUser }) => {
  return (
    <Layout currentUser={currentUser}>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data,
  };
};
export default MyApp;
