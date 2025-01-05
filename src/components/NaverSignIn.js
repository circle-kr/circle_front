import React from "react";
import NaverLogo from '../images/naver_icon.svg'

const NaverSignIn = () => {
  const NAVER_CLIENT_ID = 'Hqc_zAHtk7ax_PftKk2P'; // 발급받은 클라이언트 아이디
  const REDIRECT_URI = "http://localhost:3000/NaverSignIn"; // Callback URL
  const STATE = "flase";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return  <button
  type="button"
  className="naver_login_btn login_btn"
  onClick={() => {
    const width = 500;
    const height = 700;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
        NAVER_AUTH_URL, // 카카오 로그인 URL
      '_blank', // 새 창으로 열기
      `width=${width},height=${height},top=${top},left=${left}` // 팝업 창 크기와 위치 설정
    );
  }}
><img src={NaverLogo} alt="" /></button>;
};

export default NaverSignIn;
