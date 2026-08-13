import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
 

  return (
    <SafeAreaProvider>
      
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaProvider>
  );
}




export default App;
