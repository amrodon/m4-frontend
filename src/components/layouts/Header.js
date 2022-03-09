import '../../styles/components/layout/Header.css';
import React from 'react';
const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <image src="images/logo.jpg" width="100"
                    alt="Mis bicicletas" />
                    <h1>Mis bicicletas</h1>
                </div>
            </div>
        </header>
    );
}
export default Header;