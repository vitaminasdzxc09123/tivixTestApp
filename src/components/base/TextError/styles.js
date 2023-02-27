import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            error : {
                marginTop : 8,
                color     : colors.ERROR,
                fontSize  : fonts.font14,
                ...fonts.medium
            }
        })
    );
}
