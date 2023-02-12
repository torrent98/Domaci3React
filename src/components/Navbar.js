import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({num}) {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Fast&Furious Services
            <i class="fas fast-furious"></i>
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/appointments'
                className='nav-links'
              >
                Appointments
              </Link>
            </li> 
            <li className='nav-item'>
              <div>
              <p
               
                className='nav-links1'
              >
                {num}
              </p>
              </div>
            </li> 
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;