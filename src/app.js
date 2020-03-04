'use strict ';

import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Result from './components/form/results.js';
import History from './components/history/history.js';
import './scss/app.scss';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: [],
            loading: false,
            current :'', };
    }

    handleUpdate= (data, api) => { 
        let newResponse = this.state.response;
        console.log('api',api);
        console.log('response',newResponse);
    
        newResponse[api] = data ;
        this.setState({response: newResponse});
        this.setState({current: api});
        // console.log('i Hope!', this.state.response);
        // console.log('keys', Object.keys(this.state.response));
      }

      hereWeGoAgain= (api) => {
        let newDo = api ;
        // let data = null ;
        // this.handleUpdate(data ,api);
        console.log('new:', newDo);
        this.setState({current : newDo});
      }
        
    


    render() {
        return (
            <React.Fragment>
                <Header />
                <Route exact path="/">
                    <Result />
                </Route>
{/* 
                <Route exact path="/history">
                    <History data={this.state.response} reDo={this.hereWeGoAgain} />
                </Route> */}
                {/* <Route exact path="/history" >
                    saja
                </Route> */}
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;