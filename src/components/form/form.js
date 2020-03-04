import React from 'react';
import ReactJson from 'react-json-view';
import { Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { If, Then, Else } from '../if/if.js';
import History from '../history/history.js';

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
        }
        // console.log('kkkkkkkkk',this.state.body);

    }


    handleUrl = async event => {
        this.setState({ open: false })
        event.preventDefault();
        await (await fetch(`${this.state.url}`)).json()
            .then(response => {
                let header = { 'Content-Type': 'application/json' };
                console.log('pppppp', header);
                let body = response;
                // console.log('reessss', this.state.body);
                this.setState({ body, header });
                this.setState({ loader: false })

            }).catch(e => {
                let body = { error: "wrong Api" };
                let header = {};
                this.setState({ header, body });
            });

    };


    handleChange = event => {
        let prop = event.target.name;
        let value = event.target.value
        this.setState({ [prop]: value });

    }

    toggleOpen = event => {
        this.setState({ open: !this.state.open })
    }

    handleHistory = (api, data) => {
        let newAPI = this.state.responses;
        newAPI[api] = data;
        this.setState({ responses: newAPI });
        this.setState({ current: api })
        console.log(this.state.responses);
        
    }



    render() {
        return (
            <>
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
                <Route exact path="/history">
                    <History data={this.state.responses} />
                </Route>
                </>
        )
    }
}



export default Form;