import React, { Component, Fragment } from 'react';
import { sidebarChat } from './data/sidebar';
import './styles/sidebar.scss';

export class Sidebar extends Component {

	constructor(props) {
		super(props);
	}

	loadChat(id) {
		this.props.onUserIdSelected(id);
	}

	render () {
		return (
			<Fragment>
				<div className='navbar'>
				</div> 
				<div className='nav-menu'>
					<div className='react-chat'>
						<img src="src/components/data/images/psh_brand.png"/>
						<h1>React Chat</h1>
					</div>
					<ul className='nav-menu-items'>
						{sidebarChat.map((item, index) => {
							return (
								<li key={index} className='chat' onClick={() => this.loadChat(item.id)}>
									<img className='chat-icon' src={item.icon} />
									<div className='chat-info'>
										<h4 className='chat-name'>{item.chatName}</h4>
										<p>{item.mensajitos[item.mensajitos.length-1].text}</p>
									</div>
									<div className='chat-time'>
										<p>{item.time}</p>
									</div>
								</li>
							)
							})
						}
					</ul>
				</div>
			</Fragment>
		)
	}
} 