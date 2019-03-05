import React from 'react';
import 'jest-dom/extend-expect';
import { render } from 'react-testing-library';

import { FirebaseAppProvider, useFirebaseApp } from '../src/firebaseApp';

describe('FirebaseAppProvider', () => {
  test('throws and exception if not as descendant on ', () => {
    // expect(index.FirebaseAppProvider).toBe(FirebaseAppProvider);
    // expect(index.useFirebaseApp).toBe(useFirebaseApp);
  });
});

describe('useFirebaseApp', () => {
  const mockFirebase = {
    initializeApp: (config, name) => ({
      options: config,
      name,
    }),
    apps: [
      { name: 'foo' },
    ],
  };

  test('throws and exception if not as descendant of <FirebaseAppProvider />', () => {
    const Component = () => {
      useFirebaseApp();
      return null;
    };
    expect(() => render(<Component />)).toThrow();
  });

  test('returns an app existing object if found', () => {
    let app;
    const Component = () => {
      app = useFirebaseApp();
      return null;
    };
    render(
      <FirebaseAppProvider firebase={mockFirebase} config={{}} name="foo">
        <Component />
      </FirebaseAppProvider>
    );

    expect(app.name).toBe('foo');
  });

  test('creates new app existing object if not found', () => {
    let app;
    const Component = () => {
      app = useFirebaseApp();
      return null;
    };
    render(
      <FirebaseAppProvider firebase={mockFirebase} config={{ bar: 'bar' }}>
        <Component />
      </FirebaseAppProvider>
    );

    expect(app.options).toEqual({ bar: 'bar' });
    expect(app.name).toBe('[DEFAULT]');
  });
});
