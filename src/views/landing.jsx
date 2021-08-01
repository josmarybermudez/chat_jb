import React, { Component, Fragment } from 'react';
import { Sidebar } from '../components/sidebar';
import { Chats } from '../components/chats';

export class LandingPage extends Component {
	render() {
		return (
			<Fragment>
				<Sidebar />
				<Chats />
			</Fragment>
		)
	}
}