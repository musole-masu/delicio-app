import "../style/globals.css";
import Header from "../components/Layout/Header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="relative">
      <div className="relative md:fixed w-full inset-0">
        <Header />
      </div>

      <div className="bg-yellow-50 h-screen">
        <div className="max-w-screen-2xl mx-auto pt-28">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default MyApp;
