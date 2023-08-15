import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { useRouter } from 'expo-router'
// import Toast from '@ant-design/react-native/lib/toast'

const Personal = () => {
  const router = useRouter()

  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const accountInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const buttonEnabled = useMemo(
    () => account.length > 0 && password.length > 0,
    [account, password],
  )

  const login = () => {
    console.log('click login')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>PersonalScreen</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Personal
