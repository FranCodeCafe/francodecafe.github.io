import React from 'react';
import './styles/Footer.css';
import bulma__footer from '../images/logo-bulma.png'

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer has-background-dark">
                <div className="container has-text-centered">
                <p className="footer-text">Hecho con &nbsp; <i className="fas fa-heart"></i> &nbsp; y &nbsp;
                    <a href="https://bulma.io">
                        <img className="bulma-logo" src={bulma__footer} alt="Made with Bulma" width="66" height="66" />
                    </a>
                </p>
                </div>
            </footer>
        );
    }
}

export default Footer;