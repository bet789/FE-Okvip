import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopHead = () => {
  return (
    <div className="container overflow-hidden pt-4 top-head">
      <div className="list-btn-head">
        <button className="btn-item">
          <Image
            src={"/icon_btn/giftbox.png"}
            width={32}
            height={38}
            alt="icon khuyến mãi"
          />
          <span>KHUYẾN MÃI</span>
        </button>
        <button className="btn-item">
          <Image
            src={"/icon_btn/Vector.png"}
            width={31}
            height={38}
            alt="icon game hot"
          />
          <span>GAME HOT</span>
        </button>
        <button className="btn-item">
          <Image
            src={"/icon_btn/member.png"}
            width={47}
            height={38}
            alt="icon thành viên"
          />
          <span>THÀNH VIÊN</span>
        </button>
        <button className="btn-item">
          <Image
            src={"/icon_btn/News.png"}
            width={39}
            height={37}
            alt="icon kênh tin khác"
          />
          <span>KÊNH TIN KHÁC</span>
        </button>
        <button className="btn-item">
          <Image
            src={"/icon_btn/Report.png"}
            width={31}
            height={38}
            alt="icon đóng góp ý kiến"
          />
          <span>ĐÓNG GÓP Ý KIẾN</span>
        </button>
      </div>
    </div>
  );
};

export default TopHead;
