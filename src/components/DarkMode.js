import React from 'react';
import '../pages/styles/Home.css';

class DarkMode extends React.Component{
    render(){
        return(
            function myFunction() {
                var element = document.body;
                element.classList.toggle("dark-mode");
            }
        );
    }
}

export default DarkMode;