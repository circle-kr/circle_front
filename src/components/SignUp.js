import React, { useState } from 'react';
import axios from 'axios';
import '../SignUp.css';
import checkIcon from '../images/check_icon.svg';
import visibilityIcon from '../images/visibility_icon.svg'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import KakaoSignIn from './KakaoSignIn'
import NaverSignIn from './NaverSignIn';
import GoogleSignIn from './GoogleSignIn';

function SignUp() {
  const { register, handleSubmit, watch,setError, clearErrors,formState: { errors } } = useForm({ mode: 'onChange' });
  const [nickNameIsDuplicate, setNickNameIsDuplicate] = useState(false); 
  const [emailIsDuplicate, setEmailIsDuplicate] = useState(false);  // 중복 여부 상태
  const [showPwd, setShowPwd] = useState(false);
  const Navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
  };

  const pwd = watch("password"); // 비밀번호 값을 추적

  function togglePwdVisibility(){
    setShowPwd((prev) => !prev); 
  }

  

  function SignInClick(){
    Navigate('../SignIn')
  }

  const handleDuplicateCheck = async (field, value) => {
    try {
      // 백엔드 API를 호출하여 중복 여부를 확인
      const response = await axios.post('/api/check-duplicate', { [field]: value });

      if (response.data.isDuplicate) {
        setError(field, { type: 'manual', message: `${field} is already taken` });
        if (field === 'nickname') {
          setNickNameIsDuplicate(true);  // 닉네임 중복
        } else if (field === 'email') {
          setEmailIsDuplicate(true);  // 이메일 중복
        }
      } else {
        clearErrors(field); // 중복이 아니면 오류 제거
        if (field === 'nickname') {
          setNickNameIsDuplicate(false);
        } else if (field === 'email') {
          setEmailIsDuplicate(false);
        }
      }
    } catch (error) {
      console.error(error);
      setError(field, { type: 'manual', message: 'Failed to check duplicate' });
    }
  };
  return (
    <main className="main sub_main">
      <div className="sign_up_wrap">
        <h2>Sign up</h2>
        <div className="sign_up_cont">
          <form onSubmit={handleSubmit(onSubmit)} id='form_sign_up'>
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
                onClick={() => handleDuplicateCheck('nickname', document.getElementById('nickname').value)}
                ><img src={checkIcon} alt='닉네임 중복체크'/>Duplicate check</button>
                 {nickNameIsDuplicate && <p>Nickname is already taken.</p>}
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
                    
                    <button className='duplicate_btn' type="button"><img src={checkIcon} alt='이메일 중복체크'
                     onClick={() => handleDuplicateCheck('email', document.getElementById('email').value)}
                    />Duplicate check</button>
                     {emailIsDuplicate && <p>email is already taken.</p>}
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
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/,
                    message: 'Enter 8-12 characters, including letters, numbers, symbols.'
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
