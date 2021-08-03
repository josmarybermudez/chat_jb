import React, { Component, Fragment } from 'react';
import { Sidebar } from '../components/sidebar';
import { Chats } from '../components/chats';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import '../styles/global.scss';

export class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatVisible: false,
			userId: 0,
		};
	}

	showChat = () => this.setState({chatVisible: !this.state.chatVisible});

	setUserId = (id) => {
		this.setState({userId: id});
        this.forceUpdate();
	}

	render() {
		return (
			<Fragment>
				<div className={ this.state.chatVisible ? 'fullChat active' : 'fullChat'}>
					<Link to='#' className='menu-bars'>
							<FaIcons.FaBars onClick={this.showChat} />
					</Link>	
					<Sidebar onUserIdSelected={this.setUserId} />
					<Chats userId={this.state.userId} />
				</div>
			</Fragment>
		)
	}
}