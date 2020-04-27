import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const showHideModal = 
    [
        'Backdrop',
        props.show ? 'BackdropOpen' : 'BackdropClose'
    ];
    
    return <div className={ showHideModal.join( ' ' ) }></div>;

};

export default backdrop;