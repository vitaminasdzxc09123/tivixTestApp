import React from 'react';
import { useModal } from './useModal';


export function withModal(WrappedComponent) {
    return props => {
        const { toggleModal, dismiss } = useModal();

        return (
            <WrappedComponent {...props} toggleModal = {toggleModal} dismiss = {dismiss} />
        );
    };
}
