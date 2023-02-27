import React, {
    useCallback,
    useEffect,
    useState
}                            from 'react';
import PropTypes             from 'prop-types';
import { Text, Image, View } from 'react-native';

import { useThemedStyles }   from '../../../../hooks/useThemeStyles';
import AnimatedPress         from '../../../../components/base/AnimatedPress';
import Styles                from './styles';

function DescriptionMinifigs({ data, handleSubmit }) {
    const { styles } = useThemedStyles(Styles);

    const [ partMinifigs, setPartMinifigs ] = useState([]);

    useEffect(() => {
        if (Boolean(data) && data?.results?.length > 0) {
            const groupPart = [];

            data?.results.forEach((itemMinifigs) => {
                for (const [ keyPart, itemPart ] of Object.entries(itemMinifigs)) {
                    if (keyPart === 'part') {
                        groupPart.push(itemPart);
                    }
                }
            });
            setPartMinifigs(groupPart);
        }
    }, [ data ]);

    const renderParts = useCallback((item) => {
        const formatName = item.name.split(',')[0];

        return (
            <View
                key={item?.part_img_url}
                style = {styles.content}
            >
                <Image
                    resizeMode = 'contain'
                    source     = {{ uri : item?.part_img_url }}
                    style      = {styles.itemImage}
                />
                <View style = {styles.titleContainer}>
                    <Text
                        style         = {styles.title}
                        numberOfLines = {1}
                    >
                        {formatName}
                    </Text>
                    <Text style = {styles.subtitle}>
                        {item.part_num}
                    </Text>
                </View>
            </View>
        );
    }, []);

    const renderBottomButton = useCallback(() => {
        return (
            <AnimatedPress
                onPress = {handleSubmit}
                style   = {styles.bottonButtonContainer}
            >
                <Text style = {styles.bottomButtonTitle}>
                    GET
                </Text>
            </AnimatedPress>
        );
    }, []);

    return (

        <View style = {styles.container}>
            <Text style = {styles.headerTitle}>
                {`There are ${data?.results?.length} parts in this minifig`}
            </Text>
            {partMinifigs.map((item) => renderParts(item))}
            {renderBottomButton()}
        </View>
    );
}

DescriptionMinifigs.propTypes = {
    data         : PropTypes.object,
    handleSubmit : PropTypes.func
};

DescriptionMinifigs.defaultProps = {
    data         : {},
    handleSubmit : () => {}
};

export default React.memo(DescriptionMinifigs);
