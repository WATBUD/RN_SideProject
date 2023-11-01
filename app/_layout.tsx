import { Stack } from 'expo-router'
import React from 'react'
// import { store } from "../store";
import { Platform, SafeAreaView } from 'react-native'
import { SafeAreaView as SafeAreaViewContext } from 'react-native-safe-area-context'
// import SignUpScreen from './page/SignUpScreen'
export default function AppLayout() {
  const SafeArea =
    Platform.OS === 'android' ? SafeAreaViewContext : SafeAreaView

  return (
    // <Provider>
    //   <ReduxProvider store={store}>
    <SafeArea style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="page/LoginScreen"
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="page/SignUpScreen"
          options={{
            headerShown: true,
            title: 'Sign up your account',
          }}
        />
        <Stack.Screen
          name="page/swipeLeftAndRight"
          options={{
            headerShown: true,
            title: 'Chat Room', // 设置标题
          }}
        />
        <Stack.Screen
          name="page/chatRoomScreen"
          options={{
            headerShown: true,
            title: 'Chat Room', // 设置标题
          }}
        />
      </Stack>
    </SafeArea>
  )
}
