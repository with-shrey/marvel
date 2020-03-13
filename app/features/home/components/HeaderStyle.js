import { StyleSheet } from 'react-native';
import Styles from 'app/config/styles'
import metrics from 'app/config/metrics'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Styles.color.COLOR_ACCENT,
        height: metrics.navBarHeight,
        width: '100%',
        alignItems:'center',
        justifyContent: 'flex-end',
        shadowOffset:{  width: 10,  height: 50,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        elevation: 5,
        zIndex: 5
    },
    title: {
        position: 'absolute',
        left: 0,
        right: 0,
        color: 'white',
        // flex: 1,
        textAlign: "center",
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 20
    },
    icon: {
        height: 20,
        width: 20,
        borderRadius: 45,
        padding: 10,
        marginRight: 10
    }
});

export default styles;