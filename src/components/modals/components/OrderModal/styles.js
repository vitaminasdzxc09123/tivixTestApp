import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            modalStyle : {
                backgroundColor : colors.WHITE,
                height          : 340,
                paddingBottom   : 30
            },
            contentStyle : {
                backgroundColor   : colors.WHITE,
                alignItems        : 'center',
                paddingHorizontal : 16
            },
            title : {
                fontSize      : fonts.font18,
                color         : colors.TEXT,
                paddingBottom : 25,
                paddingTop    : 20,
                ...fonts.semi
            },
            subtitle : {
                marginTop : 10,
                textAlign : 'center',
                color     : colors.ACCENT_BLUE,
                fontSize  : fonts.font14,
                ...fonts.bold
            },
            itemImage : {
                width  : 120,
                height : 120
            },
            emptyTitle : {
                textAlign     : 'center',
                fontSize      : fonts.font18,
                color         : colors.TEXT,
                paddingBottom : 25,
                paddingTop    : 20,
                ...fonts.semi
            }
        })
    );
}
