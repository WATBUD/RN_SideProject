import { StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'

type routerParamType = {
  id: string
  name: string
}

const ChatRoomScreen = () => {
  const { id, name } = useLocalSearchParams<routerParamType>()

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: name,
          headerBackTitleVisible: false,
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          fontSize: 30,
        }}>
        Chatting Room
      </Text>
    </View>
  )
}

export default ChatRoomScreen

const styles = StyleSheet.create({})
