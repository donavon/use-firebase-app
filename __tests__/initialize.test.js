import { testHook, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import initialize from '../src/initialize';

afterEach(cleanup);

describe('initialize', () => {
  test('returns an existing app if found by name', () => {
    const mockFirebase = {
      apps: [
        {name: 'baz'},
        {name: 'foo'}
      ]
    };
    const config = 'config';
    const app = initialize(mockFirebase, 'foo', config)
      expect(app).toEqual({name:'foo'});
  });

  test('returns a new app if not found', () => {
    const mockFirebase = {
      initializeApp: (config) => config,
      apps: [
        {name: 'foo'}
      ]
    };
    const config = {name: 'foo2'};
    const app = initialize(mockFirebase, 'foo2', config)
      expect(app).toEqual({name:'foo2'});
  });
});
