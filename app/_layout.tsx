import { Stack } from 'expo-router'
// import { store } from "../store";
import { Platform, SafeAreaView } from 'react-native'
import { SafeAreaView as SafeAreaViewContext } from 'react-native-safe-area-context'

export default function AppLayout() {
  const SafeArea =
    Platform.OS === 'android' ? SafeAreaViewContext : SafeAreaView

  return (
    // <Provider>
    //   <ReduxProvider store={store}>
    <SafeArea style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LoginScreen"
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          options={{
            headerShown: true,
            title: 'Sign up your account',
          }}
        />
      </Stack>
    </SafeArea>
  )
}
