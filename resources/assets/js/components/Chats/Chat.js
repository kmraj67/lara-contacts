import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from "redux";

import ListMessages from './ListMessages';
import ChatHeader from './ChatHeader';
import ChatBox from './ChatBox';

export default class Chat extends Component {

    constructor(props) {
		super(props);
		this.state = {
			messages: [],
            user: props.user,
			message: ''
		}
    }

    componentDidMount() {
        let $this = this;
        this.fetchMessages();

        window.Echo.channel('public_chat')
        .listen('MessageSent', (e) => {
            this.setState((prevState)=> ({
                messages: prevState.messages.concat(e.message)
            }));
        });
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
        return (
            <div>
                <ChatHeader chat_users={this.state.user} />
                <div className="row middle-section">
                    <div className="col-lg-12">
                        <ListMessages messages={this.state.messages} />
                    </div>
                </div>
                <ChatBox />
            </div>
        );
    }

}

if (document.getElementById('chat-section')) {
    ReactDOM.render(<Chat />, document.getElementById('chat-section'));
}
