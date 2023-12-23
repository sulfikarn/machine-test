import Facebook from '../assets/images/facebook.png'
import Google from '../assets/images/google.png'
import Linkidin from '../assets/images/linkidin.png'
import Twitter from '../assets/images/twitter.png'

function Footer() {
    return (
        <div className='footer-wrap'>
            <div className='d-flex justify-content-center mt-5 mb-4'>
                <div className='social-icons'>
                    <img src={Google} alt='google' className="social-icon" />
                </div>
                <div className='social-icons'>
                    <img src={Facebook} alt='facebook' />
                </div>
                <div className='social-icons'>
                    <img src={Linkidin} alt='linkidin' />
                </div>
                <div className='social-icons'>
                    <img src={Twitter} alt='twitter' />
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <p className='footer-title'>Example@email.com </p>
                    <p className='footer-title'>Copyright © 2020 Name. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
