import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'black',
        opacity: 0.7,
        position: 'absolute',
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
    },
    container: {
        position: 'absolute',
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;
