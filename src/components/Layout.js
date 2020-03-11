import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
/* import DarkMode from './DarkMode'; */
/* import GoToTop from './GoToTop'; */


function Layout(props){
    return (
        <div>
            {/* <GoToTop scrollStepInPx="10" delayInMs="3" /> */}
            {/* <DarkMode /> */}
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
}


export default Layout;