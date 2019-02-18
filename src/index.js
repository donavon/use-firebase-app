import firebase from 'firebase/app';
import _useFirebase from './useFirebase';

const useFirebase = (...args) => _useFirebase(firebase, ...args);

// eslint-disable-next-line import/prefer-default-export
export { useFirebase };
