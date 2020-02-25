'use strict ';

import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
// import Main from './components/main/main.js';
//  import './app.scss';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { results: []};
    }

    handleGo = results => {
        this.setState({results});
    }
    render(){
        return(
            <React.Fragment>
                <Header />

                <Footer />




            </React.Fragment>
        )
    }
}

export default App;