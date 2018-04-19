import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import UserList from './UserList';

export default class User extends Component {

    constructor() {
		super();
		this.state = {
			users: [],
			currentUser: null
		}
    }

    componentDidMount() {
		// fetch('/api/users').then(response => {
		// 	return response.json();
        // }).then(users => {
        // 	this.setState({ users });
        // });
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
