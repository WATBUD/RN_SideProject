import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { CheckBox } from '@rneui/themed'
import { useRouter } from 'expo-router'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const LoginScreen = () => {
  const router = useRouter()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)
  const accountInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const [passwordShown, setPasswordShown] = useState(true)

  const buttonEnabled = useMemo(
    () => account.length > 0 && password.length > 0,
    [account, password],
  )

  const login = () => {
    console.log('click login')
    router.push('/card')
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss
        }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image
            style={{
              width: width / 3,
              height: width / 3,
              marginTop: height / 10,
              marginBottom: 20,
            }}
            resizeMode="cover"
            source={{ uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png' }}
          />

          <View>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="user-alt" size={24} color="#696969" />
              </View>
              <TextInput
                placeholder={'Please input account'}
                ref={accountInputRef}
                onChangeText={setAccount}
                value={account}
                returnKeyType={password.length > 0 ? 'go' : 'next'}
                onSubmitEditing={() => {
                  if (buttonEnabled) {
                    login()
                  } else {
                    passwordInputRef.current?.focus()
                  }
                }}
                blurOnSubmit={false}
                enablesReturnKeyAutomatically
                textContentType="username"
                autoComplete="username"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="key" size={24} color="#696969" />
              </View>
              <TextInput
                placeholder={'Please input password'}
                ref={passwordInputRef}
                onChangeText={setPassword}
                value={password}
                returnKeyType={account.length > 0 ? 'go' : 'next'}
                onSubmitEditing={() => {
                  if (buttonEnabled) {
                    login()
                  } else {
                    accountInputRef.current?.focus()
                  }
                }}
                blurOnSubmit={false}
                secureTextEntry={passwordShown}
                enablesReturnKeyAutomatically
                textContentType="password"
                autoComplete="password"
                keyboardType="default"
                autoCapitalize="none"
                style={styles.input}
              />
              <Pressable onPress={() => setPasswordShown(s => !s)}>
                {passwordShown ? (
                  <FontAwesome5 name="eye-slash" size={20} color="#696969" />
                ) : (
                  <FontAwesome5 name="eye" size={20} color="#696969" />
                )}
              </Pressable>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CheckBox
              checked={checked}
              onPress={() => setChecked(!checked)}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="#696969"
              title="Remember me"
              textStyle={{ color: '#696969', fontWeight: '500' }}
            />
            <Pressable onPress={() => console.log('reset password page')}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </Pressable>
          </View>

          {/* 登入按鈕 */}
          <Pressable
            style={[
              styles.loginContainer,
              { backgroundColor: buttonEnabled ? '#4169E1' : '#808080' },
            ]}
            onPress={() => {
              login()
            }}
            disabled={!buttonEnabled}
            // loading ||
          >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
          <View style={styles.registorContainer}>
            <Text style={styles.registorText}>Now to Logistics? </Text>
            <Pressable onPress={() => router.push('page/SignUpScreen')}>
              <Text style={styles.registorButton}> Registor</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  inputContainer: {
    width: width * 0.75,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 5,
  },
  input: {
    fontSize: 18,
    marginHorizontal: 5,
    width: width * 0.53,
  },
  loginContainer: {
    width: '70%',
    height: 50,
    position: 'absolute',
    bottom: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  forgotText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#0000FF',
    paddingRight: 20,
  },
  registorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registorText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#696969',
  },
  registorButton: {
    fontSize: 13,
    fontWeight: '500',
    color: '#0000FF',
    paddingRight: 20,
  },
})
