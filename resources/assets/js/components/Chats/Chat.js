import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from "redux";
import moment from 'moment';

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
        this.scrollToDown();
    }

    scrollToDown() {
        let divHeight = $("#messages-list-div").prop("scrollHeight");
        console.log(divHeight);
        //$("#messages-list-div").scrollTo(0);
        //$("#messages-list-div").stop().animate({ scrollTop: $("#messages-list-div").prop("scrollHeight")stop()}, 1000);
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
                    <div className="col-lg-12" id="messages-list-div">
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
