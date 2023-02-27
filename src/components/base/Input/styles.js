import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            container : {
                width : '100%'
            },
            titleHeaderContainer : {
                marginBottom  : 5,
                flexDirection : 'row'
            },
            titleHeader : {
                color      : colors.WHITE,
                fontSize   : fonts.font14,
                lineHeight : fonts.font21,
                ...fonts.bold
            },
            inputContainer : {
                flexDirection  : 'row',
                alignItems     : 'center',
                justifyContent : 'center'
            },
            input : {
                width             : '100%',
                height            : 40,
                alignItems        : 'center',
                justifyContent    : 'center',
                borderRadius      : 10,
                borderWidth       : 1,
                paddingHorizontal : 12,
                backgroundColor   : colors.WHITE,
                borderColor       : colors.BORDER_INPUT,
                flex              : 1,
                color             : colors.BLACK,
                fontSize          : fonts.font14,
                ...fonts.regular
            },
            isRequiredSymbol : {
                color : colors.ERROR
            },
            error : {
                borderColor : colors.TEXT_ERROR
            },
            errorContainer : {
                marginTop : 6
            },
            errorText : {
                paddingHorizontal : 16,
                color             : colors.TEXT_ERROR,
                fontSize          : 12,
                ...fonts.medium
            }
        })
    );
}
