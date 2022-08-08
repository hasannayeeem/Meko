import React, { children } from 'react';

const ActionButton = ({children}) => {
    return (
        <button  className="btn btn-primary font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-secondary to-primary">{children}</button>
    );
};

export default ActionButton;