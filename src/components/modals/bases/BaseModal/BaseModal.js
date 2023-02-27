import React, {
    useEffect,
    useRef,
    useContext,
    useCallback
}                          from 'react';
import PropTypes           from 'prop-types';
import {
    Modal,
    View,
    Text,
    Animated,
    Easing
}                          from 'react-native';

import { ModalContext }    from '../../context/ModalContext';

import AnimatedPress       from '../../../base/AnimatedPress';
import { useThemedStyles } from '../../../../hooks/useThemeStyles';
import Styles              from './styles';

const TIMING_CONFIG = {
    duration        : 200,
    easing          : Easing.inOut(Easing.ease),
    useNativeDriver : true
};
const text = {
    titleClose : 'Okay'
};

function BaseModal({
    title,
    content,
    containerStyle,
    titleStyle,
    modalStyle,
    contentStyle
}) {
    const { styles } = useThemedStyles(Styles);
    const { clear, isVisible } = useContext(ModalContext);

    const animValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            animValue,
            {
                ...TIMING_CONFIG,
                toValue : isVisible ? 1 : 0
            }
        ).start(({ finished }) => {
            if (!isVisible && finished) clear();
        });
    }, [ animValue, isVisible ]);

    const handleClose = useCallback(() => {
        clear();
    }, []);

    return (
        <Modal
            animationType = 'slide'
            transparent
            visible
        >
            <View
                style={[
                    styles.container,
                    containerStyle
                ]}
            >
                <Animated.View
                    style = {[
                        styles.modal,
                        modalStyle,
                        {
                            transform : [
                                {
                                    scale : animValue.interpolate({
                                        inputRange  : [ 0, 1 ],
                                        outputRange : [ 2, 1 ]
                                    })
                                }
                            ],
                            opacity : animValue
                        }
                    ]}
                >
                    {
                        Boolean(title) &&
                        <Text style={[ styles.title, titleStyle ]}>
                            {title}
                        </Text>
                    }
                    <View style={[ styles.content, contentStyle ]}>
                        {content}
                    </View>
                    <AnimatedPress
                        onPress = {handleClose}
                        style   = {styles.buttonContainer}
                    >
                        <Text>
                            {text.titleClose}
                        </Text>
                    </AnimatedPress>
                </Animated.View>
            </View>
        </Modal>
    );
}

BaseModal.propTypes = {
    title          : PropTypes.string,
    content        : PropTypes.node,
    containerStyle : PropTypes.object,
    titleStyle     : PropTypes.object,
    modalStyle     : PropTypes.object,
    contentStyle   : PropTypes.object
};

BaseModal.defaultProps = {
    content        : null,
    containerStyle : {},
    titleStyle     : {},
    modalStyle     : {},
    contentStyle   : {},
    title          : ''
};

export default React.memo(BaseModal);
