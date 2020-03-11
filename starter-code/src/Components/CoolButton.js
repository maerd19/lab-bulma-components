import React from 'react';

const CoolButton = ({ button, children }) => (
        <button className={`button ${button}`}>
            {children}
        </button>
)

export default CoolButton;