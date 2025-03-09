import React from 'react';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

function Footer() {
    return (
        <div className="Row bg-dark-subtle pt-2">
            <div className="container small">
                <footer className="row">
                    <div className="col-12 text-center">
                        <div className="d-flex justify-content-center">
                            <div className="h small">developed by ©PuvistyneTech</div>
                            <div className="align-self-center">
                                <a href="https://www.linkedin.com/in/puvistyne-rajasegar-65308a83/" target="_blank"
                                   rel="noopener noreferrer">
                                    <AiFillLinkedin size={20}/>
                                </a>
                                <a href="https://www.instagram.com/puvistyne/" target="_blank"
                                   rel="noopener noreferrer">
                                    <AiFillInstagram size={20}/>
                                </a>
                                <a href="https://github.com/Puvistyne-tech" target="_blank" rel="noopener noreferrer">
                                    <AiFillGithub size={20}/>
                                </a>
                            </div>
                        </div>
                        <p className="small">
                            Contact me at{' '}
                            <a href="mailto:puvistien@gmail.com">puvistien@gmail.com</a>{' '}
                            / <a href="tel:+33766072189">+33 7 66 07 21 89</a>
                        </p>
                        {/* Social Media Icons */}

                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
