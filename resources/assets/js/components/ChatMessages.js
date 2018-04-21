import React, { Component } from 'react';

const ChatMessages = ({messages}) => {

    return messages.map(message => {
        return (
            <li key={message.id} className="left clearfix">
                <div className="chat-body clearfix">
                    <div className="header">
                        <strong className="primary-font">
                            { message.user.first_name }
                        </strong>
                    </div>
                    <p>
                        { message.message }
                    </p>
                </div>
            </li>
		);
	});
}

export default ChatMessages ;
