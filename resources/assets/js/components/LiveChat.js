import React, { Component } from 'react';
import ReactDOM from 'react-dom';


//import { WithEmit } from "react-emit";

//import socketIOClient from 'socket.io-client';

import ChatMessages from './ChatMessages';
//import ChatForm from './ChatForm';

export default class LiveChat extends Component {

    constructor(props) {
        //console.log(props);
		super(props);
		this.state = {
			messages: [],
            user: props.user,
			message: '',
            endpoint: 'http://127.0.0.1:6001'
		}
	}

    componentDidMount() {
        let $this = this;
        this.fetchMessages();
        //console.log(this.state);

        // const socket = socketIOClient(this.state.endpoint);
        // socket.on('MessageSent', (e) => {
        //     console.log('Herert');
        // });

        window.Echo.channel('public_chat')
        .listen('MessageSent', (e) => {
            //console.log(e.message);
            //console.log('I am here!');
            this.setState((prevState)=> ({
                messages: prevState.messages.concat(e.message)
            }));
        });

        $("#chat-panel").animate({ scrollTop: $("#chat-panel").prop("scrollHeight")}, 1000);
    }

    componentDidUpdate() {
        $("#chat-panel").animate({ scrollTop: $("#chat-panel").prop("scrollHeight")}, 1000);
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

    handleInput(key, e) {
        var state = Object.assign({}, this.state.message);
        state['message'] = e.target.value;
        this.setState({message: state });
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.message != '') {
            //const socket = socketIOClient(this.state.endpoint);
            this.addMessage();
            // socket.emit('messagesent', {
            //     user: this.user,
            //     message: this.message
            // });
        }
    }

    addMessage() {
        axios.post('/messages', this.state.message)
        .then(response => {
            this.setState((prevState)=> ({
                messages: prevState.messages.concat(response.data.data)
            }));
            document.getElementById('btn-input').value = '';
            this.state.message = '';
            //console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    renderChatForm() {
        return(
            <div className="panel-footer">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-group">
                        <input id="btn-input" type="text" name="message" className="form-control input-sm" placeholder="Type your message here..." onChange={(e)=>this.handleInput('message', e)} />
                        <span className="input-group-btn">
                            <button className="btn btn-primary btn-sm" id="btn-chat">
                                Send
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }

    render() {
        return(
            <div>
                <div id="chat-panel" className="panel-body">
                    <ul className="chat">
                        <ChatMessages messages={this.state.messages} />
                    </ul>
                </div>
                { this.renderChatForm() }
            </div>
        );
    }
}

if (document.getElementById('chat_page')) {
    const elementObj = document.getElementById('chat_page');
    const props = Object.assign({}, elementObj.dataset);

    ReactDOM.render(<LiveChat {...props} />, elementObj);
}
