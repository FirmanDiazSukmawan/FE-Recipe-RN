import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Auth from './src/routes';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NativeBaseProvider} from 'native-base';
import {PaperProvider} from 'react-native-paper';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <PaperProvider>
          <Auth />
        </PaperProvider>
      </NativeBaseProvider>
    </Provider>
  );
}
export default App;
