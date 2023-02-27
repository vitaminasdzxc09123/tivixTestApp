import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from './ModalContext';

const CLOSE_MODAL_DURATION = 100;

export function ModalProvider({ children }) {
    const [ activeModal, setActiveModal ] = useState(null);
    const [ isVisible, setVisible ] = useState(false);

    function toggleModal(id, props = {}) {
        setVisible(true);
        setActiveModal({ id, props });
    }

    function clear() {
        setActiveModal(null);
    }

    async function dismiss() {
        return new Promise((res) => {
            setVisible(false);
            setTimeout(res, CLOSE_MODAL_DURATION);
        });
    }

    const context = {
        activeModal,
        isVisible,
        toggleModal,
        dismiss,
        clear
    };

    return (
        <ModalContext.Provider value={context}>
            {children}
        </ModalContext.Provider>
    );
}

ModalProvider.propTypes = {
    children : PropTypes.oneOfType([ PropTypes.node, PropTypes.array ])
};

ModalProvider.defaultProps = {
    children : null
};

