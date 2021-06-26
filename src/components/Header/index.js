import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/images/logo-dart-digital.png';

export default function Header() {
  return(
    <>
      <div className="header-container">
        <img src={logo} alt="Logo" />
        <div>
          <Link to="/">Desafio Números</Link>
          <Link to="/repositories">Desafio Repositório</Link>
        </div>
      </div>
    </>
  );
}