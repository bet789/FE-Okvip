import React from "react";

const MenuHeaderMobi = () => {
  return (
    <div className="menu-header">
      <div className="menu-header-item">
          <img src="/img_mobile/icon_menu_header/icon_giftbox_mobi.png" width={45} height={50}/>
          <p className="text-menu-header">KHUYẾN MÃI</p>
      </div>
      <div className="menu-header-item">
          <img src="/img_mobile/icon_menu_header/icon_vector_mobi.png" width={45} height={50}/>
          <p className="text-menu-header">GAME HOT</p>
      </div>
      <div className="menu-header-item">
          <img src="/img_mobile/icon_menu_header/icon_member_mobi.png" width={45} height={50}/>
          <p className="text-menu-header">THÀNH VIÊN</p>
      </div>
      <div className="menu-header-item">
          <img src="/img_mobile/icon_menu_header/icon_news_mobi.png" width={45} height={50}/>
          <p className="text-menu-header">KÊNH TIN KHÁC</p>
      </div>
      <div className="menu-header-item">
          <img src="/img_mobile/icon_menu_header/icon_report_mobi.png" width={45} height={50}/>
          <p className="text-menu-header">ĐÓNG GÓP Ý KIẾN</p>
      </div>
    </div>
  );
};

export default MenuHeaderMobi;
