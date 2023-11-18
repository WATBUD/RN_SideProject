import { Slot, Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        // title: 'Chat with close friends',
        //headerTitle: { backgroundColor: '#f00',height: 50, },
        // headerTitleStyle:
        //headerTitle: 'Chat with close friends',
        header: () => (
          <View style={{ backgroundColor: '#0000', height: 0 }}>
            {/* You can customize the header background here */}
          </View>
        ),
        // headerLargeStyle: { backgroundColor: '#f00' },
      }}
    />
  )

  // <Slot />
}
export default Layout
