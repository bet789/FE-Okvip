import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import TopBox from "../../Header/TopBox";

const isBrowser = () => typeof window !== "undefined";

const HeaderMobi = () => {
  const [scrollY, setScrollY] = useState(0);
  const [navMenu, setNavMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickMenuMobile = () => {
    setNavMenu(!navMenu);
  };
  const handleOutSideMenu = (e) => {
    setNavMenu(false);
  };
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
      <nav
        className={`${scrollY > 100 ? "mobi-banner sticky" : "mobi-banner"}`}
      >
        <div className="logo-mobile">
          <div className="menu-mobile" onClick={handleClickMenuMobile}>
            <img
              src="/img_mobile/icon_menu_mobi.png"
              width={24}
              height={24}
              alt=""
            />
          </div>
          <Link
            className="site-brand"
            style={{ cursor: "pointer", display: "flex" }}
            href="/"
          >
            {scrollY > 100 ? (
              <img
                src="/img_mobile/logo_reve.png"
                width={140}
                height={40}
                style={{ objectFit: "contain" }}
                alt=""
              />
            ) : (
              <img
                src="/img_mobile/okvip-logo-mobi.png"
                width={140}
                height={40}
                style={{ objectFit: "contain" }}
                alt=""
              />
            )}
          </Link>
          {/* <div className="profile-mobile">
            <img
              src="/img_mobile/icon_profile_mobi.png"
              width={24}
              height={24}
              alt=""
            />
          </div> */}
        </div>
        {navMenu === true ? (
          <div className="menu-mobile p-0" onClick={handleOutSideMenu}>
            <div className="nav-menu-mobile">
              <div className="list-nav-menu w-100 h-100">
                <ul className="nav-mobile">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      <img
                        src="/img_mobile/icon_menu_header/promotion.png"
                        width="20"
                        height="20"
                        className="me-2"
                        style={{ objectFit: "contain" }}
                      />
                      KHUYẾN MÃI
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <img
                        src="/img_mobile/icon_menu_header/game-hot.png"
                        width="20"
                        height="20"
                        className="me-2"
                        style={{ objectFit: "contain" }}
                      />
                      GAME HOT
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link" href="#" role="button">
                      <img
                        src="/img_mobile/icon_menu_header/icon_member_mobi.png"
                        width="20"
                        height="20"
                        className="me-2"
                        style={{ objectFit: "contain" }}
                      />
                      THÀNH VIÊN
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">
                      <img
                        src="/img_mobile/icon_menu_header/icon_news_mobi.png"
                        width="20"
                        height="20"
                        className="me-2"
                        style={{ objectFit: "contain" }}
                      />
                      KÊNH TIN KHÁC
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">
                      <img
                        src="/img_mobile/icon_menu_header/icon_report_mobi.png"
                        width="20"
                        height="20"
                        className="me-2"
                        style={{ objectFit: "contain" }}
                      />
                      TUYỂN DỤNG
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">
                      <img
                        src="/img_mobile/icon_menu_header/icon_report_mobi.png"
                        width="20"
                        height="20"
                        className="me-2"
                        style={{ objectFit: "contain" }}
                      />
                      XEM PHIM 18+
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">
                      <img
                        src="/img_mobile/icon_menu_header/icon_report_mobi.png"
                        width="20"
                        height="20"
                        className="me-2"
                        style={{ objectFit: "contain" }}
                      />
                      ĐÓNG GÓP Ý KIẾN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default HeaderMobi;
