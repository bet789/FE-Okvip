import Image from "next/image";
import React from "react";

const BestCasino = () => {
  return (
    <div className="container pt-4 pb-4 best-casino">
      <div className="title text-center">
        <span>CÁC NHÀ CÁI UY TÍN</span>
      </div>
      <div className="row">
        <div className="col-md-6 position-relative">
          <Image
            src={"/img_casino/A1.png"}
            width={590}
            height={215}
            alt="nhà cái 789bet"
          />
          <span>CASINO - TÔI CHỈ CHỌN 789BET</span>
        </div>
        <div className="col-md-6 position-relative">
          <Image
            src={"/img_casino/A2.png"}
            width={590}
            height={215}
            alt="nhà cái new88"
          />
          <span>NƠI CẢM XÚC KHÔNG GIỚI HẠN</span>
        </div>
        <div className="col-md-6 position-relative">
          <Image
            src={"/img_casino/A3.png"}
            width={590}
            height={215}
            alt="nhà cái hi88"
          />
          <span>CƯỢC GIẢI TRÍ, KIẾM TIỀN TỶ</span>
        </div>
        <div className="col-md-6 position-relative">
          <Image
            src={"/img_casino/A4.png"}
            width={590}
            height={215}
            alt="nhà cái shbet"
          />
          <span>THẾ GIỚI CASINO TRONG TAY BẠN</span>
        </div>
        <div className="col-md-6 position-relative">
          <Image
            src={"/img_casino/A5.png"}
            width={590}
            height={215}
            alt="nhà cái f8bet"
          />
          <span>THỬ NGAY VẬN MAY SẼ ĐẾN</span>
        </div>
        <div className="col-md-6 position-relative">
          <Image
            src={"/img_casino/A6.png"}
            width={590}
            height={215}
            alt="nhà cái jun88"
          />
          <span>BÙNG CHÁY KHÁT KHAO TRONG BẠN</span>
        </div>
      </div>
    </div>
  );
};

export default BestCasino;
