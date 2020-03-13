//Confire Enzyme
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import "isomorphic-fetch";

import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('react-native-simple-toast', () => ({
    SHORT: jest.fn(),
    show: jest.fn(),
  }));

jest.mock('../app/navigation/NavigationHelpers', () => ({
  navigateToHome: jest.fn(),
}))