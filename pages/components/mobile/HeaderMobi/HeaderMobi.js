import Head from "next/head";
import Link from "next/link";
import React from "react";
import TopBox from "../../Header/TopBox";

const HeaderMobi = () => {

  return (
    <div>
      <Head>
        <title>
          Okvip.com là diễn đàn chuyên tổng hợp các thông tin, đánh giá những
          nhà cái trực tuyến hot nhất thị trường.
        </title>
        <meta
          name="description"
          content="Phương châm hoạt
          động của Okvip.com chính là đưa ra những đánh giá khách quan, trung
          thực nhất để các bet thủ có thể đưa ra lựa chọn sáng suốt nhất.
          Okvip.com được thành lập từ năm 2010, suốt 13 năm qua, chúng tôi đã
          phục vụ hàng tỷ độc giả nhờ sự công tâm của mình. Không chỉ dựa trên
          số liệu, Okvip.com còn thu thập đánh giá của các chuyên gia và người
          chơi để đưa ra cái nhìn chính xác nhất."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBox />
      <nav className="mobi-banner">
        <div className="logo-mobile">
          <div className="menu-mobile">
            <img
              src="/img_mobile/icon_menu_mobi.png"
              width={24}
              height={24}
            />
          </div>
          <Link
            className="site-brand"
            style={{ cursor: "pointer", display: "flex" }}
            href="/"
          >
            <img
              src="/img_mobile/okvip-logo-mobi.png"
              width={125}
              height={30}
              style={{ objectFit: "contain" }}
            />
          </Link>
          <div className="profile-mobile">
            <img
              src="/img_mobile/icon_profile_mobi.png"
              width={24}
              height={24}
            />
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default HeaderMobi;
