import React from 'react';
import './Header.css';


function Header({ black }) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a header="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/1200px-Logo_Netflix.png" alt="logo netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}

export default Header;