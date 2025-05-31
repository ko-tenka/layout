import React, { useState } from 'react';
import './CardGrid.css';
import Card from '../Card/Card';
import { MockData } from './CardTxt'

function CardGrid() {
    const [selected, setSelected] = useState(null);
  
    const handleClick = (id) => {
      setSelected(id === selected ? null : id);
    };
  
    return (
      <div className="cardgrid-wrapper" style={{ position: 'relative' }}>
        <div className="background-shape"></div> {/* фон */}
        <div className="grid">
          {MockData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              active={selected === item.id}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
  

export default CardGrid;



