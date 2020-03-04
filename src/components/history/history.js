import React from 'react';
import { Link } from 'react-router-dom';


class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>
                    <ul>

                        {Object.keys(this.props.data).map((val, idx) => {

                            return <li>
                                <Link to="/lab28" key={idx} onClick={() => this.props.reDo(val)}>{val}</Link>;
                
              </li>;

                        })}
                    </ul>
                </div>
            </>
        );
    }

}


export default History;