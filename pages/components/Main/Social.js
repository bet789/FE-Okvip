import Image from "next/image";
import React from "react";

export default function Social() {
  return (
    <div className="social">
      <div className="list-social">
        <div className="social-item">
          <Image
            src={"./img_social/social-fb.png"}
            width={19}
            height={35}
            alt="social facebook"
          />
        </div>
        <div className="social-item">
          <Image
            src={"./img_social/social-insta.png"}
            width={35}
            height={35}
            alt="social insta"
          />
        </div>
        <div className="social-item">
          <Image
            src={"./img_social/social-twiter.png"}
            width={39}
            height={33}
            alt="social twiter"
          />
        </div>
        <div className="social-item">
          <Image
            src={"./img_social/social-pi.png"}
            width={30}
            height={35}
            alt="social p"
          />
        </div>
        <div className="social-item">
          <Image
            src={"./img_social/social-tiktok.png"}
            width={29}
            height={34}
            alt="social tiktok"
          />
        </div>
        <div className="social-item">
          <Image
            src={"./img_social/social-talk.png"}
            width={33}
            height={33}
            alt="social talk"
          />
        </div>
        <div className="social-item">
          <Image
            src={"./img_social/social-ytb.png"}
            width={40}
            height={28}
            alt="social youtube"
          />
        </div>
        <div className="social-item">
          <Image
            src={"./img_social/social-tele.png"}
            width={43}
            height={35}
            alt="social telegram"
          />
        </div>
        <div className="social-item">
          <Image
            src={"./img_social/social-zalo.png"}
            width={48}
            height={19}
            alt="social zalo"
          />
        </div>
      </div>
    </div>
  );
}
