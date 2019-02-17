const initialize = (firebase, name, config) => (
  firebase.apps.find(app => app.name === name) || firebase.initializeApp(config, name)
);

export default initialize;
