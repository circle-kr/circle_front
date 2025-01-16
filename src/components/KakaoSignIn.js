import React, { useEffect } from "react";
import KakaoLogo from "../images/kakao_icon.svg";

// 카카오 API 설정
const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
const K_REDIRECT_URI = process.env.REACT_APP_K_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const KakaoSignIn = () => {
  // 카카오 로그인 팝업
  const handleKakaoLogin = () => {
    const width = 500;
    const height = 700;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      kakaoURL,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  // 액세스 토큰을 받아오는 함수
  const getAccessToken = async (authorizationCode) => {
    try {
      const response = await fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: K_REST_API_KEY,
          redirect_uri: K_REDIRECT_URI,
          code: authorizationCode,
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
      const response = await fetch("http://localhost:5000/api/kakao/auth", {
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

  // 리다이렉트된 URL에서 인가 코드 추출하고 액세스 토큰 요청
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      getAccessToken(code);
    }
  }, []);

  return (
    <div>
      <button type="button" className="kakao_login_btn login_btn" onClick={handleKakaoLogin}>
        <img src={KakaoLogo} alt="카카오 로그인" />
      </button>
    </div>
  );
};

export default KakaoSignIn;
