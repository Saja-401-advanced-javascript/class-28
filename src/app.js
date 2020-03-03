'use strict ';

import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Result from './components/form/results.js';
import './scss/app.scss';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: [] };
    }


    render() {
        return (
            <React.Fragment>
                <Header />
                <Result />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;