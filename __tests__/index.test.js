import 'jest-dom/extend-expect';

import * as index from '../src';
import { FirebaseAppProvider, useFirebaseApp } from '../src/firebaseApp';

describe('index', () => {
  test('exports FirebaseAppProvider and useFirebaseApp', () => {
    expect(index.FirebaseAppProvider).toBe(FirebaseAppProvider);
    expect(index.useFirebaseApp).toBe(useFirebaseApp);
  });
});
