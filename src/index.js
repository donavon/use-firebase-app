import firebase from 'firebase/app';
import _initialize from './initialize';

const initialize = (...args) => _initialize(firebase, ...args);

// eslint-disable-next-line import/prefer-default-export
export { initialize };
