import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from "redux";
import moment from 'moment';

import ListMessages from './ListMessages';
import ChatHeader from './ChatHeader';

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

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        let divScrollHeight = $("#messages-list-div")[0].scrollHeight;
        $("#messages-list-div").scrollTop(divScrollHeight);
    }

    handleInput(key, e) {
        var state = Object.assign({}, this.state.message);
        state['message'] = e.target.value;
        this.setState({message: state });
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

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.message != '') {
            axios.post('/messages', this.state.message)
            .then(response => {
                this.setState((prevState)=> ({
                    messages: prevState.messages.concat(response.data.data)
                }));
                document.getElementById('btn-input').value = '';
                this.state.message = '';
                this.scrollToBottom();
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    chatForm() {
        return(            
            <div className="row bottom-section">
                <div className="col-lg-12">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="input-group">
                            <input id="btn-input" name="message" type="text" className="form-control chat-text-box"
                            placeholder="Type your message here..." onChange={(e)=>this.handleInput('message', e)}/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" id="btn-chat" type="submit">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
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

                { this.chatForm() }
            </div>                        
        );
    }

}

if (document.getElementById('chat-section')) {
    ReactDOM.render(<Chat />, document.getElementById('chat-section'));
}
