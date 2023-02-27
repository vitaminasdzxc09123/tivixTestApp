import React, { useRef }   from 'react';
import {
    TextInput,
    View,
    Text
}                          from 'react-native';
import PropTypes           from 'prop-types';

import { useThemedStyles } from '../../../hooks/useThemeStyles';
import TextError           from '../../base/TextError';

import Styles              from './styles';

function Input({
    headerTitle,
    value,
    disabled,
    onChange,
    containerStyle,
    error,
    extraData,
    errorText,
    placeholder,
    style,
    ...props
}) {
    const { styles, colors } = useThemedStyles(Styles);

    const inputRef = useRef(null);

    return (
        <View style = {[ styles.container, containerStyle ]}>
            {Boolean(headerTitle) &&
                <View style = {styles.titleHeaderContainer}>
                    <Text style = {styles.titleHeader}>
                        {headerTitle}
                    </Text>
                </View>
            }
            <TextInput
                placeholderTextColor = {colors.GRAY}
                editable             = {!disabled}
                ref                  = {inputRef}
                style                = {[ styles.input, style ]}
                value                = {value}
                placeholder          = {placeholder}
                onChangeText         = {onChange}
                {...props}
                {...extraData}
            />
            {Boolean(error) ? <TextError error = {errorText} style = {styles.errorText} /> : null}
        </View>
    );
}

Input.propTypes = {
    extraData            : PropTypes.object,
    disabled             : PropTypes.bool,
    headerTitle          : PropTypes.string,
    value                : PropTypes.string,
    onChange             : PropTypes.func,
    onFocus              : PropTypes.func,
    error                : PropTypes.bool,
    errorText            : PropTypes.string,
    handleChangeVisible  : PropTypes.func,
    placeholder          : PropTypes.string,
    style                : PropTypes.object,
    useFooter            : PropTypes.bool,
    containerStyle       : PropTypes.object,
    useActivePlaceholder : PropTypes.bool
};

Input.defaultProps = {
    extraData            : {},
    value                : '',
    disabled             : false,
    handleChangeVisible  : () => {},
    headerTitle          : '',
    style                : {},
    containerStyle       : {},
    onChange             : null,
    onFocus              : null,
    useFooter            : false,
    error                : false,
    errorText            : '',
    placeholder          : null,
    useActivePlaceholder : true
};


export default React.memo(Input);
