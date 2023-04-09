import React, { useEffect, useState } from "react";

const MenuMobi = () => {
  const[isHome, setIsHome] = useState(true);
  const[isCar, setIsCar] = useState(false);
  const[isGift, setIsGift] = useState(false);
  const[isPhone, setIsPhone] = useState(false);
  const[isAccount, setIsAccount] = useState(false);

  const onClickCheck = (value) => {
    console.log("value",value)
    switch (value) {
      case "isHome":
        setIsHome(true);
        setIsCar(false);
        setIsGift(false);
        setIsPhone(false);
        setIsAccount(false);
        break;
      case "isCar":
        setIsHome(false);
        setIsCar(true);
        setIsGift(false);
        setIsPhone(false);
        setIsAccount(false);
        break;
      case "isGift":
        setIsHome(false);
        setIsCar(false);
        setIsGift(true);
        setIsPhone(false);
        setIsAccount(false);
        break;
      case "isPhone":
        setIsHome(false);
        setIsCar(false);
        setIsGift(false);
        setIsPhone(true);
        setIsAccount(false);
        break;
      case "isAccount":
        setIsHome(false);
        setIsCar(false);
        setIsGift(false);
        setIsPhone(false);
        setIsAccount(true);
        break;
      default:
        setIsHome(true);
        setIsCar(false);
        setIsGift(false);
        setIsPhone(false);
        setIsAccount(false);
        break;
    }
  }

  return (
    <div className="menu-mobi">
        <div className="menu-mobi-item" onClick={()=>onClickCheck("isHome")}>
          {
            isHome ? 
            <>
              <img src="/img_mobile/menu_mobi/check.png" className="home-check"/>
              <img src="/img_mobile/menu_mobi/home_active.png" className="menu-mobi-icon"/>
              <p className="text-menu-mobi-check">TRANG CHỦ</p>
            </>
            :
            <>
              <img src="/img_mobile/menu_mobi/home.png" className="menu-mobi-icon"/>
              <p className="text-menu-mobi-uncheck">TRANG CHỦ</p>
            </>
          }
        </div>

        <div className="menu-mobi-item" onClick={()=>onClickCheck("isCar")}>
          {
            isCar ? 
            <>
              <img src="/img_mobile/menu_mobi/check.png" className="car-check"/>
              <img src="/img_mobile/icon_menu_header/game-hot-active.png" className="menu-mobi-icon" width="30" height="26"/>
              <p className="text-menu-mobi-check">GAME HOT</p>
            </>
            :
            <>
              <img src="/img_mobile/icon_menu_header/icon_vector_mobi.png" className="menu-mobi-icon" width="30" height="26" />
              <p className="text-menu-mobi-uncheck">GAME HOT</p>
            </>
          }
        </div>

        <div className="menu-mobi-item" onClick={()=>onClickCheck("isGift")}>
          {
            isGift ? 
            <>
              <img src="/img_mobile/menu_mobi/check.png" className="gift-check"/>
              <img src="/img_mobile/menu_mobi/gift_active.png" className="menu-mobi-icon"/>
              <p className="text-menu-mobi-check">KHUYẾN MÃI</p>
            </>
            :
            <>
              <img src="/img_mobile/menu_mobi/gift.png" className="menu-mobi-icon"/>
              <p className="text-menu-mobi-uncheck">KHUYẾN MÃI</p>
            </>
          }
        </div>

        <div className="menu-mobi-item" onClick={()=>onClickCheck("isPhone")}>
          {
            isPhone ? 
            <>
              <img src="/img_mobile/menu_mobi/check.png" className="phone-check"/>
              <img src="/img_mobile/menu_mobi/phone_active.png" className="menu-mobi-icon"/>
              <p className="text-menu-mobi-check">CSKH</p>
            </>
            :
            <>
              <img src="/img_mobile/menu_mobi/phone.png" className="menu-mobi-icon"/>
              <p className="text-menu-mobi-uncheck">CSKH</p>
            </>
          }
        </div>

        <div className="menu-mobi-item" onClick={()=>onClickCheck("isAccount")}>
          {
            isAccount ? 
            <>
              <img src="/img_mobile/menu_mobi/check.png" className="account-check"/>
              <img src="/img_mobile/icon_menu_header/kenh-tin-khac-active.png" className="menu-mobi-icon"/>
              <p className="text-menu-mobi-check">KÊNH TIN KHÁC</p>
            </>
            :
            <>
              <img src="/img_mobile/icon_menu_header/icon_news_mobi.png" className="menu-mobi-icon"/>
              <p className="text-menu-mobi-uncheck">KÊNH TIN KHÁC</p>
            </>
          }
        </div>
    </div>
  );
};

export default MenuMobi;
