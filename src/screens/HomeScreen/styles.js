import { StyleSheet } from 'react-native';

export default function styles({ colors }) {
    return (
        StyleSheet.create({
            container : {
                paddingBottom : 20
            },
            headerContainer : {
            },
            orderContainer : {
                borderWidth  : 1,
                padding      : 8,
                borderRadius : 12,
                borderColor  : colors.WHITE,
                alignSelf    : 'flex-end'
            },
            titleOrder : {
                color : colors.WHITE
            },
            searchContainer : {
                borderColor  : colors.WHITE,
                padding      : 12,
                borderWidth  : 1,
                borderRadius : 12
            },
            titleGetListButton : {
                color : colors.WHITE
            },
            loaderContainer : {
                justifyContent : 'center',
                alignItems     : 'center',
                position       : 'absolute',
                height         : '100%',
                width          : '100%'
            }
        })
    );
}
