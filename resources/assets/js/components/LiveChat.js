import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ChatMessages from './ChatMessages';

export default class LiveChat extends Component {

    constructor() {
		super();
		this.state = {
			messages: [],
			currentMessages: null
		}
	}

    componentDidMount() {
        this.fetchMessages();
    }

    fetchMessages() {
        let $this = this;
        axios.get('/messages').then(response => {
            $this.setState({messages: response.data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
            <ul className="chat">
                <ChatMessages messages={this.state.messages} />
            </ul>
        );
    }
}

if (document.getElementById('chat_page')) {
    ReactDOM.render(<LiveChat />, document.getElementById('chat_page'));
}
