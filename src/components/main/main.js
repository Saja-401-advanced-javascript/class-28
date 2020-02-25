'use strict ';

import React from 'react';


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            url :'',
            action : get
        }
    }}
function Form (props){

    handleUrl = async e => {
        e.preventDefault();
        const raw = await fetch("")
        const data = await raw.json();
        const result = data.results.map(records => {
            return new Data(records);
        })
        props.handler(result)
    }
    return(
      <  form onSubmit = {handleUrl}>
          <button>
              {props.prompt}
          </button>
      </form>
    )
    
}


function Data(data){
    this.header = data.header;
    this.response = data.response;
}
    
