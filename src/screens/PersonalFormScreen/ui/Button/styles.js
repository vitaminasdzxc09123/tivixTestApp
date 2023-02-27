import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            bottonButtonContainer : {
                marginTop       : 12,
                borderRadius    : 12,
                padding         : 8,
                backgroundColor : colors.ACCENT_THIRD,
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
