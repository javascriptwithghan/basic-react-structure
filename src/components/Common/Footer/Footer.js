import './Footer.css';
import FooterCopy from './FooterCopy/FooterCopy';
import FooterSocial from './FooterSocial/FooterSocial';

function Footer() {
    return (
         <footer>
            <FooterSocial/>
            <FooterCopy />
         </footer>
    );
}

export default Footer;