import React, { Component } from 'react';
import moment from 'moment';

const ListMessages = ({messages}) => {
    return messages.map(message => {
        return (
            <div key={message.id} className="message-div">
                <div className="messae-heading">
                    <strong>{ message.user.first_name }:</strong>
                    <span>{ moment.utc(message.created_at).local().format('MMM D, YYYY hh:mm A') }</span>
                </div>
                <p>{ message.message }</p>
            </div>
		);
	});
}

export default ListMessages ;
