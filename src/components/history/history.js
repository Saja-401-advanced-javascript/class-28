import React from 'react';
import { Route, Router } from 'react-router-dom';
import List from '../list/list.js';

const History = props => {
    let history = props.info && Object.values(props.info).map((val,idx) => {
        return(
            <li>
                <p key={idx}>{val.url}</p>
            </li>
        )
    })
    return(
        <aside>
          <h3>History</h3>
          <Route exact path="/history" render={() => <List>{history}</List>}></Route>
        </aside>
      );
}



export default History