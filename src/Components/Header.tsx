import * as React from 'react';
import './Components.scss';
import { ReactComponent as Cart } from './cart.svg';
import logo from './logo.png';

export const Header: React.FC = () => (
    <div 
        className={`header`}    
    >
        <div className={'header__logo'}>
            <img src={logo} alt="Logo" height={30} />
        </div>
        <div className={'header__basket'}>
            <Cart />$123.45            
        </div>
    </div>
);
