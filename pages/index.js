import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HeaderMobi from "./components/mobile/HeaderMobi/HeaderMobi";
import MainMobi from "./components/mobile/MainMobi/MainMobi";
import MenuMobi from "./components/mobile/MenuMobi/MenuMobi";

export default function Home() {
  return (
    <>
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
      <div>
        <div className="screen-desktop">
          <Header />
          <Main />
          <Footer />
        </div>
        <div className="screen-mobile">
          <HeaderMobi />
          <MainMobi />
          <MenuMobi />
        </div>
      </div>
    </>
  );
}
