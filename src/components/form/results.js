import React from 'react';
import Form from './form.js'

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
                {/* <div id="secdiv">
                
                    <ReactJson name="Headers" src={this.props.header} id="header" />
                    <ReactJson name="Response" src={this.props.body} />
                </div> */}
            </React.Fragment>
        )
    }
}

export default Result;