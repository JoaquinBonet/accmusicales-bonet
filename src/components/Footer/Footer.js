import React from 'react';
import './Footer.css';
import { EnvelopeFill, TelephoneFill, ArrowUp } from 'react-bootstrap-icons'
import { Instagram, Facebook, Youtube, Twitter } from 'react-bootstrap-icons';



export const Footer = () => {

    const [show, setShow] = React.useState(false);
    const [scrollTop, setScrollTop] = React.useState(0);
  
  
    React.useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset;
            if (currentPosition > 500) {
                setShow(true)
            } else {
                setShow(false)
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }
        window.addEventListener("scroll", onScroll);
    }, [scrollTop])


    return <footer className="site-footer">

        <div className="container">

            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h6>Contacto</h6>
                    <ul className="footer-links">
                        <li><EnvelopeFill /> <a href="mailto:lacuevadelguitarrista@gmail.com">lacuevadelguitarrista@gmail.com</a></li>
                        <li><TelephoneFill /><span>+54 011 6168 2523</span></li>

                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">

                    <ul className="footer-links">
                        <li><a href="https://www.google.com" className="icon">
                            <Instagram /> Instagram
                        </a></li>
                        <li><a href="https://www.google.com" className="icon">
                            <Facebook /> Facebook
                        </a></li>
                        <li><a href="https://www.google.com" className="icon">
                            <Youtube /> Youtube
                        </a></li>
                        <li><a href="https://www.google.com" className="icon"><Twitter /> Twitter</a></li>
                        </ul>
                </div>

            </div>
            {show ? <button onClick={() => window.scroll({ top: 0, behavior: 'smooth' })} id="myBtn" title="Go to top"><ArrowUp /></button> : null}
            <hr />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">La Cueva del Guitarrista &copy; 2021
                    </p>
                </div>
            </div>
        </div>
    </footer >
}