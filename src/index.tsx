import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainApp = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />
      <SafeAreaView className="flex-1 bg-neutral-900">
        <AppNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default MainApp;
