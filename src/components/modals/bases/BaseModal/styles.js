import { StyleSheet } from 'react-native';

export default function styles({ fonts, colors }) {
    return (
        StyleSheet.create({
            container : {
                flex            : 1,
                backgroundColor : 'transparent',
                justifyContent  : 'center',
                alignItems      : 'center'
            },
            modal : {
                justifyContent : 'space-between',
                width          : '85%',
                borderRadius   : 10,
                padding        : 5
            },
            title : {
                paddingTop : 20,
                textAlign  : 'center',
                fontSize   : fonts.font18,
                ...fonts.semi
            },
            buttonContainer : {
                borderWidth     : 1.5,
                borderRadius    : 12,
                borderColor     : colors.ACCENT_SECONDARY,
                alignItems      : 'center',
                paddingVertical : 8
            }

        })
    );
}
