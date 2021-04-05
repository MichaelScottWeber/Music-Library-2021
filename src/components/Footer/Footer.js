import React, { Component } from 'react';

class Footer extends Component {
    state = {
        footerLinks: [
            { name: 'Contact', url: '/contact' },
            { name: 'Terms of Use', url: '/terms' },
            { name: 'Privacy & Cookies', url: '/privacy-and-cookie-policy' },
        ],
        socialLinks: [
            { name: 'Twitter', url: '/' },
            { name: 'Facebook', url: '/' },
            { name: 'Instagram', url: '/' },
        ],
    };

    linkList = (list) => {
        return list.map((link) => {
            return (
                <li key={link.name}>
                    <a href={link.url}>{link.name}</a>
                </li>
            );
        });
    };

    render() {
        return (
            <footer className='Footer'>
                <div>
                    <div>
                        <p>Michael Weber</p>
                        <p>Music for Film and Games</p>
                    </div>
                    <p>Copyright 2021 Michael Weber</p>
                </div>
                <ul>{this.linkList(this.state.socialLinks)}</ul>
                <ul>{this.linkList(this.state.footerLinks)}</ul>
            </footer>
        );
    }
}

export default Footer;
