import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { Platform, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
      <AppNavigator />
      <StatusBar style="auto" />
    </SafeAreaView> 
  );
}
