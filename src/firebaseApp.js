import React, { useContext, useMemo, useDebugValue } from 'react';
import PropTypes from 'prop-types';
import _firebase from 'firebase/app';

import useFirebase from './useFirebase';

const FirebaseContext = React.createContext();
const providerSignature = Symbol();

const FirebaseAppProvider = ({
  firebase, config, name, children,
}) => {
  const app = useFirebase(firebase, config, name);
  const payload = useMemo(() => ({ signature: providerSignature, app }), [app]);

  return (
    <FirebaseContext.Provider value={payload}>
      {children}
    </FirebaseContext.Provider>
  );
};
FirebaseAppProvider.propTypes = {
  firebase: PropTypes.shape({
    apps: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
    initializeApp: PropTypes.func,
  }),
  config: PropTypes.shape({
    apiKey: PropTypes.string.isRequired,
    authDomain: PropTypes.string.isRequired,
    projectId: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
};
FirebaseAppProvider.defaultProps = {
  firebase: _firebase,
  name: '[DEFAULT]',
};

const useFirebaseApp = () => {
  const { signature, app } = useContext(FirebaseContext) || {};

  if (signature !== providerSignature) {
    throw new Error(
      'useFirebaseApp must be a descendant of <FirebaseAppProvider/>'
    );
  }
  useDebugValue(app.name);
  return app;
};

export { FirebaseAppProvider, useFirebaseApp };
