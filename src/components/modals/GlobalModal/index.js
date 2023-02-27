import React, {
    useContext,
    useCallback
}                       from 'react';
import { ModalContext } from '../context/ModalContext';
import { MODAL }        from '../constants';
import {
    OrderModal
}                       from '../components';

export function GlobalModal() {
    const { activeModal, dismiss } = useContext(ModalContext);

    const handleCancelModal = useCallback(async (params) => {
        if (activeModal.props.onCancel) {
            await activeModal.props.onCancel(params);
        }

        dismiss();
    }, [ activeModal ]);

    const handleSubmitModal = useCallback(async (params) => {
        if (activeModal.props.onSubmit) {
            await activeModal.props.onSubmit(params);
        }

        if (!activeModal.props.preventDismiss) dismiss();
    }, [ activeModal ]);

    if (!activeModal) {
        return null;
    }

    const MAP_MODAL_ID_TO_COMPONENT = {
        [MODAL.ORDER_MODAL] : OrderModal
    };

    const Modal = MAP_MODAL_ID_TO_COMPONENT[activeModal.id];

    if (!Modal) {
        return null;
    }

    return (
        <Modal
            {...activeModal.props}
            onCancel = {handleCancelModal}
            onSubmit = {handleSubmitModal}
        />
    );
}
