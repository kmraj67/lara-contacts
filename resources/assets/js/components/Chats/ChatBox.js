import React, { Component } from 'react';

//import { WithEmit } from "react-emit";

export default class ChatBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
			user: []
		}
    }

    render() {
        return(
            <div className="row bottom-section">
                <div className="col-lg-12">
                    <div className="input-group">
                        <input type="text" className="form-control chat-text-box"
                        placeholder="Type your message here..."/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
