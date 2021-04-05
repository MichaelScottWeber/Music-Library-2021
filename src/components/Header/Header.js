import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Header extends Component {
    state = {
        navLinks: [
            { name: 'Browse', url: '/browse' },
            { name: 'About', url: '/about' },
            { name: 'Contact', url: '/contact' },
        ],
    };

    navLinkList = this.state.navLinks.map((link) => {
        return (
            <li key={link.name}>
                {/* <a href={link.url}>{link.name}</a> */}
                <Link to={link.url}>{link.name}</Link>
            </li>
        );
    });

    render() {
        return (
            <header className='Header'>
                <nav>
                    {/* <a href='/'>
                        Michael Weber
                    </a> */}
                    <Link to='/'>Michael Weber</Link>
                    <ul>{this.navLinkList}</ul>
                </nav>
            </header>
        );
    }
}

export default Header;
