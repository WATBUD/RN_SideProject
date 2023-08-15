import { Stack } from 'expo-router'
// import { store } from "../store";
import { Platform, SafeAreaView } from 'react-native'

export default function AppLayout() {
  return (
    // <Provider>
    //   <ReduxProvider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  )
}
