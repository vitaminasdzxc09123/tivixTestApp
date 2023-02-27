import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const BORDER_RADIUS = 20;

export default function styles({ colors }) {
    return (
        StyleSheet.create({
            cardContainer : {
                marginTop     : 20,
                paddingBottom : 20,
                width         : width * 0.8
            },
            itemContent : {
                backgroundColor  : colors?.WHITE,
                padding          : 18,
                marginHorizontal : 16,
                borderRadius     : BORDER_RADIUS
            },
            itemText : {
                marginTop    : 24,
                marginBottom : 24,
                alignSelf    : 'center',
                fontSize     : 16,
                color        : colors?.ACCENT,
                fontWeight   : '800'
            },
            itemImage : {
                height : 150
            },
            loaderContainer : {
                alignSelf      : 'center',
                justifyContent : 'flex-end',
                alignItems     : 'center',
                position       : 'absolute',
                height         : '100%',
                width          : '100%'
            }
        })
    );
}
