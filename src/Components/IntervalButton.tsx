import * as React from 'react';
import './Components.scss';

interface Props {
  label: string;
  selected: boolean;  
  onClick: () => void;
}

export const IntervalButton: React.FC<Props> = (p) => (
  <div 
    className={`interval-button ${p.selected ? 'interval-button--selected' : ''}`}
    onClick={p.onClick}
    key={p.label}
  >
     {p.label}
  </div>
);
