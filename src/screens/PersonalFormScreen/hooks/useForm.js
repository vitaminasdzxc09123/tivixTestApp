/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import {
    useCallback,
    useMemo,
    useState
}                                from 'react';
import cloneDeep                 from 'lodash/cloneDeep';
import { personalDataForm }      from '../config';


export function useForm() {
    const [ formData, setFormData ] = useState(personalDataForm);

    const validationError = useCallback((formDataValid) => {
        const copiedData = cloneDeep(formDataValid);


        for (const [ key, valueBlock ] of Object.entries(copiedData?.data)) {
            if (!Boolean(valueBlock.value) && valueBlock.id !== 'submit') {
                valueBlock.error = 'is Required';
            }
        }

        const isError = copiedData.data.some((item) => Boolean(item.error));

        setFormData(copiedData);

        return isError;
    }, [ formData ]);

    const onChangeData = useCallback((keyItem, value) => {
        const copiedData = cloneDeep(formData);

        const findedItem = copiedData?.data.find((itemValue) => itemValue.id === keyItem);

        findedItem.value = value;
        findedItem.error = '';

        setFormData(copiedData);
    }, [ formData ]);

    const groupeRequestData = useMemo(() => {
        const objectGroupe = {};
        const arrayGroupe = [];


        for (const [ key, valueBlock ] of Object.entries(formData?.data)) {
            const res = [ valueBlock ]?.reduce(
                (oldValue, nextValue) => ({ ...oldValue, [nextValue.id] : nextValue.value  }),
                {}
            );

            objectGroupe[Object.keys(res)] = Object.values(res)[0];
        }

        return { objectGroupe, arrayGroupe };
    }, [ formData ]);

    return {
        formData,
        setFormData,
        onChangeData,
        validationError,
        groupeRequestData
    };
}
