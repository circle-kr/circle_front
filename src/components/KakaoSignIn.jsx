import React from "react";
import KakaoLogo from '../images/kakao_icon.svg'

const K_REST_API_KEY = 'b1c454cb4d06b91714027340c3035f56';
const K_REDIRECT_URI = `http://localhost:3000/kakaoSignIn`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const KakaoSignIn = () => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div>
       <button
    type="button"
    className="kakao_login_btn login_btn"
    onClick={() => {
      const width = 500;
      const height = 700;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;

      window.open(
        kakaoURL, 
        '_blank', 
        `width=${width},height=${height},top=${top},left=${left}` 
      );
    }}
  >
    <img src={KakaoLogo} alt="카카오 로그인" />
  </button>
    </div>
  );
};

export default KakaoSignIn;
