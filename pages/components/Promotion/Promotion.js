import React from "react";
import PromotionFooter from "./PromotionFooter";
import PromotionHead from "./PromotionHead";
import PromotionMain from "./PromotionMain";

const Promotion = () => {
  return (
    <div className="bg-light pb-4">
      <PromotionHead />
      <PromotionMain />
      <PromotionFooter />
    </div>
  );
};

export default Promotion;
