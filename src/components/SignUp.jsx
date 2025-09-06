import React, { useState } from 'react';
import '../SignUp.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import checkIcon from '../images/check_icon.svg';
import visibilityIcon from '../images/visibility_icon.svg'
import KakaoSignIn from './KakaoSignIn'
import NaverSignIn from './NaverSignIn';
import GoogleSignIn from './GoogleSignIn';

function SignUp() {
  const { register, handleSubmit, watch, setFocus, formState: { errors } } = useForm({ mode: 'onChange' });
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(null);
  const [isEmailAvailable, setIsEmailAvailable] = useState(null); 
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
 
  const nicknameCheck = async () => {
    const nickname = watch("nickName");
    try {
      const response = await axios.get(
        `https://e820-222-110-102-40.ngrok-free.app/api/users/signup/nickname?nickname=${nickname}`
      );

      console.log("닉네임:", response.data.data.nickname);

      if (response.status === 200) {
        alert("사용 가능한 닉네임입니다.");
        setIsNicknameAvailable(true);
      } 
    } catch (error) {
      if (error.response?.status === 409) {
        alert("사용할 수 없는 닉네임입니다.");
        setFocus("nickName");
        setIsNicknameAvailable(false);
      } else {
        console.error("닉네임 중복 확인 중 오류:", error);
        alert("오류가 발생하였습니다.");
      }
    }
};

  const emailCheck = async () => {
    const email = watch("email"); 
    try {
      const response = await axios.get(
        `https://e820-222-110-102-40.ngrok-free.app/api/users/signup/email?email=${email}`
      );

      if (response.status === 200) {
        alert("사용 가능한 이메일입니다.");
        setIsEmailAvailable(true);
      }
    } catch (error) {
      if (error.response?.status === 409) {
        alert("사용할 수 없는 이메일입니다.");
        setFocus("email");
        setIsEmailAvailable(false);
      } else {
        console.error("이메일 중복 확인 중 오류:", error);
        alert("오류가 발생하였습니다.");
      }
    }
  }

  const pwd = watch("password"); 

  function togglePwdVisibility() {
    setShowPwd((prev) => !prev);
  }

  function SignInClick() {
    navigate('../SignIn');
  }

  const onSubmit = async (data) => {
    if (isNicknameAvailable !== true) {
      alert("닉네임 중복 확인이 필요합니다.");
      return;
    }

    if (isEmailAvailable !== true) {
      alert("이메일 중복 확인이 필요합니다.");
      return;
    }

    console.log(data);
    if (!isNicknameAvailable) {
      alert("닉네임 중복 확인이 필요합니다.");
      return;
    }

    if (!isEmailAvailable) {
      alert("이메일 중복 확인이 필요합니다.");
      return;
    }

    try {
      const response = await axios.post(
        'https://e820-222-110-102-40.ngrok-free.app/api/users/signup',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          nickname: data.nickName,
          email: data.email,
          password: data.password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status === 201) {
        alert('회원가입 성공!');
        navigate('/SignIn'); 
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입에 실패했습니다.');
      if (error.response) {
        console.error("응답 데이터:", error.response.data);
        console.error("응답 상태:", error.response.status);
        console.error("응답 헤더:", error.response.headers);
      } else if (error.request) {
        console.error("요청 데이터:", error.request);
      } else {
        console.error("에러 메시지:", error.message);
      }
    }
  };
  
  return (
    <main className="main sub_main">
      <div className="sign_up_wrap">
        <h2>Sign up</h2>
        <div className="sign_up_cont">
          <form onSubmit={handleSubmit(onSubmit)} id='form_sign_up' method='post'>
            <h3>Create your account</h3>
            <p>Please enter your account</p>
            <div className="account_method">
              <hr />
              <div>
                <p>Or continue with</p>
              </div>
            </div>
            <div className='sign_in_type'>
                <GoogleSignIn />
                <KakaoSignIn />
                <NaverSignIn />
            </div>
           <div>
               <label htmlFor="firstname">First name</label>
               <input id="firstname"  
                {...register("firstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "First name should only contain letters."
                  },
                })}
                />
                {errors.firstName && <p className="error">{errors.firstName.message}</p>}
           </div>

           <div>
               <label htmlFor="lastname">Last name</label>
               <input id="lastname"
               {...register("lastName", {
                required: "Last name is required",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Last name should only contain letters."
                },
              })}
               />
               {errors.lastName && <p className="error">{errors.lastName.message}</p>}
           </div>
           <div className='btn_wrap_form'>
               <label htmlFor="nickname">Nick name</label>
               <div className='d_flex'>
                <input id="nickname" className='w_237' 
                {...register("nickName",
                   {
                    required: "nick name is required",
                  validate: {
                    startsWithLetter: (value) =>
                      /^[a-zA-Z]/.test(value) || "Nickname must start with a letter. Examples: 'John_123', 'JaneDoe'",
                    validFormat: (value) =>
                      /^[a-zA-Z][a-zA-Z0-9_]{3,11}$/.test(value) ||
                      "Enter 4-12 characters, including letters, numbers, and “_”",
                  },
                })}
                />
                <button className='duplicate_btn'
                 type="button"
                 onClick={nicknameCheck}>
                 <img src={checkIcon} alt='닉네임 중복체크' />Duplicate check</button>
                 {isNicknameAvailable === false && (
                  <p className="error">Nickname is already taken.</p>
                )}
               </div>
               {errors.nickName && <p className="error">{errors.nickName.message}</p>}
           </div>
           <div className='btn_wrap_form'>
               <label htmlFor="email">Email</label>
                <div className='d_flex'>
                    <input id="email" className='w_237'
                    {...register('email', {
                      required: "email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email format.",
                      },
                    })}
                    />
                    
                    <button className='duplicate_btn' 
                     type="button" 
                     onClick={emailCheck}>
                      <img src={checkIcon} alt='이메일 중복체크'
                      />Duplicate check</button>
                     {isEmailAvailable === false && (
                      <p className="error">Email is already taken.</p>
                    )}
               </div>
               {errors.email && <p className="error">{errors.email.message}</p>}
           </div>
           <div>
               <label htmlFor="password" className='align_center'>Password <img src={visibilityIcon} alt="비밀번호 표시" className='visibility_btn'  onClick={togglePwdVisibility}/></label>
               <input id="password"
                type={showPwd ? 'text' : 'password'} 
               {...register('password', {
                required: "password is required",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/,
                    message: 'Enter 8-15 characters, including letters, numbers, symbols.'
                }
              })}
               />
               {errors.password && <p className="error">{errors.password.message}</p>}
           </div>
           <div>
               <button type='submit' className='sign_up_btn'>Sign up</button>
           </div>
           <p className='sign_in_back'>Have a account? <span onClick={SignInClick}>Sign in now</span></p>
          </form>
        </div>
      </div>
    </main>
  );
}
export default SignUp;
