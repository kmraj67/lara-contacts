  import React, { Component } from 'react';

export default class UserList extends Component {

    constructor(props) {
        //console.log(props);
        super(props);
        this.state = {
			users: [],
            url: '/api/users',
            pagination: []
		}
    }

    componentDidMount() {
        this.fetchUsers();

        // fetch(this.state.url).then(response => {
		// 	return response.json();
        // }).then(users => {
        // 	this.setState({ users });
        // });
    }

    fetchUsers() {
        let $this = this;
        axios.get($this.state.url).then(response => {
            $this.setState({
                users: response.data,
                url: response.data.next_page_url
            });

            $this.makePagination(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    loadMore() {
        this.setState({
            url: this.state.pagination.next_page_url
        });

        this.fetchUsers();
    }

    loadNext() {
        this.setState({
            url: this.state.pagination.next_page_url
        });

        this.fetchUsers();
    }

    loadPrev() {
        this.setState({
            url: this.state.pagination.prev_page_url
        });

        this.fetchUsers();
    }

    makePagination(data) {
        let pagination = {
            current_page: data.current_page,
            last_page: data.last_page,
            next_page_url: data.next_page_url,
            prev_page_url: data.prev_page_url,
        }

        this.setState({
            pagination: pagination
        })
    }

    renderUsers() {
    	if(this.state.users.length < 1) {
            return (
                <tr>
                    <td colSpan="4">No User Found!</td>
                </tr>
            );
        }

        return this.state.users.data.map(user => {
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
                        <button className="btn btn-primary" onClick={this.loadPrev.bind(this)} >Prev</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-primary" onClick={this.loadNext.bind(this)} >Next</button>
                    </div>
                </div>
            </div>
        );
    }
}
