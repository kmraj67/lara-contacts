import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Contact from './Contact';
import AddContact from './AddContact';

export default class Main extends Component {

	constructor() {
		super();
		//Initialize the state in the constructor
		this.state = {
			contacts: [],
			currentContact: null
		}

        this.handleAddContact = this.handleAddContact.bind(this);
	}

	/*componentDidMount() is a lifecycle method
	* that gets called after the component is rendered
	*/
	componentDidMount() {
		/* fetch API in action */
		fetch('/api/contacts').then(response => {
			return response.json();
        }).then(contacts => {
        	//Fetched contact is stored in the state
        	this.setState({ contacts });
        });
    }

    renderContacts() {
    	if(this.state.contacts.length < 1) {
            return (
                <tr>
                    <td colSpan="2">No Contacts Found!</td>
                </tr>
            );
        }

        return this.state.contacts.map(contact => {
            return (
    			/* When using list you need to specify a key
    			* attribute that is unique for each list item
    			*/
    			<tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td className="text-center">
                    	<div className="btn-group">
                    		<button onClick={
                () =>this.handleClick(contact)} type="button" className="btn btn-primary">View</button>
                    		<button onClick={
                () =>this.handleUpdateClick(contact)} type="button" className="btn btn-success">Edit</button>
                    		<button onClick={
                () =>this.handleDelete(contact)} type="button" className="btn btn-danger">Delete</button>
						</div>
                    </td>
                </tr>
    		);
    	})
    }

    handleClick(contact) {
    	//handleClick is used to set the state
    	//console.log('Here! '+contact);
    	this.setState({currentContact:contact});
    	//console.log(this.state.currentContact);
    }

    handleUpdateClick(contact) {
        //this.setState({currentContact:contact});
    }

    handleAddContact(contact) {

        contact.mobile = Number(contact.mobile);
        /*Fetch API for post request */
        fetch( 'api/contacts/', {
            method:'post',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(response => {
            return response.json();
        })
        .then( data => {
            //update the state of contacts and currentContact
            this.setState((prevState)=> ({
                contacts: prevState.contacts.concat(data),
                currentContact : data
            }))
        })

    }

    handleDelete(contact) {
        //console.log(contact.id);
        /* */
        if(confirm("Are You Sure to delete this?")) {

            const currentContact = contact; //this.state.currentContact;
            fetch( 'api/contacts/' + contact.id,
            { method: 'delete' })
            .then(response => {
                // Duplicate the array and filter out the item to be deleted
                var array = this.state.contacts.filter(function(item) {
                    return item !== currentContact
                });

                this.setState({ contacts: array, currentContact: null});

            });
        }
         /* */
    }

    handleUpdate(contact) {
        const currentContact = this.state.currentContact;
        fetch( 'api/contacts/' + currentContact.id, {
            method:'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(response => {
            return response.json();
        })
        .then( data => {
            /* Updating the state */
            var array = this.state.contacts.filter(function(item) {
                return item !== currentContact
            })
            this.setState((prevState)=> ({
                contacts: array.concat(contact),
                currentContact : contact
            }))
        })
    }

    render() {
        return (
        	<div className="row">
                <div className="col-sm-4">
                    <div className="row">
                        <h2> All Contacts </h2>
                    </div>
	        		<table className="table table-bordered table-striped">
			            <thead>
			                <tr>
			                    <th>Name</th>
			                    <th className="text-center">Action</th>
			                </tr>
			            </thead>
			            <tbody>
			                { this.renderContacts() }
			            </tbody>
			        </table>
	            </div>

                <AddContact onAdd={this.handleAddContact} newContact={this.state.currentContact} />

                <Contact contact={this.state.currentContact} />
            </div>
        );
    }
}

if (document.getElementById('contact_app')) {
    ReactDOM.render(<Main />, document.getElementById('contact_app'));
}
