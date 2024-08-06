import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar-container'>
      <h1 className='navbar-heading'>Tiny URL</h1>
      <Link to={'/'} className='navbar-item'>Home</Link>
      <Link to={'/alllinks'} className='navbar-item'>My Links</Link>
      <Link to={'/'} className='navbar-item'>Generate</Link>
      <Link to={'/login'} className='navbar-item'>Login</Link>
    </div>
  );
}

export default Navbar;
