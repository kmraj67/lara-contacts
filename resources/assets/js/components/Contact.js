import React, { Component } from 'react';

/* Stateless component or pure component
 * { Contact } syntax is the object destructing
 */
const Contact = ({contact}) => {

	//console.log('Here2');
    
  const divStyle = {
      /*code omitted for brevity */
  }
 
  //if the props contact is null, return contact doesn't exist
  if(!contact) {
    return(
      <div className="col-sm-4">
        <div className="row"> 
          <h2> Contact Details </h2>
        </div>
        <p>No contact selected!</p> 
      </div>
    );
  }
     
  //Else, display the contact data
  return(  
      <div className="col-sm-4">
          <div className="row"> 
            <h2> Contact Details </h2>
          </div>
          <p><b>Name: </b> {contact.name} </p>
          <p><b>Mobile: </b> {contact.mobile} </p>
          <p><b>Address1: </b> {contact.address1} </p>
          <p><b>Address2: </b> {contact.address2} </p>
          <p><b>Created At: </b> {contact.created_at} </p>
          <p><b>Modified At: </b> {contact.updated_at} </p>
        </div>
  )
}
 
export default Contact ;