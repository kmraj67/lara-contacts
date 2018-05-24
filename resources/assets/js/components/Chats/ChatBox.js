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
            <div className="input-group">
                <input id="btn-input" name="message" type="text" className="form-control chat-text-box"
                placeholder="Type your message here..." onChange={(e)=>super.handleInput('message', e)}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" id="btn-chat" type="submit">Send</button>
                </div>
            </div>
        );
    }
}
