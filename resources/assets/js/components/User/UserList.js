import React, { Component } from 'react';

export default class UserList extends Component {

    constructor(props) {
        //console.log(props);
        super(props);
        this.state = {
			users: []
		}
    }

    componentDidMount() {
		fetch('/api/users').then(response => {
			return response.json();
        }).then(users => {
        	this.setState({ users });
        });
    }

    renderUsers() {
    	if(this.state.users.length < 1) {
            return (
                <tr>
                    <td colSpan="4">No User Found!</td>
                </tr>
            );
        }

        return this.state.users.map(user => {
            return (
    			/* When using list you need to specify a key
    			* attribute that is unique for each list item
    			*/
    			<tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>&nbsp;</td>
                </tr>
    		);
    	})
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">User List</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th width="20%">First Name</th>
                                    <th width="20%">Last Name</th>
                                    <th width="40%">Email</th>
                                    <th width="20%" className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.renderUsers() }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
