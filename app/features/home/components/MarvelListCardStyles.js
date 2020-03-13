import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    card: {
        minHeight: 100,
        flexDirection: 'row',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 1,
        margin: 10,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 45
    },
    textContainer: {
        flex: 5,
        marginLeft: 20,
        marginTop: 5
       /*  borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1 */
    },
    title: {
        fontSize: 14,
        paddingTop: 5,
        paddingLeft: 10,
    },
    characterId: {
        paddingLeft: 10,
        fontSize: 12,
        color: '#e62429',
        fontWeight: 'bold'
    },
    description: {
        fontStyle: 'italic',
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 10,
        color: '#949292',
        paddingRight: 12,
        textAlign: 'justify',
        paddingBottom: 10
    },
    dateText: {
        textAlign: 'right',
        fontStyle: 'italic',
        paddingTop: 5,
        fontSize: 10,
        opacity: 0.6,
        paddingRight: 12,
        paddingBottom: 10
    }
});

export default styles;