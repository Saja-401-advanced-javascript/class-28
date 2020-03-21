'use strict ';

import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Result from './components/form/results.js';
import History from './components/history/history.js';
import './scss/app.scss';


class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }        
    }

    saveToHistory = history => {
        console.log('oooooooooooooooo');
        
        this.setState({history})
    }
 
    
    



    render() {
        return (
            <React.Fragment>
                <Header />
                <Route exact path="/">
                    <Result saveToHistory={this.saveToHistory}  />
                </Route>

                <Route exact path="/history">
                    <History info={this.state.history}  />
                </Route>

                <Footer />
            </React.Fragment>
        )
    }
}

export default App;