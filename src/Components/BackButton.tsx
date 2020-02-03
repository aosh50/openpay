import * as React from 'react';
import './Components.scss';
import { ReactComponent as Back } from './back.svg';

interface Props {
  label: string;  
  onClick: () => void;
}

export const BackButton: React.FC<Props> = (p) => (
    <div 
        className={`back-button`}
        onClick={p.onClick}
    >
        <Back />
        {p.label}
    </div>
);
