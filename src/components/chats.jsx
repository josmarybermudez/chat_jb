import React, { Component, Fragment } from 'react';
import { sidebarChat, messages } from './data/sidebar';
import './styles/chats.scss';

export class Chats extends Component {

	constructor(props) {
		super(props);
		this.state = {
			chatCliked: false,
            value: '',
		};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.messages = messages;
	}
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    }


    sendInfo = () => {
        const message = this.state.value;

        if (message !== '') {
            const messages = this.getMessages(this.props.userId);
            messages.push(
                {
                    text: message,
                    type: 2,
                }
            )
        }
        this.forceUpdate();
        this.setState({value: ''});
    }

    getMessages(id) {
        return this.messages[id];
    }

    getTopbar() {
        let currentUser = null;

        sidebarChat.forEach(user => {
            if (user.id == this.props.userId) {
                currentUser = user;
            }
        })

        if (!currentUser) {
            return;
        }

        return (
            <li className='chat' >
                <img className='chat-icon' src={currentUser.icon} alt="" />
                <div className='chat-info'>
                    <h4 className='chat-name'>{currentUser.chatName}</h4>
                </div>
            </li>
        );
    }

    render () {
        return (
            <Fragment>
                <section className='display'>
                    <div className='profile-bar'>
                        {this.getTopbar()}
                    </div>
                    <div className='messagesInColumn' >
                        {
                            this.getMessages(this.props.userId)?.map((message) => {
                                const classByType = `msg ${message.type == 1 ? 'received' : 'sent'}`;

                                return (
                                    <div className={classByType}>
                                        {message.text}
                                    </div>
                                );
                            })
                        }

                    </div>
                    <div className='input' >
                        <input id='input-msg' className='input-msg' type="text" placeholder='type your message...' value={this.state.value} onChange={this.handleChange} />
                        <input className='input-btn' type="submit" value='SEND' onClick={this.sendInfo} />
                    </div>
                </section>
            </Fragment>
        );
    }
}
