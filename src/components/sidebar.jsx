import React, { Component, Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { sidebarChat } from './data/sidebar'
import './styles/sidebar.scss';

export class Sidebar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sidebar: false,
			chatCliked: false,
		};
	}

	showSidebar = () => this.setState({sidebar: !this.state.sidebar});
	showMessages = () => this.setState({sidebar: !this.state.chatCliked});

	render () {
		return (
			<Fragment>
				<div className='navbar'>
					<Link to='#' className='menu-bars'>
						<FaIcons.FaBars onClick={this.showSidebar} />
					</Link>
				</div> 
				<div className={ this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
					<div className='react-chat'>
						<img src="src/components/data/images/psh_brand.png"/>
						<h1>React Chat</h1>
					</div>
					<ul className='nav-menu-items'>
						<li className='navbar-toggle'>
							<Link to='#' className='menu-bars'>
								<FaIcons.FaWindowClose onClick={this.showSidebar} />
							</Link>
						</li>
						{sidebarChat.map((item, index) => {
							return (
								<li key={index} className='chat' >
									<img className='chat-icon' src={item.icon} alt="" />
									<div className='chat-info'>
										<h4 className='chat-name'>{item.chatName}</h4>
										<p>{item.lastMessage}</p>
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