import Image from "next/image";
import React from "react";

const BestCasino = () => {
  return (
    <div className="container pt-4">
      <div className="title text-center">
        <span>CÁC NHÀ CÁI UY TÍN</span>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Image
            src={"./img_casino/casino_789bet.png"}
            width={590}
            height={215}
            alt="nhà cái 789bet"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <Image
            src={"./img_casino/casino_new88.png"}
            width={590}
            height={215}
            alt="nhà cái new88"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <Image
            src={"./img_casino/casino_hi88.png"}
            width={590}
            height={215}
            alt="nhà cái hi88"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <Image
            src={"./img_casino/casino_shbet.png"}
            width={590}
            height={215}
            alt="nhà cái shbet"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <Image
            src={"./img_casino/casino_f8.png"}
            width={590}
            height={215}
            alt="nhà cái f8bet"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <Image
            src={"./img_casino/casino_jun88.png"}
            width={590}
            height={215}
            alt="nhà cái jun88"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BestCasino;
