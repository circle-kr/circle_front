import React from 'react'
import '../Footer.css'
function Footer() {
    return(
        <footer className='footer'>
            <div className='footer_wrap'>
                <div className='footer_cont'>
                    <div className='footer_01'>
                        <h2>Circle</h2>
                        <p>" We connect, we unite-one circle, one world. "</p>
                    </div>
                    
                    <address>
                        <div className='footer_02'>
                            <h3>Contact Us</h3>
                            <p>sohyun32253@naver.com</p>
                        </div>
                        
                        <div className='footer_03'>
                            <h3>Privacy Policy l Terms of Service</h3>
                            <p>© 2024 Circle. All rights reserved.</p>
                        </div>
                    </address>
                    
                </div>
            </div>
        </footer>
        
    )
}
export default Footer;