/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-lines-per-function */
import React, { useCallback, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    Image,
    Text,
    View
}                          from 'react-native';
import PropTypes           from 'prop-types';

import AnimatedPress       from '../../base/AnimatedPress/AnimatedPress';
import { useThemedStyles } from '../../../hooks/useThemeStyles';

import Styles              from './styles';

const { width } = Dimensions.get('window');

const ITEM_LENGTH = width * 0.8;

const SHADOW_STYLE = {
    shadowColor   : '#ECB841',
    shadowOpacity : 0.8,
    shadowRadius  : 8
};

function CarouselList({ data, handleCard, renderDescription, isLoadingDetailed }) {
    const { styles } = useThemedStyles(Styles);

    const scrollX = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(250)).current;

    const [ activeIndex, setActiveIndex ] = useState(0);

    const [ isDetailed, setIsDetailed ] = useState(false);

    const flatListRef = useRef(null);

    const openDetailedMinifigs = useCallback((minifig) => {
        handleCard(minifig);
        if (!isDetailed) {
            setIsDetailed(true);
            Animated.timing(fadeAnim, {
                toValue         : 600,
                duration        : 700,
                useNativeDriver : false
            }).start();
        } else {
            setIsDetailed(false);
            Animated.timing(fadeAnim, {
                toValue         : 250,
                duration        : 500,
                useNativeDriver : false
            }).start();
        }
    }, [ isDetailed ]);

    const viewabilityConfig = {
        itemVisiblePercentThreshold : 100
    };

    const onViewableItemsChanged = useCallback((item) => {
        setActiveIndex(item.changed[0].index);
    }, [ activeIndex ]);

    const viewabilityConfigCallbackPairs = useRef([ { viewabilityConfig, onViewableItemsChanged } ]);

    const renderItem = useCallback((item) => {
        const formatName = item.item.name.split(',')[0];

        const validActiveSlide = activeIndex === item.index;

        const shadowActive = validActiveSlide && SHADOW_STYLE;
        const activeHeight = validActiveSlide ? fadeAnim : 250;

        return (
            <AnimatedPress
                onPress = {() => openDetailedMinifigs(item?.item)}
                style   = {styles.cardContainer}
            >
                <Animated.View
                    style = {[ { height : activeHeight },
                        shadowActive,
                        styles.itemContent ]}
                >
                    <Image
                        resizeMode = 'contain'
                        source     = {{ uri : item.item?.set_img_url }}
                        style      = {styles.itemImage}
                    />
                    <Text style = {styles.itemText}>
                        {formatName}
                    </Text>
                    {isDetailed && !isLoadingDetailed && validActiveSlide && renderDescription()}
                </Animated.View>
            </AnimatedPress>
        );
    }, [ activeIndex, isDetailed, isLoadingDetailed ]);

    const keyExtractor = useCallback((item) => item.set_img_url, []);

    return (
        <View style={styles.container}>
            <FlatList
                renderToHardwareTextureAndroid
                showsHorizontalScrollIndicator = {false}
                scrollEnabled                  = {!isDetailed}
                contentContainerStyle          = {styles.flatListContent}
                scrollEventThrottle            = {16}
                decelerationRate               = {'fast'}
                snapToAlignment                = 'center'
                snapToInterval                 = {ITEM_LENGTH}
                renderItem                     = {renderItem}
                keyExtractor                   = {keyExtractor}
                bounces                        = {false}
                data                           = {data}
                ref                            = {flatListRef}
                viewabilityConfigCallbackPairs = {viewabilityConfigCallbackPairs.current}
                horizontal
                onScroll                       = {Animated.event(
                    [ { nativeEvent : { contentOffset : { x : scrollX } } } ],
                    { useNativeDriver : false },

                )}

            />
        </View>
    );
}

CarouselList.propTypes = {
    data              : PropTypes.array,
    handleCard        : PropTypes.func,
    isLoadingDetailed : PropTypes.bool,
    renderDescription : PropTypes.func
};

CarouselList.defaultProps = {
    data              : [],
    isLoadingDetailed : false,
    renderDescription : () => {},
    handleCard        : () => {}
};

export default React.memo(CarouselList);
