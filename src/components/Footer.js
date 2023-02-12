import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

function Footer() {

  const [buttonClick, setButtonClick] = useState('');

  const onClick = () => {
    if(buttonClick != '') {
      setButtonClick('');
      setTimeout(() => {
        //alert('Thank you for subscribing!');
        Swal.fire({
          title: 'Great!',
          text: 'Thank you for subscribing!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: 'indianred',
          
        });
      }, 10);
    }
  }

  const onChange = (e) => {
    setButtonClick(e.target.value);
  }
  

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Fast & Furious community and stay up to date!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={buttonClick}
              onChange={onChange}
            />
            <Button buttonStyle='btn--outline' onClick={onClick} link={'#'} >Subscribe</Button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              F&F Services
              <i class="fas fast-furious"></i>
            </Link>
          </div>
          <small class='website-rights'>F&F Services © 2023</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/fastandfuriousuk/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/thefastsaga/?hl=en'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/user/fastandfuriousmovie?app=desktop'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/TheFastSaga?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/company/fast-and-furious-inc/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;