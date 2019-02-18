import { useState, useEffect } from 'react';

const findOrCreateApp = (firebase, config, name) => firebase.apps.find(a => a.name === name)
  || firebase.initializeApp(config, name);

const useFirebase = (firebase, config, name = '[DEFAULT]') => {
  const [value, setValue] = useState(() => findOrCreateApp(firebase, config, name));

  useEffect(
    () => {
      setValue(() => findOrCreateApp(firebase, config, name));
    },
    [firebase, name, config]
  );

  return value;
};

export default useFirebase;
