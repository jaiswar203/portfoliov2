import "../styles/css/index.css";
import { useEffect, useState } from "react";
import Loader from "../src/components/Loader";

function MyApp({ Component, pageProps }) {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1500);
  }, [showLoader]);
  return !showLoader ? (
      <Component {...pageProps} />
  ) : (
    <Loader />
  );
}

export default MyApp;
