import React from 'react'; 
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/navigation/stacks/mainStack';

function App() { 

  return (
    <SafeAreaProvider > 
      <NavigationContainer> 
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}  
export default App;
