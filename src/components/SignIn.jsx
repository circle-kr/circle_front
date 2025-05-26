import axios from 'axios';
import '../SignIn.css'
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import KakaoSignIn from './KakaoSignIn'
import NaverSignIn from './NaverSignIn';
import GoogleSignIn from './GoogleSignIn';

function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });
    const Navigate = useNavigate()

    const onSubmit =  async ({email, password}) => {
      console.log('폼 데이터:', { email, password }); 
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/login`, 
          { email, password }, 
          {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );  
      
      // const { refreshToken } = res.data;
      // localStorage.setItem('refreshToken', refreshToken);
     console.log(res.headers['Authorization']);
      Navigate('/'); 
    } catch (e) {
      console.error('로그인 실패', e);
    }
  };

function signUpClick(){
  Navigate('../SignUp')
}

    return(
    <main className='main sub_main'>
        <div className='sign_in_wrap'>
            <h2>Sign in</h2>
            <div className='sign_in_cont'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>welcome to join circle !</h3>
                    <p className='account'>please enter your account</p>
                    <p className='label'>
                    <label htmlFor="email">Email</label>
                        <input type="text" 
                                id="email" 
                                placeholder='please enter your account'
                                {...register('email', {
                                    required: "email is required",
                                    pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Please enter a valid email format.",
                                    },
                                })}
                        />
                    </p>
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    <p className='label'>
                    <label htmlFor="password">password</label>
                        <input type="password"
                              id="password"
                              {...register("password", {
                                required: "password is required",
                                pattern: {
                                    value: /^.{4,12}$/,
                                    message: "Password must be 4–12 characters."
                                }
                              })} 
                        />
                    </p>
                    {errors.password && <p className="error">{errors.password.message}</p>}
                    <p><button className='sign_in_btn' type='submit'>Sign in</button></p>

                    <div className='account_method'>
                        <hr/>
                        <div>
                            <p>or continue with</p>
                        </div>
                    </div>
                    
                    <div className='sign_in_type'>
                        <GoogleSignIn />
                        <KakaoSignIn />
                        <NaverSignIn />
                    </div>
                    <p className='resigister_go'>Not a account? <span onClick={signUpClick}> Resigiter now</span></p>
                </form>
            </div>
        </div>
    </main>
    )
}
export default SignIn;