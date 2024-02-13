import React from 'react';

function Footer() {
    return (
        <div className="Row bg-dark-subtle pt-2">
            <div className="container small">
                <footer className="row">
                    <div className="col-12 text-center">
                        <p className="h small">©PuvistyneTech</p>
                        {/* Direct link to email */}
                        <p className="small">
                            Contact me at{' '}
                            <a href="mailto:puvistien@gmail.com">puvistien@gmail.com</a>{' '}
                            / <a href="tel:+33766072189">+33 7 66 07 21 89</a>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
