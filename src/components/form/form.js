import React from 'react';
import ReactJson from 'react-json-view';
import Loader from 'react-loader-spinner';
import { If, Then, Else } from '../if/if.js';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: 'get',
            header: {},
            body: {},
            loader: true,
            open: true,
            history:  {}
        }

    }

    handleHistory = event => {
        let url = this.state.url;
        let source = url
        let history = this.state.history;
        let uniq = Object.keys(this.state.history).length;
        history[uniq] =source;
        this.setState({history})
        console.log('rrrrrrr', this.state.history);
        
    }

    handleUrl = async event => {
        this.setState({ open: false })
        event.preventDefault();
        await (await fetch(`${this.state.url}`)).json()
            .then(response => {
                let header = { 'Content-Type': 'application/json' };
                let body = response;
                this.setState({ body, header });
                this.setState({ loader: false })
                this.setState({ data: { header, body } })

                // this.props.saveToHistory(this.state.history);

            }).catch(e => {
                let body = { error: "wrong Api" };
                let header = {};
                this.setState({ header, body });
            });
            console.log('kkkkkkk', this.state);
            
            
    };


    handleChange = event => {
        let prop = event.target.name;
        let value = event.target.value
        this.setState({ [prop]: value });

    }

    toggleOpen = () => {
        this.setState({ open: !this.state.open })
    }




    render() {
        return (
            <>
                <main>
                    <form onSubmit={this.handleUrl} >
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
                        <If condition={this.state.open}>
                            <Then>

                            </Then>
                            <Else>
                                <If condition={this.state.loader}>
                                    <Then>
                                        <Loader
                                            type="Circles"
                                            color="#00BFFF"
                                            height={100}
                                            width={100}
                                        />
                                    </Then>
                                    <Else>
                                        <ReactJson name="Headers" src={this.state.header} id="header" />
                                        <ReactJson name="Response" src={this.state.body} />
                                    </Else>
                                </If>
                            </Else>

                        </If>
                    </div>

                </main>

            </>
        )
    }
}



export default Form;