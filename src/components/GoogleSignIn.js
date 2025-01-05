import React from "react";
import GoogleLogo from '../images/google_icon.svg'

const CLIENT_ID = '497738801433-u7eoovhjf3tb2upr22qfpnq37fvfhfna.apps.googleusercontent.com';
const REDIRECT_URI = "http://localhost:3000/GoogleSignIn";
const SCOPE = "email"; // 이메일 권한 요청
const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
const GoogleSignIn = () => {
    const handleGoogleLogin = () => {
        window.location.href = googleOAuthUrl;
      };
      
    return (
        <div>
           <button
            type="button"
            className="google_login_btn login_btn"
            onClick={() => {
            const width = 500;
            const height = 700;
            const left = (window.innerWidth - width) / 2;
            const top = (window.innerHeight - height) / 2;

            window.open(
                googleOAuthUrl, // 카카오 로그인 URL
                '_blank', // 새 창으로 열기
                `width=${width},height=${height},top=${top},left=${left}` // 팝업 창 크기와 위치 설정
            );
            }}
        >
            <img src={GoogleLogo} alt="구글 로그인" />
  </button>
        </div>
      );
    };

export default GoogleSignIn;

