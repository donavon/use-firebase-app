import { testHook, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import useFirebase from '../src/useFirebase';

afterEach(cleanup);

describe('useFirebase', () => {
  test('returns an existing app if found by name', () => {
    const mockFirebase = {
      apps: [
        { name: 'baz' },
        { name: 'foo' },
      ],
    };
    const config = 'config';
    let app;
    testHook(() => {
      app = useFirebase(mockFirebase, config, 'foo');
    });
    expect(app).toEqual({ name: 'foo' });
  });

  test('returns a new app if not found', () => {
    const mockFirebase = {
      initializeApp: config => config,
      apps: [
        { name: 'foo' },
      ],
    };
    const config = { name: 'foo2' };
    let app;
    testHook(() => {
      app = useFirebase(mockFirebase, config, 'foo2');
    });
    expect(app).toEqual({ name: 'foo2' });
  });

  // test('name defaults to `[DEFAULT]`', () => {
  //   const mockFirebase = {
  //     initializeApp: config => config,
  //     apps: [
  //       { name: '[DEFAULT]' },
  //     ],
  //   };
  //   const config = { name: 'foo2' };
  //   let app;
  //   testHook(() => {
  //     app = useFirebase(mockFirebase, config);
  //   });
  //   expect(app).toEqual({ name: '[DEFAULT]' });
  // });

  test('if no parameter change, returns the same app', () => {
    const mockFirebase = {
      initializeApp: config => config,
      apps: [
        { name: 'foo' },
      ],
    };
    const config = { name: 'foo2' };
    let app;
    const { rerender } = testHook(() => {
      app = useFirebase(mockFirebase, config, 'foo2');
    });

    const savedApp = app;

    rerender();

    expect(app).toBe(savedApp);
  });
});
