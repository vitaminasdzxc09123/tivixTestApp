import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            container : {
                paddingHorizontal : 8,
                overflow          : 'hidden',
                flex              : 1,
                borderRadius      : 12
            },
            headerTitle : {
                fontSize   : fonts?.font14,
                lineHeight : fonts?.font20,
                ...fonts?.bold
            },
            content : {
                marginTop     : 12,
                flex          : 1,
                flexDirection : 'row'
            },
            titleContainer : {
                flex       : 1,
                marginLeft : 12
            },
            title : {
                fontSize   : fonts?.font14,
                lineHeight : fonts?.font20,
                ...fonts?.bold
            },
            subtitle : {
                color      : colors.ACCENT_SECONDARY,
                fontWeight : '700'
            },
            itemImage : {
                height : 40,
                width  : 40
            },
            bottonButtonContainer : {
                marginTop       : 12,
                borderRadius    : 12,
                padding         : 8,
                backgroundColor : colors.ACCENT_SECONDARY,
                alignItems      : 'center'
            },
            bottomButtonTitle : {
                color      : colors.WHITE,
                fontSize   : fonts?.font14,
                lineHeight : fonts?.font20,
                ...fonts?.medium
            }
        })
    );
}
