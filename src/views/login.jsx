import React, { Component, Fragment  } from 'react';
import { Topbar } from '../components/topbar';

import './styles/login.scss';

export class LoginPage extends Component {
	render() {
		return (
			<Fragment>
				<Topbar />
				<div className="login-form-wrapper">
                    <div className="login-form">
                        <table>
                            <thead>
                                <tr><th>Login</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Nombre de Usuario"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="password" placeholder="Contraseña"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
			</Fragment>
		)
	}
}