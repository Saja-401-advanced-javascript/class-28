import React from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div className="ovserlay">
                <div className="model">
                    <div className="header">
                        <span className="title">{this.props.title} </span>
                        <button className="close" onClick={this.props.close}>X</button>
                    </div>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal;