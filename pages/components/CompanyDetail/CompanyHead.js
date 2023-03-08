import { URL_789BET } from "@/contants";
import Link from "next/link";
import React from "react";

const CompanyHead = () => {
  return (
    <div className="container bg-white ">
      <div className="row">
        <div className="col-6 col-md-6 p-4">
          <div className="row">
            <div className="col-3">
              <img src="/789bet.jpg" width="100%" className="rounded-4" />
            </div>
            <div className="col-9">
              <span className="fw-bold fs-5 pe-2">789BET</span>
              <img src="/icon-14.png" />
              <p>Nền tảng: Giải trí trực tuyến</p>
              <p>Đảm bảo: Chứng nhận Okvip đảm bảo 5 triệu</p>
              <span className="pe-2">xếp hạng tổng thể :</span>
              <span className="fs-4 fw-bold" style={{ color: "#fa6400" }}>
                9.8{" "}
              </span>
              <span className="text-success text-decoration-underline">
                144 bình luận
              </span>
            </div>
            <div className="col-12">
              <div>
                <span>Tiền gửi: </span>
                <span className="text-danger pe-3">9.6 điểm</span>
                <span>Giảm giá: </span>
                <span className="text-danger  pe-3">9.6 điểm</span>
                <span>Rút tiền： </span>
                <span className="text-danger  pe-3">9.6 điểm</span>
              </div>
              <div>
                <span>Sòng bạc: </span>
                <span className="text-danger pe-3">9.6 điểm</span>
                <span>Trò chơi: </span>
                <span className="text-danger  pe-3">9.6 điểm</span>
                <span>Giải trí trực tiếp: </span>
                <span className="text-danger  pe-3">9.6 điểm</span>
                <span>Bắn cá: </span>
                <span className="text-danger  pe-3">9.6 điểm</span>
                <span>Đá gà: </span>
                <span className="text-danger  pe-3">9.6分</span>
              </div>
              <div>
                <span>Trang web chính thức:</span>
                <Link
                  target={"_blank"}
                  className="border-success rounded-3 p-1"
                  href={URL_789BET}
                >
                  <img src="/icon-17.png" alt="" />
                  <span className="text-success">Địa chỉ 1</span>
                </Link>
              </div>
              <div
                style={{ height: "1px", borderBottom: "1px dashed #959595" }}
                className="p-2"
              ></div>
              <div className="pt-4">
                <button className="btn btn-success rounded-pill p-1 w-25">
                  <img src="/icon-18.png" />
                  Viết bình luận
                </button>
                <span className="ps-5">
                  Viết đánh giá để nhận mã và đổi lấy tiền mặt
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6">
          <p className="fs-5 fw-bold">Hồ sơ công ty</p>
          <div
            style={{ height: "1px", borderBottom: "1px dashed #959595" }}
          ></div>
          <span>
            789BET là một địa chỉ cá cược uy tín, đã có hơn 10 năm kinh nghiệm
            trên thị trường cá cược trực tuyến. Trong những năm hoạt động,
            789BET đã chứng tỏ được đẳng cấp vượt trội thông qua những trò chơi
            uy tín, tỷ lệ trả thưởng cao, rút nạp sòng phẳng. Vượt qua hàng loạt
            cái tên đình đám khác, 789BET đã trở thành nhà cái được bet thủ tin
            tưởng nhất hiện nay. Mặc dù đã là cái tên lão làng trên thị trường
            nhưng 789BET vẫn luôn không ngừng đổi mới, tập trung phát huy những
            ưu điểm và khắc phục các thiếu sót nhằm phục vụ người chơi tốt nhất
            có thể.
          </span>
          <p className="fs-5 fw-bold">Thông tin cơ bản</p>
          <div
            style={{ height: "1px", borderBottom: "1px dashed #959595" }}
          ></div>
          <div className="row pt-4">
            <div className="col-6">
              <span>Tên đầy đủ của công ty: </span>
              <span className="fw-bold">789BET</span>
              <br></br>
              <span>Thành lập: </span>
              <span className="fw-bold">30 năm</span>
              <br></br>
              <span>Giấy phép chơi game: </span>
              <span className="fw-bold">Philippines</span>
            </div>
            <div className="col-6">
              <span>Mở tài khoản tiền gửi đầu tiên: </span>
              <span className="fw-bold">30.0%</span>
              <br></br>
              <span>Chiết Khấu: </span>
              <span className="fw-bold">1.2%</span>
              <br></br>
              <span>Số người đang hoạt động: </span>
              <span className="fw-bold">hơn 10000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHead;
