import React from "react";
import BannerMobi from "./BannerMobi";
import CommentMobi from "./CommentMobi";
import FooterMobi from "./FooterMobi";
import LoginRegisterMobi from "./LoginRegisterMobi";
import MenuHeaderMobi from "./MenuHeaderMobi";
import SliderMobi from "./SliderMobi";
import TopHeadMobi from "./TopHeadMobi";

const MainMobi = () => {
  return (
    <div className="bg-light main">
      <BannerMobi/>
      <LoginRegisterMobi/>
      <MenuHeaderMobi/>
      <CommentMobi/>
      <SliderMobi/>
      <TopHeadMobi/>
      <FooterMobi/>
    </div>
  );
};

export default MainMobi;
