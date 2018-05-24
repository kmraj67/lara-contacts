import React, { Component } from 'react';

const ListMessages = ({messages}) => {

    return messages.map(message => {
        return (
            <div key={message.id} className="message-div">
                <div className="messae-heading">
                    <div className="username">{ message.user.first_name }</div>
                    <div className="msgdate">{ moment() }</div>
                </div>
                <div className="msg">{ message.message }</div>
            </div>
		);
	});
}

export default ListMessages ;
