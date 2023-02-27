import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export function useModal() {
    const { toggleModal, dismiss } = useContext(ModalContext);

    return { toggleModal, dismiss };
}
