import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const menuTab = [
  {
    name: "Kiểm tra",
    link: "/everyone",
  },
  {
    name: "Nhiệm vụ đánh giá",
    link: "/everyone/task-rate",
  },
  {
    name: "Báo cáo đánh giá",
    link: "/everyone/report",
  },
  {
    name: "Chứng nhận đánh giá",
    link: "/everyone/certification",
  },
];
const Tab = () => {
  const router = useRouter();
  return (
    <div className="container pt-4">
      <ul className="tabs align-items-center nav nav-pills nav-fill bg-white mb-4 ">
        {menuTab?.map((item, index) => (
          <li className="nav-item border-end" key={index}>
            <Link
              href={"/" + item.link}
              className={
                router.asPath === item.link ? " nav-link active rounded-0" : ""
              }
              aria-current="page"
            >
              {item.name}
            </Link>
          </li>
        ))}
        {/* <li className="nav-item border">
          <Link
            className="nav-link active rounded-0"
            aria-current="page"
            href="/everyone"
            style={{ backgroundColor: "#009c6a" }}
          >
            Kiểm tra
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Tab;
