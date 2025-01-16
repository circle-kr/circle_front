import React, { useEffect } from "react";
import GoogleLogo from "../images/google_icon.svg";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=openid%20profile%20email`;

const GoogleSignIn = () => {
  const handleGoogleLogin = () => {
    const width = 500;
    const height = 700;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      GOOGLE_AUTH_URL,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  // 구글 액세스 토큰을 받아오는 함수
  const getAccessToken = async (authorizationCode) => {
    try {
      const response = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          code: authorizationCode,
          client_id: GOOGLE_CLIENT_ID,
          client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET, // 비밀 키 추가
          redirect_uri: REDIRECT_URI,
          grant_type: "authorization_code",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch access token");
      }

      const data = await response.json();
      const { access_token } = data;

      console.log("Access Token:", access_token);

      // 액세스 토큰을 백엔드로 전달
      await sendTokenToBackend(access_token);
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  // 액세스 토큰을 백엔드로 전달하는 함수
  const sendTokenToBackend = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/google/auth", {  // 백엔드 API 엔드포인트 수정
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error("Failed to send token to backend");
      }

      const result = await response.json();
      console.log("Backend Response:", result);
    } catch (error) {
      console.error("Error sending token to backend:", error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      getAccessToken(code);  // 로그인 후 URL에서 authorization code를 받아서 액세스 토큰을 요청
    }
  }, []);

  return (
    <div>
      <button
        type="button"
        className="google_login_btn login_btn"
        onClick={handleGoogleLogin}
      >
        <img src={GoogleLogo} alt="구글 로그인" />
      </button>
    </div>
  );
};

export default GoogleSignIn;
