import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "... Xem thêm" : " Thu gọn"}
      </span>
    </p>
  );
};

export default function CommentMobi() {
  return (
    <div className="comment-mobi">
      <div className="title">
        <p className="text-title">ĐÓNG GÓP Ý KIẾN CÓ THƯỞNG</p>
      </div>
      <div className="input">
        <div className="input-item">
          <p className="title-input">Địa chỉ Email</p>
          <input className="title-input-text" placeholder="Nhập Email" />
        </div>
        <div className="input-item content">
          <p className="title-input">ý kiến của bạn</p>
          <input
            className="title-input-text"
            placeholder="Nhập nội dung cần phản hồi"
          />
        </div>
      </div>
      <div className="des">
        <ReadMore>
          Chức năng phản hồi: Chúng tôi là một công ty cơ chế mở, đối với cả
          khách hàng và nhân viên. Để thực cơ chế mở, chúng tôi đã xây dựng rất
          nhiều chính sách và điều khoản để khái niệm cơ chế mở có thể được thực
          hiện tại chỗ và đến được với mọi người. Đóng góp ý kiến được dựa trên
          ý tưởng này. Ý kiến của bạn rất quan trọng đối với chúng tôi. Hoan
          nghênh bày tỏ bất kỳ ý kiến nào từ quan điểm của bạn, cho dù đó là
          chính sách ưu đãi hay triết lý kinh doanh của chúng tôi. Biểu đạt ý
          kiến của bạn để có cơ hội giành giải thưởng lớn tiền mặt và tiền
          thưởng khuyến mại...
        </ReadMore>
      </div>
      <div className="buttom">
        <button className="buttom-sub">GỬi PHẢN HỒI</button>
      </div>
    </div>
  );
}
