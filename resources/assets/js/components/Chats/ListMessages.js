import React, { Component } from 'react';

const ListMessages = ({messages}) => {

    return messages.map(message => {
        return (
            <div key={message.id} className="message-div">
                <div className="messae-heading">
                    <strong>{ message.user.first_name }:</strong>
                    <span>May 2, 2018</span>
                </div>
                <p>{ message.message }</p>
            </div>
		);
	});
}

export default ListMessages ;
