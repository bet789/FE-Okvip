import Image from "next/image";
import React from "react";

export default function Brand() {
  return (
    <div className="container">
      <div className="list-brand">
        <div className="brand-item">
          <Image
            src={"/img_brand/logo-brand-1.png"}
            width={122}
            height={123}
            alt="logo brand "
          />
        </div>
        <div className="brand-item">
          <Image
            src={"/img_brand/logo-brand-2.png"}
            width={155}
            height={134}
            alt="logo brand "
          />
        </div>
        <div className="brand-item">
          <Image
            src={"/img_brand/logo-brand-3.png"}
            width={120}
            height={119}
            alt="logo brand "
          />
        </div>
        <div className="brand-item">
          <Image
            src={"/img_brand/logo-brand-4.png"}
            width={339}
            height={121}
            alt="logo brand "
          />
        </div>
      </div>
    </div>
  );
}
