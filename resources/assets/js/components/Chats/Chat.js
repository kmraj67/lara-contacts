import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from "redux";

//import UserList from './UserList';

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
            <UserList users={this.state.users} />
        );
    }

}

if (document.getElementById('user_page')) {
    ReactDOM.render(<User />, document.getElementById('user_page'));
}
