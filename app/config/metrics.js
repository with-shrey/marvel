/*
 * platform/application wide metrics for proper styling
*/
import { Platform } from 'react-native';

const metrics = {
    navBarHeight: Platform.OS === 'ios' ? 54 : 66
};

export default metrics;
