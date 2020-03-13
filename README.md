# Marvel

# 🚀 Marvel - March 2020

Marvel is a app to view the list of Marvel characters.

<p float="left">
<a href='http://redux.js.org'><img src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67' height='60' alt='Redux Logo' aria-label='redux.js.org' /></a>
 
<a href='https://redux-saga.js.org/'><img src='https://camo.githubusercontent.com/4354872161943c4ae2ceec2a946dec85b96799b8/68747470733a2f2f72656475782d736167612e6a732e6f72672f6c6f676f2f303830302f52656475782d536167612d4c6f676f2d4c616e6473636170652e706e67' height='60' alt='Redux Logo' aria-label='redux-saga.js.org/' /></a>
</p>

## Scalability Factor

This Architecture scales smoothly for medium -large apps. The following feature based architecture is more developer friendly with ease of scaling.

[Marvel](https://github.com/mckinley-and-rice/marvel)

## Features

- [Redux](http://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Project Structure

- `/app` - Contains our React Native App codebase

  - `/api` - Api module class.
  - `/components` - universal shared components used by others.
  - `/config` - Universal styles,images,metrics etc..
  - `/features` - Config files
    - `login`- Each folder will be a feature like this.
      - `reducers` - Reducer associated with this feature [Mostly one, can be multiple]
      - `sagas` - Sagas related with this particular feature [can have single or muliple sagas associated]
      - `selectors` - selectors associated with feature
      - `components` - Components associated with this feature.
      - `containers` - Containers associated with this feature [**Container - Component Structure**]
  - `/lib` - lib helper files
  - `/navigation` - All naviagtion related studd including helpers functions and navigation stack

    - `NavigationHelpers.js` - Use this class instead of depending on props.naviagtion
    - `NavigationService.js` - Service class for naviagtion
    - `NavigationStack.js` - Stack to define naviagtion. you can split things further if needed
    - `MainNavigator.js` -
    - `AppNavigator.js` - Stack to hold all Application screens for authenticated user
    - `AuthNavigator.js` - Stack to hold all Authentication related screens

  - `/store` - Includes everything you need to set up store.
    - `reducers` - Combines all feature based reducers
    - `sagas` - Combines all feature based sagas
    - `index.js` - Set ups store and export things

## Getting Started

1. Clone this repo, `git clone https://github.com/mckinley-and-rice/marvel.git`
2. Go to project's root directory, `cd marvel`
3. Run `yarn` or `npm install` to install dependencies
4. Start the packager with `react-native start`
5. Connect a mobile device to your development machine
6. Run the test application `npm run android`
7. Enjoy!!!

## To run the test

1. Run `npm run test -u`
