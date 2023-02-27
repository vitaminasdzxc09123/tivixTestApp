/* eslint-disable react/jsx-no-bind */
import React, { useCallback } from 'react';
import PropTypes              from 'prop-types';

import { View }               from 'react-native';
import { useThemedStyles }    from '../../hooks/useThemeStyles';

import Input                  from '../../components/base/Input';
import ScreenWrapper          from '../../components/ui/ScreenWrapper';

import ROUTES                 from '../../constants/Routes';
import { useOrderData }       from '../../context/OrderData';
import { useForm }            from './hooks/useForm';
import { BUTTON, INPUT }      from './constants';
import Button                 from './ui/Button';

import Styles                 from './styles';

const text = {
    headerTitle : 'PERSONAL INFORMATION'
};

function PersonalFormScreen({ navigation, route }) {
    const { styles } = useThemedStyles(Styles);
    const { minifigsData } = route.params;

    const { setOrderRequest } = useOrderData();

    const {
        formData,
        onChangeData,
        validationError,
        groupeRequestData
    } = useForm();

    const handleSubmitOrder = useCallback(() => {
        const isError =  validationError(formData);

        if (!isError) {
            setOrderRequest({
                personalData : groupeRequestData.objectGroupe,
                minifigsData
            });
            navigation.navigate(ROUTES.HOME_SCREEN);
        }
    }, [ formData ]);

    const renderItem = useCallback(() => {
        return (
            <View >
                {formData?.data?.map((itemForm) => {
                    switch (itemForm.type) {
                        case INPUT:
                            return (
                                <Input
                                    {...itemForm.controlData}
                                    error          = {Boolean(itemForm.error)}
                                    errorText      = {itemForm.error}
                                    headerTitle    = {itemForm.label}
                                    containerStyle = {styles.itemContainer}
                                    value          = {itemForm.value}
                                    onChange       = {(value) => onChangeData(itemForm.id, value)}
                                />
                            );
                        case BUTTON:
                            return (
                                <Button
                                    containerStyle = {styles.itemContainer}
                                    title          = {itemForm.label}
                                    onPress        = {handleSubmitOrder}
                                />
                            );
                        default: return null;
                    }
                })}
            </View>
        );
    }, [ formData, onChangeData ]);

    return (
        <ScreenWrapper
            useBottomInset
            useScroll
            headerTitle    = {text.headerTitle}
            containerStyle = {styles.container}
        >
            {renderItem()}
        </ScreenWrapper>
    );
}

PersonalFormScreen.propTypes = {
    route      : PropTypes.object,
    navigation : PropTypes.object.isRequired
};

PersonalFormScreen.defaultProps = {
    route : {}
};

export default React.memo(PersonalFormScreen);
