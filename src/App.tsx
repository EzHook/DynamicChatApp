import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {MenuProvider} from 'react-native-popup-menu';

const App: React.FC = () => {
  return (
    <>
      <MenuProvider>
        <HomeScreen />
      </MenuProvider>
    </>
  );
};

export default App;
