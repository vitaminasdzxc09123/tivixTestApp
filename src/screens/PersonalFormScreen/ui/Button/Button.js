import React                 from 'react';
import PropTypes             from 'prop-types';
import { Text }              from 'react-native';

import { useThemedStyles }   from '../../../../hooks/useThemeStyles';
import AnimatedPress         from '../../../../components/base/AnimatedPress';
import Styles                from './styles';

function Button({ onPress, containerStyle, title }) {
    const { styles } = useThemedStyles(Styles);

    return (
        <AnimatedPress
            onPress = {onPress}
            style   = {[ styles.bottonButtonContainer, containerStyle ]}
        >
            <Text style = {styles.bottomButtonTitle}>
                {title}
            </Text>
        </AnimatedPress>
    );
}

Button.propTypes = {
    onPress        : PropTypes.func,
    title          : PropTypes.string,
    containerStyle : PropTypes.object
};

Button.defaultProps = {
    title          : '',
    onPress        : () => {},
    containerStyle : {}
};

export default React.memo(Button);
