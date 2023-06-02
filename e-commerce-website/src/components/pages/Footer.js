import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/LogoWhite1.png';
import "../styles/Footer.css";


const Footer = () => {
  const navigate = useNavigate(); 

  const handleCategoryClick = (category) => {
    let apiCategory = category.toLowerCase();
    if (apiCategory === "women clothing") {
      apiCategory = "women's clothing";
    } else if (apiCategory === "men clothing") {
      apiCategory = "men's clothing";
    }
    navigate(`/results/${apiCategory}`);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <footer className="text-center text-lg-start bg-dark text-center text-white" id="footer-border">
      <section className="d-flex justify-content-center justify-content-lg-between"></section>

      <section>
        <div className="container text-center text-md-start mt-5">

          <div className="row mt-3">

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
              <a href="/" onClick={handleLogoClick}>
                <img src={Logo} alt="Levels Logo" className="h-15" />
              </a>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <a onClick={() => handleCategoryClick("MEN CLOTHING")} href="#!">
                  Men Clothing
                </a>
              </p>
              <p className="mt-1">
                <a onClick={() => handleCategoryClick("WOMEN CLOTHING")} href="#!" >
                  Women Clothing
                </a>
              </p>
              <p className="mt-1">
                <a onClick={() => handleCategoryClick('jewelery')} href="#!">
                  Jewellery
                </a>
              </p>
              <p className="mt-1">
                <a onClick={() => handleCategoryClick('electronics')} href="#!">
                  Electronics
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p className='link'>
                <a href="/" onClick={handleLogoClick} className="text-reset"> About Us</a>
              </p>
              <p className="link mt-1">
                <a href="/" onClick={handleLogoClick}className="text-reset">Privacy Policy</a>
              </p>
              <p className=" link mt-1">
                <a href="/" onClick={handleLogoClick} className="text-reset">Cookies Policy</a>
              </p>
              <p className="link mt-1">
                <a href="/" onClick={handleLogoClick} className="text-reset">Terms & Conditions</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Birmingham, B5 5SY, UK
              </p>
              <p className="mt-1">
                <i className="fas fa-envelope me-3"></i>
                info@Levels.com
              </p>
              <p className="mt-1">
                <i className="fas fa-phone me-3"></i> + 44 141 496 0889
              </p>
              <p className="mt-1">
                <i className="fas fa-print me-3"></i> + 44 141 496 0888
              </p>
            </div>
          </div>

        </div>
      </section>

      <footer className="bg-dark text-center text-white" id="contact-us">

        <div className="container p-4 pb-0">

          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-twitter"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-google"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-instagram"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>


        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          Copyright © 2023
          <a className="text-white" href="https://mdbootstrap.com/"> Levels.com</a>
        </div>

      </footer>
    </footer>
  );
};

export default Footer;
