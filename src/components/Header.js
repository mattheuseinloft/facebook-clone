import React from 'react';

import profile from '../assets/profile.jpeg';

function Header() {
  return (
    <header id="header">
      <img id="facebook-logo" src="https://i.imgur.com/KDIDiSE.png" alt="Facebook" />

      <div className="user-account">
        <p>Meu perfil</p>
        <i className="material-icons">account_circle</i>
      </div>
    </header>
  );
}

export default Header;