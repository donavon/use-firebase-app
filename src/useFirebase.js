import { useState, useEffect } from 'react';

const getApp = (firebase, name, config) => firebase.apps.find(a => a.name === name)
  || firebase.initializeApp(config, name);

const useFirebase = (firebase, config, name) => {
  const [app, setApp] = useState(() => getApp(firebase, name, config));

  useEffect(() => {
    setApp(() => getApp(firebase, name, config));
  }, [firebase, name, config]);

  return app;
};

export default useFirebase;
