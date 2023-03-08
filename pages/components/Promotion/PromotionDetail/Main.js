import { URL_789BET } from "@/contants";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="col-9 bg-white p-4">
      <h4 className="text-center">[789BET] Thưởng nạp lần đầu</h4>
      <h6 className="text-center"> 2023-02-13 11:34:36 Duyệt：30</h6>
      <div
        className="mt-2"
        style={{ borderBottom: "1px dashed #cbcbcb" }}
      ></div>
      <p>
        Câu lạc bộ 789Bet nạp thẻ cuối năm thưởng siêu khủng, thưởng bút viết
        1%, tiền quà chỉ cần nhân đôi.
      </p>
      <img src="/uu-dai-13.jpg" width="100%" />
      <div className="pt-2">
        <h6> Chi tiết hoạt động:</h6>
        <ol>
          <li>
            Khoản tiền gửi tối thiểu là 100,000 VNĐ và sau khi xác minh, tiền
            thưởng sẽ được phân phối trước 12:00 trưa (UTC+8) của ngày hôm sau;
          </li>
          <li>
            Câu lạc bộ có quyền đóng băng hoặc đóng các tài khoản liên quan mà
            không cần thông báo;
          </li>
          <li>
            Hoạt động này chỉ áp dụng cho các thành viên có một tài khoản, mỗi
            hộ gia đình, mỗi địa chỉ, mỗi địa chỉ email, mỗi số điện thoại, cùng
            một phương thức thanh toán và địa chỉ IP chỉ được hưởng một lần;
          </li>
          <li>
            Để tránh sự khác biệt trong việc hiểu văn bản, 789BET Câu lạc bộ có
            quyền giải thích cuối cùng về hoạt động này và có quyền thay đổi,
            hoãn hoặc hủy bỏ hoạt động.
          </li>
        </ol>
      </div>
      <div className="text-center">
        <Link
          href={URL_789BET}
          target={"_blank"}
          className="text-success text-decoration-underline fs-5 fw-bold"
        >
          Nhập trang web chính thức để nhận được giảm giá
        </Link>
      </div>
      <div
        className="mt-2"
        style={{ borderBottom: "1px dashed #cbcbcb" }}
      ></div>
      <span className="mt-2">
        Trước: Dịch vụ thân mật 1-1 dành cho hộ tống doanh nghiệp
      </span>
    </div>
  );
};

export default Main;
