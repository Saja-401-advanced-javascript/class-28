import React from 'react';
import ReactJson from 'react-json-view';
// import superagent from 'superagent';
// import { render } from 'enzyme';



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: 'get',
            header: {},
            body: {},
        }
    }


    handleUrl = async event => {
        event.preventDefault();
        await (await fetch(`${this.state.url}`)).json()
            .then(response => {
                let header = { 'Content-Type': 'application/json' };
                // console.log('pppppp', header);               
                let body = response;
                // console.log('reessss', body);
                this.setState({ body, header });
            })
        
    };


    handleChange = event => {
        let prop = event.target.name;
        let value = event.target.value
        this.setState({ [prop]: value });

    }

    render() {
        return (
            <main>

                <form onSubmit={this.handleUrl}>
                    <section>
                        <input onChange={this.handleChange} type="text" name="url" value={this.state.url} />
                        <div id="div">
                        <button className="method"> GET</button>
                        <button className="method"> POST</button>
                        <button className="method"> PUT</button>
                        <button className="method"> PATCH</button>
                        <button className="method"> DELETE</button>
                        </div>
                        <button type="submit" id="go">Gooo</button>
                    </section>
                </form>
                <div id="secdiv">
                    <ReactJson name="Headers" src={this.state.header} id="header" />
                    <ReactJson name="Response" src={this.state.body} />
                </div>
            </main>
        )
    }
}



export default Form;