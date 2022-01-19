import React from 'react';

const Container = ({ children, ...props }) => {
    return (
        <div style={{
            padding: '92px 24px 68px',
        }}
             {...props}
        >
            {children}
        </div>
    );
};

export default Container;
