import React from "react";

const CommentMobi = () => {
  return (
    <div className="comment-mobi">
      <div className="title">
        <p className="text-title">ĐÓNG GÓP Ý KIẾN</p>
      </div>
      <div className="input">
        <div className="input-item">
          <p className="title-input">Địa chỉ Email</p>
          <span className="title-input-text">Nhập Email</span>
        </div>
        <div className="input-item content">
          <p className="title-input">ý kiến của bạn</p>
          <span className="title-input-text">Nhập nội dung cần phản hồi</span>
        </div>
      </div>
      <div className="buttom">
        <button className="buttom-sub">GỬi PHẢN HỒI</button>
      </div>
    </div>
  );
};

export default CommentMobi;
