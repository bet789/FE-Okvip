import Image from "next/image";
import Link from "next/link";
import React from "react";
import Login from "./Login";
import Register from "./Register";

const TopBox = () => {
  return (
    <nav className="top-box pt-2">
      <div className="container d-flex position-relative">
        <div className="logo">
          <Image
            src={"/logo.png"}
            width="150"
            height="53"
            objectFit={"contain"}
            alt="logo okvip"
          />
        </div>
        <div className="position-absolute end-0 pe-2">
          <form action="#" method="post">
            <button type="submit" className="btn-search pe-2">
              <Image
                src={"/search.png"}
                width={20}
                height={20}
                alt="search icon"
              />
            </button>
            <input
              className="search"
              type="text"
              id="search"
              name="search"
              required
              placeholder="Tìm kiếm nhà cái"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default TopBox;
