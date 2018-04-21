import React, { Component } from 'react';

export default class ChatForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
			user: []
		}
    }

    sendMessage() {
        this.$emit('messagesent', {
            user: this.user,
            message: this.newMessage
        });

        this.newMessage = ''
    }

    render() {
        return(
            <div className="input-group">
                <input id="btn-input" type="text" name="message" className="form-control input-sm" placeholder="Type your message here..." v-model="newMessage" @keyup.enter="sendMessage">

                <span className="input-group-btn">
                    <button className="btn btn-primary btn-sm" id="btn-chat" onClick={this.sendMessage.bind(this)}>
                        Send
                    </button>
                </span>
            </div>
        );
    }
}
