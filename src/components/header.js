import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'
import {Link} from 'react-router';

class Header extends Component {

    renderLinks() {
        if (this.props.signedIn) {
            return (<li className="nav-item">
                <Link classNme="nav-link" to="/signout">Sign Out</Link>
            </li>)
        }
        else {
            return [<li className="nav-item" key={1}>
                <Link className="nav-link" to="/signin">Sign in</Link>
                Sign in
            </li>,
                <li className="nav-item" key={2}>
                    <Link ckassName="nav-link" to="/signup">Sign up</Link>
                </li>
            ]
        }
    }

    render() {

        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    console.log(`mapStateToProps ${state}`)
    return {signedIn: state.authReducer.authenticated}
}

export default connect(mapStateToProps, actions)(Header);



