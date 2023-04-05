import { useEffect } from "react";
import "@/styles/globals.css";
import "@/styles/Header.css";
import "@/styles/Main.css";
import "@/styles/Evaluation.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />;
}
