import React, { Component } from 'react';

//import { WithEmit } from "react-emit";

export default class ChatForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
			user: []
		}
    }

    sendMessage() {
        Echo.private('chat')
        .listen('MessageSent', (e) => {
          this.messages.push({
            message: e.message.message,
            user: e.user
          });
        });

        // triggerEvent('messagesent', {
        //     user: this.user,
        //     message: this.newMessage
        // });
        // this.emit('messagesent', {
        //     user: this.user,
        //     message: this.newMessage
        // });
        console.log('Here!');
        this.newMessage = ''
    }

    render() {
        return(
            <div className="panel-footer">
                <div className="input-group">
                    <input id="btn-input" type="text" name="message" className="form-control input-sm"
                        placeholder="Type your message here..." />
                    <span className="input-group-btn">
                        <button className="btn btn-primary btn-sm" id="btn-chat" onClick={ this.sendMessage.bind(this) }>
                            Send
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}
