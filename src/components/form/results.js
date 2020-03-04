import React from 'react';
import Form from './form.js';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {},
            body: {}
        }

    }

    render() {
        return (

            <React.Fragment>
                <Form />
           
            </React.Fragment>
        )
    }
}

export default Result;