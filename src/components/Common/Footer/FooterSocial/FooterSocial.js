import './FooterSocial.css';
import fb from '../../../../assets/facebook.png';
import insta from '../../../../assets/instagram.png';

function FooterSocial() {
    return (
        <div className='socialIcons'>
          <img src={fb} />&nbsp;<img src={insta} />
        </div>
    )
}

export default FooterSocial;