/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, View, Image, Button, TouchableOpacity } from 'react-native'
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router'
// import {
//   //EvilIcons,
//   FontAwesome,
//   MaterialCommunityIcons,
// } from '@expo/vector-icons'
import React, { Fragment } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import ImageUtility from '../ImageUtility'
type ImageSourcePropType = React.ComponentProps<typeof Image>['source']

type routerParamType = {
  id: string
  name: string
}
function LogoTitle(props) {
  return <Ionicons name="person-circle-sharp" size={24} color="#404040" />
}
const ChatRoomScreen = () => {
  const navigation = useNavigation()

  const {
    //id,
    name,
  } = useLocalSearchParams<routerParamType>()

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          //headerTitle: name,
          headerTitle: props => <LogoTitle {...props} />,
          //headerBackTitleVisible: false,
          // headerBackImageSource: () => (
          //   <Ionicons name="person-circle-sharp" size={24} color="#404040" />
          // ),
          // headerBackImageSource: props => (
          //   <Image source={{ uri: ImageUtility.testImage() }} />
          // ),
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Image source={ImageUtility.testImage()} />
            </TouchableOpacity>
          ),
          //headerBackImageSource: <Image source={ImageUtility.testImage() as ImageSourcePropType} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
              />
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
              />
            </View>
          ),
          headerTitleAlign: 'left',
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
