import { URL_789BET, URL_789BET_DIENDAN, URL_API } from "@/contants";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TopBox from "./TopBox";

const listMenu = [
  { name: "Trang chủ", slug: "trang-chu", link: "/" },
  {
    name: "Đánh Giá - Chứng Chận",
    slug: "danh-gia-chung-nhan",
    link: "/evaluate",
  },
  { name: "Kiểm Chứng", slug: "kiem-chung", link: "/everyone" },
  { name: "Ưu Đãi", slug: "uu-dai", link: "/promotion" },
];
const Header = () => {
  const [menu, setMenu] = useState();
  const router = useRouter();
  const getMenu = async () => {
    const response = await fetch(`${URL_API}/api/menu/getAll`);
    const data = await response.json();
    setMenu(response?.data?.data ?? []);
  };

  useEffect(() => {
    getMenu();
  }, []);
  return (
    <div>
      <TopBox />
      <nav className="navbar navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img
              src="/logo.png"
              alt=""
              className="d-inline-block align-text-top"
              width="150px"
            />
          </Link>
          <form className="d-flex">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Tìm kiếm sòng bạc: tên, trò chơi, rút ​​tiền, gửi tiền, v.v."
              aria-label="Search"
              style={{ width: "400px" }}
            />
            <button className="btn btn-success rounded-0" type="submit">
              Tìm kiếm
            </button>
          </form>
          <div className="nav-right d-flex pt-2">
            <div className=" text-center pe-2">
              <img
                src="/icon-1.png"
                alt=""
                className="d-inline-block align-text-top"
              />
              <p style={{ fontSize: "14px" }}>Khuyến nghị có thẩm quyền</p>
            </div>
            <div className=" text-center pe-2" href="#">
              <img
                src="/icon-2.png"
                alt=""
                className="d-inline-block align-text-top"
              />
              <p style={{ fontSize: "14px" }}>Đánh giá chất lượng</p>
            </div>
            <div className=" text-center pe-2" href="#">
              <img
                src="/icon-3.png"
                alt=""
                className="d-inline-block align-items-center"
              />
              <p style={{ fontSize: "14px" }}>An toàn và không phải lo lắng</p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container">
          <div
            className="collapse navbar-collapse justify-content-center fs-4"
            id="navbarNav"
          >
            <ul className="navbar-nav menu gap-5">
              {listMenu?.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    href={"/" + item.link}
                    className={
                      router.asPath === item.link
                        ? " link-success fw-bold border-bottom"
                        : ""
                    }
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li className="nav-item">
                <Link href={URL_789BET} target={"_blank"}>
                  Trung Tâm Mua Sắm
                </Link>
              </li>
              <li className="nav-item">
                <Link href={URL_789BET_DIENDAN} target={"_blank"}>
                  Diễn Đàn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
