import React from 'react';
import {SafeAreaView} from 'react-native';
import {RootNavigator} from './src/router/router';
import {Provider} from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView />
      <RootNavigator />
    </Provider>
  );
};

export default App;
