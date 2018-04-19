import React, { Component } from 'react';
//import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

export default class AddContact extends Component {

	constructor(props) {
		//console.log(props);
		super(props);
		/* Initialize the state. */
		this.state = {
			newContact: {
				name: '',
				mobile: '',
				address1: '',
				address2: ''
			},
			errors: {}
		}

		//Boilerplate code for binding methods with `this`
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	handleValidation(){
		let fields = this.state.newContact;
		let errors = {};
		let formIsValid = true;

		//Name
		if(!fields["name"]){
			formIsValid = false;
			errors["name"] = "Name is required.";

		} else if(typeof fields["name"] !== "undefined"){

			if(!fields["name"].match(/^[a-zA-Z ]+$/)){
				formIsValid = false;
				errors["name"] = "Only letters with space";
			}
		}

		//Mobile
		if(!fields["mobile"]){
			formIsValid = false;
			errors["mobile"] = "Mobile is required.";
		}

		if(typeof fields["mobile"] !== "undefined"){
			if(!fields["mobile"].match(/^[0-9]+$/)){
				formIsValid = false;
				errors["mobile"] = "Only digits";
			}
		}

		/*
		//Email
		if(!fields["email"]){
			formIsValid = false;
			errors["email"] = "Email is required.";
		}

		if(typeof fields["email"] !== "undefined"){
			let lastAtPos = fields["email"].lastIndexOf('@');
			let lastDotPos = fields["email"].lastIndexOf('.');

			if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
				formIsValid = false;
				errors["email"] = "Email is not valid";
			}
		}
		*/
		if(!fields["address1"]){
			formIsValid = false;
			errors["address1"] = "Address1 is required.";
		}

		if(!fields["address2"]){
			formIsValid = false;
			errors["address2"] = "Address2 is required.";
		}

		this.setState({errors: errors});
		return formIsValid;
	}

	/* This method dynamically accepts inputs and stores it in the state */
	handleInput(key, e) {
		/*Duplicating and updating the state */
		var state = Object.assign({}, this.state.newContact);
		state[key] = e.target.value;
		this.setState({newContact: state });
	}

	/* This method is invoked when submit button is pressed */
	handleSubmit(e) {
		//preventDefault prevents page reload
		e.preventDefault();
		/*A call back to the onAdd props. The current
		*state is passed as a param
		*/
		if(this.handleValidation()) {
			//alert("Form submitted");
			this.props.onAdd(this.state.newContact);
			this.state.newContact = {
				name: '',
				mobile: '',
				address1: '',
				address2: ''
			};
			//this.mainInput.value = "";
		} else {
			//alert("Form has errors.")
		}
	}

	render() {
		const divStyle = {
		/*Code omitted for brevity */ }

		return(
			<div className="col-sm-4">
				<div className="row">
					<h2> Add New Contact </h2>
				</div>
				<div className="row">
					<form className="form-horizontal" onSubmit={this.handleSubmit}>
			            <div className="form-group">
			                <label className="control-label col-sm-12" htmlFor="name">Name:</label>
			                <div className="col-sm-12">
			                    <input type="text" className="form-control" maxLength="255" id="name" onChange={(e)=>this.handleInput('name',e)}
			                    	value={this.state.newContact["name"]} />
			                    <span style={{color: "red"}}>{this.state.errors["name"]}</span>
			                </div>
			            </div>

			            <div className="form-group">
			                <label className="control-label col-sm-12" htmlFor="mobile">Mobile:</label>
			                <div className="col-sm-12">
			                    <input type="text" className="form-control" id="mobile" maxLength="10" onChange={(e)=>this.handleInput('mobile',e)} value={this.state.newContact["mobile"]} />
			                    <span style={{color: "red"}}>{this.state.errors["mobile"]}</span>
			                </div>
			            </div>

			            <div className="form-group">
			                <label className="control-label col-sm-12" htmlFor="address1">Address1:</label>
			                <div className="col-sm-12">
			                    <input type="text" className="form-control" id="address1" maxLength="255" onChange={(e)=>this.handleInput('address1',e)} value={this.state.newContact["address1"]} />
			                    <span style={{color: "red"}}>{this.state.errors["address1"]}</span>
			                </div>
			            </div>

			            <div className="form-group">
			                <label className="control-label col-sm-12" htmlFor="address2">Address2:</label>
			                <div className="col-sm-12">
			                    <input type="text" className="form-control" id="address2" maxLength="255" onChange={(e)=>this.handleInput('address2',e)} value={this.state.newContact["address2"]} />
			                    <span style={{color: "red"}}>{this.state.errors["address2"]}</span>
			                </div>
			            </div>

			            <div className="form-group">
			                <div className="col-sm-offset-2 col-sm-10">
			                    <button type="submit" className="btn btn-default">Add Contact</button>
			                </div>
			            </div>
			        </form>
				</div>
			</div>
		)
	}

}
