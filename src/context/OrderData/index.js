import { useContext } from 'react';
import { OrderDataContext } from './OrderDataContext';

export function useOrderData() {
    return useContext(OrderDataContext);
}
