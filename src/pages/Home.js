import React from 'react';
import './styles/Home.css';
import Hero from '../components/Hero';
import fran_circle from '../images/fran-circle.png';
import about from '../images/header-about-me.png';
import skills from '../images/header-skills.png';
import compromise from '../images/header-compromise.png';

function Home(){
    return(
        <React.Fragment>
            <div className="Home">
                <Hero />
                <section id="about" className="section about">
                    <div className="container">
                    <h1 className="title has-text-centered">
                        <img src={about} alt="About me" height="700" width="700"/>
                    </h1>
                        <div className="columns is-mobile">
                            <div className="column is-7">
                                <p className="p-text">Tengo experiencia en proyectos asociados al medio ambiente. Sin embargo, ahora busco colaborar en el área de mi mayor interés, desarrollo front-end.</p>
                                <p className="p-text">Recientemente me he certificado en desarrollo web online, desarrollo de SPA con JavaScript Vanilla y ReactJS. Aún no tengo experiencia formal trabajando en el área, así que esta página es mi carta de presentación:</p>
                                <p className="p-text">¡Bienvenidos! Esta web está desarrollada con <span className="html">HTML</span>, <span className="css">CSS</span>, <span className="js">JavaScript</span>, <span className="react">ReactJS</span> y <span className="bulma">Bulma</span>.
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-mobile is-multiline">
                                    <div className="column is-12">
                                        <div className="profile-pic">
                                            <img src={fran_circle} alt="Fran Salinas" height="250" width="250" />
                                        </div>
                                    </div>
                                    {/* <div className="column is-12">
                                        <div className="welcome-row">
                                            <p className="welcome-text">¡Bienvenidos! Esta web está desarrollada con <span className="html">HTML</span>, <span className="css">CSS</span>, <span className="js">JavaScript</span>, <span className="react">ReactJS</span> y <span className="bulma">Bulma</span>.
                                            </p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="skills" className="section skills">
                    <div className="container">
                    <h1 className="title has-text-centered">
                        <img src={skills} alt="Skills" height="700" width="700"/>
                    </h1>
                        <div className="columns is-mobile">
                            <div className="column has-text-centered">
                                <div className="courses-button">
                                    <a target="noopener_noreferrer" href="https://drive.google.com/drive/folders/1Le07CRrpDnhmW0MHif4tW6HdAK6RIpxc?usp=sharing" className="button is-danger is-rounded p-text">{/* <i className="fas fa-star"> </i>*/}¡Por aquí!</a>
                                </div>
                            </div>
                            <div className="column is-9">
                                <p className="p-text">Tengo conocimientos en HTML, CSS, JavaScript, ReactJS, PHP y un poco de C++ y Python, pues en etapas anteriores he jugado con Arduino y RaspberryPi.</p>
                                <p className="p-text">Me considero empática y trabajo bien en equipo, entre mis compañeros suelo mantener una comunicación cordial y un ambiente agradable para trabajar.</p>
                                <p className="p-text">Si hay algo que no sepa, preguntaré y buscaré por toda la web, hasta que logre realizarlo. Además, intento mantenerme en constante aprendizaje, dadas las nuevas tecnologías que van surgiendo.</p>
                                <p className="p-text">Desde acá puedes acceder a las certificaciones que he conseguido.</p>
                                <p className="p-text">¡Nunca hay que dejar de aprender!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="work" className="section work">
                    <div className="container">
                    <h1 className="title has-text-centered">
                        <img src={compromise} alt="Compromise" height="700" width="700"/>
                    </h1>
                        {/* <div className="columns is-mobile">
                            <div className="column">
                                <p className="p-text">Si me consideras para tu empresa me comprometeré a cumplir los objetivos y sacar los proyectos adelante.</p>
                            </div>
                            <div className="column">
                                <p className="p-text">Si me consideras como freelance, me comprometeré a plasmar y transmitir todas tus ideas y necesidades en la pantalla.</p>
                            </div>
                        </div> */}
                        <div class="tile is-ancestor is-mobile">
                            <div class="tile is-parent">
                                <div class="tile is-child box">
                                    {/* <p class="title">Empresa</p> */}
                                    <p className="p-text">Si me consideras para tu empresa me comprometeré a cumplir los objetivos y sacar los proyectos adelante.</p>
                                </div>
                            </div>
                            <div class="tile is-parent">
                                <div class="tile is-child box">
                                    {/* <p class="title">Independiente</p> */}
                                    <p className="p-text">Si me consideras como freelance, me comprometeré a plasmar y transmitir todas tus ideas y necesidades en la pantalla.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="section contact">
                    <div className="container has-text-centered">
                        <div className="columns is-multiline">
                            <div className="column">
                            <p className="contact-text">¿Nos tomamos un café?</p>
                                <div className="columns is-mobile">
                                    <div className="column">
                                        <div className="tooltip">
                                            <a target="noopener_noreferrer" href="https://github.com/FranCodeCafe">
                                                <i className="contact-icons fab fa-github fa-3x"></i>
                                            </a>
                                            <span class="tooltiptext">Visita mi GitHub</span>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="tooltip">
                                            <a target="noopener_noreferrer" href="https://www.linkedin.com/in/fransalinascastillo/">
                                                <i className="contact-icons fab fa-linkedin-in fa-3x"></i>
                                            </a>
                                            <span class="tooltiptext">Mi perfil en LinkedIN</span>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="tooltip">
                                            <a target="noopener_noreferrer" href="https://twitter.com/franlitchi">
                                                <i className="contact-icons fab fa-twitter fa-3x"></i>
                                            </a>
                                            <span class="tooltiptext">Mi perfil en Twitter</span>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="tooltip">
                                            <a target="_top" href="mailto:franciscasalinascastillo@gmail.com">
                                                <i className="contact-icons fas fa-envelope fa-3x"></i>
                                            </a>
                                            <span class="tooltiptext">Envíame un correo</span>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="tooltip">
                                            <a target="noopener_noreferrer" href="https://drive.google.com/file/d/1Rx3sY1I5rDjo_K8pfORxjcyL1jY56x_o/view?usp=sharing">
                                                <i className="contact-icons cv fas fa-3x">CV</i>
                                            </a>
                                            <span class="tooltiptext">Descarga mi CV</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}

export default Home;