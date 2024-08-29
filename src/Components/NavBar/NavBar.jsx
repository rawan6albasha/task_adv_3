import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCalendar, faEnvelope, faMap, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // إدارة حالة الظهور للقائمة

  const handleScroll = () => {
    if (window.scrollY > 900) {
        setIsSticky(true);
    } else {
        setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // دالة لتبديل حالة القائمة عند الضغط على أيقونة القائمة
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={isSticky ? styles.rb_navbar_fixed : styles.rb_navbar_sticky}>
        <div className={`${styles.social} container`}>
          <div className={styles.social1}>
            <a><FontAwesomeIcon icon={faEnvelope} />info@company.com</a>
            <a><FontAwesomeIcon icon={faMap} />Sunny lsles Beach,FL 33160</a>
          </div>
          <div className={styles.social2}>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>

        <div className={`${styles.nav_links} container`}>
          <div className={styles.logo}>
            <h1>VILLA</h1>
          </div>
          
          <div>
            {/* تحديث الحالة عند الضغط على الأيقونة */}
            <FontAwesomeIcon 
              className={styles.bar_svg} 
              icon={faBars} 
              onClick={toggleMenu} 
            />
            {/* استخدام الحالة لتحديد ما إذا كانت القائمة ستظهر أو لا */}
            {isMenuOpen && (
              <div className={`${styles.link_list_Bar} ${isMenuOpen ? styles.open : styles.closed}`}>
                <div className={styles.pages_links_Bar}>
                  <Link to='/'><h4>Home</h4></Link>
                  <Link to="/Properties"><h4>Properties</h4></Link>
                  <Link to='/PropertyDetails'><h4>Property Details</h4></Link>
                  <Link to="/Contact"><h4>Contact Us</h4></Link>
                </div>
                <div className={styles.schedule}>
                  <span><FontAwesomeIcon icon={faCalendar} /></span>
                  <p>Schedule a visit</p>
                </div>
              </div>
            )}
          </div>

          <div className={styles.link_list}>
            <div className={styles.pages_links}>
            <Link to='/'><h4>Home</h4></Link>
                  <Link to="/Properties"><h4>Properties</h4></Link>
                  <Link to='/PropertyDetails'><h4>Property Details</h4></Link>
                  <Link to="/Contact"><h4>Contact Us</h4></Link>
            </div>
            <div className={styles.schedule}>
              <span><FontAwesomeIcon icon={faCalendar} /></span>
              <p>Schedule a visit</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
