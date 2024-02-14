import "./footer.css";
import UpFooter from './upfooter';
import DownFooter from './downFooter';

const Footer = () => {
  return (
    <div className="footer">
          <UpFooter/>
          <DownFooter/>
    </div>
  );
};

export default Footer;