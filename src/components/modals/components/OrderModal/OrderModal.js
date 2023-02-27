import React               from 'react';
import {
    View,
    Text,
    Image
}                          from 'react-native';
import PropTypes           from 'prop-types';

import { BaseModal }       from '../../bases';

import { useThemedStyles } from '../../../../hooks/useThemeStyles';
import { useOrderData }    from '../../../../context/OrderData';
import Styles              from './styles';

const text = {
    headerTitle : 'My Order',
    emptyTitle  : 'You have an empty order basket '
};

function OrderModal({ visible }) {
    const { styles } = useThemedStyles(Styles);

    const { orderRequest } = useOrderData();

    const detailedMini = orderRequest?.minifigsData;

    return (
        <BaseModal
            modalStyle   = {styles.modalStyle}
            visible      = {visible}
            contentStyle = {styles.contentStyle}
            content      = {(


                <View style = {styles.contentStyle}>
                    <Text style = {styles.title}>
                        {text.headerTitle}
                    </Text>
                    { Boolean(detailedMini) ?
                        <>
                            <Image
                                resizeMode = 'contain'
                                source     = {{ uri : detailedMini?.set_img_url }}
                                style      = {styles.itemImage}
                            />
                            <Text style = {styles.subtitle}>
                                {detailedMini?.name}
                            </Text>
                        </>
                        :
                        <Text style = {styles.emptyTitle} >
                            {text.emptyTitle}
                        </Text>
                    }
                </View>
            )}
        />
    );
}

OrderModal.propTypes = {
    visible : PropTypes.bool
};

OrderModal.defaultProps = {
    visible : false
};

export default React.memo(OrderModal);
