import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestCasino = () => {
  return (
    <div className="container pt-4 pb-4 best-casino">
      <div className="title text-center">
        <span>CÁC NHÀ CÁI UY TÍN</span>
      </div>
      <div className="row">
        <div className="col-md-6 position-relative">
          <Link href={"https://789bet11.com"}>
            <Image
              src={"/img_casino/A1.png"}
              width={590}
              height={215}
              alt="nhà cái 789bet"
            />
            <span>CASINO - TÔI CHỈ CHỌN 789BET</span>
          </Link>
        </div>
        <div className="col-md-6 position-relative">
          <Link href={"https://NEW88.AI"}>
            <Image
              src={"/img_casino/A2.png"}
              width={590}
              height={215}
              alt="nhà cái new88"
            />
            <span>NƠI CẢM XÚC KHÔNG GIỚI HẠN</span>
          </Link>
        </div>
        <div className="col-md-6 position-relative">
          <Link href={"https://Jun88.tv"}>
            <Image
              src={"/img_casino/A6.png"}
              width={590}
              height={215}
              alt="nhà cái jun88"
            />
            <span>BÙNG CHÁY KHÁT KHAO TRONG BẠN</span>
          </Link>
        </div>

        <div className="col-md-6 position-relative">
          <Link href={"https://SHVIET.COM"}>
            <Image
              src={"/img_casino/A4.png"}
              width={590}
              height={215}
              alt="nhà cái shbet"
            />
            <span>THẾ GIỚI CASINO TRONG TAY BẠN</span>
          </Link>
        </div>
        <div className="col-md-6 position-relative">
          <Link href={"https://F8bet.win"}>
            <Image
              src={"/img_casino/A5.png"}
              width={590}
              height={215}
              alt="nhà cái f8bet"
            />
            <span>THỬ NGAY VẬN MAY SẼ ĐẾN</span>
          </Link>
        </div>
        <div className="col-md-6 position-relative">
          <Link href={"https://Hi88.vin"}>
            <Image
              src={"/img_casino/A3.png"}
              width={590}
              height={215}
              alt="nhà cái hi88"
            />
            <span>CƯỢC GIẢI TRÍ, KIẾM TIỀN TỶ</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestCasino;
