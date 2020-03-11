import React from 'react';
import './styles/Loader.css';

class Loader extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="cup">
                    <div class="loading">&lt; Loading /></div>
                    <div class="handle"></div>
                </div>
            </div>
        );
    }
}

export default Loader;