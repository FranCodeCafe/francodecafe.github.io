import React from 'react';
import './styles/Navbar.css';
import pink_cup from '../images/pink-cup.png';

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar is-white" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/"><img src={pink_cup} alt="FranCodeCafe_Logo"/><h1 className="logo-text">FranCodeCafé</h1><span className="beta">Beta Version</span></a>

                    <label
                    className="navbar-burger burger"
                    htmlFor="nav-toggle-state"
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </label>
                </div>
                <input type="checkbox" id="nav-toggle-state" />

                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a href="#about" className="navbar-item nav-text">
                            Sobre mí
                        </a>
                        <a href="#skills" className="navbar-item nav-text">
                            Habilidades
                        </a>
                        <a href="#work" className="navbar-item nav-text">
                            Compromiso
                        </a>
                        <a href="#contact" className="navbar-item nav-text">
                            Contacto
                        </a>
                        <div className="navbar-item">
                            <div className="field is-grouped">
                            <p className="control">
                                <button className="button is-dark is-rounded is-small" disabled><i className="fas fa-moon"></i></button>
                            </p>
                            <p className="control">
                                <button className="button is-dark is-rounded is-small nav-text" onClick="darkMode()" disabled>English</button>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar