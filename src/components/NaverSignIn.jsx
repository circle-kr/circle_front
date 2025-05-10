import React from "react";
import NaverLogo from '../images/naver_icon.svg'

const NaverSignIn = () => {
  const NAVER_CLIENT_ID = 'Hqc_zAHtk7ax_PftKk2P'; 
  const REDIRECT_URI = "http://localhost:3000/NaverSignIn"; 
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
        NAVER_AUTH_URL, 
      '_blank', 
      `width=${width},height=${height},top=${top},left=${left}` 
    );
  }}
><img src={NaverLogo} alt="" /></button>;
};

export default NaverSignIn;
