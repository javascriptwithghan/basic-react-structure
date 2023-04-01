import './Logo.css';
import logo from '../../../../assets/brand.png';

function Logo() {
   return (
      <div className='logo'>
          <img src={logo} />
       </div>
   )
}

export default Logo;