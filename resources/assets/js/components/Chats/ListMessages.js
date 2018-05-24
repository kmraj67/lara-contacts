import React, { Component } from 'react';
import moment from 'moment';

const ListMessages = ({messages}) => {

    return messages.map(message => {
        return (
            <div key={message.id} className="message-div">
                <div className="messae-heading">
                    <div className="username">{ message.user.first_name }</div>
                    <div className="msgdate">{ moment(message.created_at).format('MMM D, YYYY hh:mm A') }</div>
                </div>
                <div className="msg">{ message.message }</div>
            </div>
		);
	});
}

export default ListMessages ;
