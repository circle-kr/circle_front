import React from 'react'
import '../SignIn.css'
import KakaoSignIn from './KakaoSignIn'
import NaverSignIn from './NaverSignIn';
import GoogleSignIn from './GoogleSignIn';
import {  useNavigate } from 'react-router-dom';

function SignIn() {
    const handleSubmitSignin = (e) => {
        e.preventDefault(); // 폼 제출 방지
        console.log('Form submitted'); // 필요 시 추가 로직 작성
      };

      const Navigate = useNavigate()

      function signUpClick(){
        Navigate('../SignUp')
      }
    return(
    <main className='main sub_main'>
        <div className='sign_in_wrap'>
            <h2>Sign in</h2>
            <div className='sign_in_cont'>
                <form onSubmit={handleSubmitSignin}>
                    <h3>welcome to join circle !</h3>
                    <p className='account'>please enter your account</p>
                    <p><input type="text" name="" id="" placeholder='please enter your account'/></p>
                    <p><input type="text" name="" id="" /></p>
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