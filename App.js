import * as React from 'react';
import Router from './src/routes';
import SplashScreen from 'react-native-splash-screen';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return <Router />;
}
export default App;
