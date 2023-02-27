import React, {
    useEffect,
    useRef
}                          from 'react';
import { Animated }        from 'react-native';
import PropTypes           from 'prop-types';

import { useThemedStyles } from '../../../hooks/useThemeStyles';
import Styles              from './styles';

const DURATION = 350;

function TextError({ error, style }) {
    const { styles } = useThemedStyles(Styles);

    const errorOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (error) {
            Animated.timing(errorOpacity, {
                toValue         : 1,
                duration        : DURATION,
                useNativeDriver : true
            }).start();
        } else {
            Animated.timing(errorOpacity, {
                toValue         : 0,
                duration        : DURATION,
                useNativeDriver : true
            }).start();
        }
    }, [ error ]);

    const animatedErrorStyles = {
        opacity : errorOpacity
    };

    return (
        <>
            {
                Boolean(error) &&
                <Animated.Text
                    style = {[
                        animatedErrorStyles,
                        styles.error,
                        style
                    ]}
                >
                    {error}
                </Animated.Text>
            }
        </>
    );
}

TextError.propTypes = {
    error : PropTypes.string,
    style : PropTypes.object
};

TextError.defaultProps = {
    error : null,
    style : {}
};

export default React.memo(TextError);
