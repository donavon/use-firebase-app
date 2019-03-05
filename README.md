# @use-firebase/app

A custom React Hook that impliments Firebase's App object.

[![npm version](https://badge.fury.io/js/%40use-firebase%2Fapp.svg)](https://badge.fury.io/js/%40use-firebase%2Fapp)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

## Installation

```bash
$ npm i @use-firebase/app
```

or

```bash
$ yarn add @use-firebase/app
```

## API

You must first import the package like so.

```js
import { FirebaseAppProvider, useFirebaseApp } from '@use-firebase/app';
```

### FirebaseAppProvider

Return a Firebase application provider. You must wrap your app inside
of an `<FirebaseAppProvider/>`.

```jsx
<FirebaseAppProvider config={myFirebaseConfig} name="myFirebase">
  <App />
</FirebaseAppProvider>
```

#### Props

Here are the parameters that you can use.

| Parameter | Description                                                                                         |
| :-------- | :-------------------------------------------------------------------------------------------------- |
| `config`  | A configuration object. See below for instructions on how to obtain this from the Firebase console. |
| `name` | An optional name for your app. Default = `[DEFAULT]`.                                 |

##### Obtaining `config` information from the Firebase console

1. Go to your project page on the [Firebase console](https://console.firebase.google.com).
1. Next to `Project Overview` you should see a gear icon.
1. Click it and select `Project settings` from the menu.
1. On the `General` tab, you should see a `Your apps` section.
1. Click on the web icon (i.e. `</>`)
1. Copy just the `var config` information and not any of the HTML tags. It should look somthing like this.

```js
var config = {
  apiKey: 'AIzaSy7IGdsxh_8XNxKn6H4d9yKBH5qnD_B2xbs',
  authDomain: 'my-app-87543.firebaseapp.com',
  databaseURL: 'https://my-app-87543.firebaseio.com',
  projectId: 'my-app-87543',
  storageBucket: 'my-app-87543.appspot.com',
  messagingSenderId: '423450585517',
};
```

### useFirebaseApp

```js
const app = useFirebaseApp();
```

`useFirebaseApp` is a custom hook that you can use in your components to
obtain the `app` object created by `FirebaseAppProvider`.

## Live demo

TODO

## License

**[MIT](LICENSE)** Licensed
