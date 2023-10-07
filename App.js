import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Auth from './src/routes';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
}
export default App;
