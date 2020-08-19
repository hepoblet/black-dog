import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: Contants.statusBarHeight
    },
    header: {
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    content: {
        flex: 1
    },
    contentScrollView: {
        flex: 1
    }
});

export const pickerStyles = StyleSheet.create({
    androidContainer: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10
    },
    androidStyles: {
        height: 50,
        color: '#000000'
    },
    iosInput: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    iosIconContainer: {
        top: 7,
        right: 15
    },
    iosPlaceholder: {
        color: '#000000'
    },
    iosModalViewBottom: {
        backgroundColor: '#ffffff'
    },
    iosInputAccesoryViewContainer: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    iosInputAccesoryViewText: {
        fontSize: 18,
        textAlign: 'right'
    }
});

export const gridStyles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
