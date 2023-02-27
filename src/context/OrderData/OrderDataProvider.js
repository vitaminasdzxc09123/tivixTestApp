import React, { useState }  from 'react';
import PropTypes            from 'prop-types';

import { OrderDataContext } from './OrderDataContext';


export function OrderDataProvider({ children }) {
    const [ orderRequest, setOrderRequest ] = useState({});

    const context = {
        orderRequest,
        setOrderRequest
    };

    return (
        <OrderDataContext.Provider value={context}>
            {children}
        </OrderDataContext.Provider>
    );
}

OrderDataProvider.propTypes = {
    children : PropTypes.oneOfType([ PropTypes.array, PropTypes.object ])
};

OrderDataProvider.defaultProps = {
    children : null
};
