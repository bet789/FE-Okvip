import Head from "next/head";
import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Promotion from "./components/Promotion/Promotion";

const PromotionPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Promotion />
      <Footer />
    </>
  );
};

export default PromotionPage;
