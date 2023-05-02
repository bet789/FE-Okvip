import Image from "next/image";
import React from "react";

export default function Brand() {
  return (
    <div className="container">
      <div className="list-brand pt-4">
        <div className="brand-item">
          <Image
            src={"/img_brand/logo-brand-1.png"}
            width={50}
            height={50}
            alt="logo brand "
          />
        </div>
        <div className="brand-item">
          <Image
            src={"/img_brand/logo-brand-2.png"}
            width={77}
            height={66}
            alt="logo brand "
          />
        </div>
        <div className="brand-item">
          <Image
            src={"/img_brand/logo-brand-3.png"}
            width={60}
            height={59}
            alt="logo brand "
          />
        </div>
        <div className="brand-item">
          <Image
            src={"/img_brand/logo-brand-4.png"}
            width={167}
            height={59}
            alt="logo brand "
          />
        </div>
      </div>
    </div>
  );
}
