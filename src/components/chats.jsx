import React, { Component, Fragment } from 'react';
import { sidebarChat } from './data/sidebar';
// import * as FaIcons from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { sidebarChat } from './data/sidebar'
import './styles/chats.scss';

export class Chats extends Component {

	constructor(props) {
		super(props);
		this.state = {
			chatCliked: false,
		};
	}

    render () {
        return (
            <Fragment>
                <section className='display'>
                <div className='profile-bar'>
                    {sidebarChat.map((item, index) => {
							return (
								<li key={index} className='chat' >
									<img className='chat-icon' src={item.icon} alt="" />
									<div className='chat-info'>
										<h4 className='chat-name'>{item.chatName}</h4>
									</div>
								</li>
							)
						})
					}
                </div>
                <div className='messagesInColumn' >
                    <div className='msg received'>
                        hola te escribo
                    </div>
                    <div className='msg sent'>
                        hola te respondo
                    </div>
                </div>
                <div className='input'>
                    <input className='input-msg' type="text" placeholder='type your message...' />
                    <input className='input-btn' type="button" value="SEND" />
                </div>
                </section>
            </Fragment>
        )
    }

}