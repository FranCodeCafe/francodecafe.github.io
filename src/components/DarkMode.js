import React from 'react';
import '../global.css';

class DarkMode extends React.Component{

    myFunction = () => {
        let element = document.body;
        element.classList.toggle("dark-mode");
    }

    render(){
        return(
            <div className="DarkMode">
                <button onclick='myFunction()'>Toggle dark mode</button>
            </div>
        );
    }
}

export default DarkMode;