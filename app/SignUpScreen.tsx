import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import { ColorStyles } from './constants/ColorStyle'
import { Controller, useForm } from 'react-hook-form'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const SignUpScreen = () => {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      password: '',
      checkPassword: '',
    //   mobile: '',
      mail: '',
    },
  })
  const createAccount = () => console.log('create Account')

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorStyles.white,
      }}>
      {/* <View>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: '栏位不能为空',
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
                message: '用户名必需是英数组合',
              },
            }}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={'Enter username'}
                value={value}
                enablesReturnKeyAutomatically
                textContentType="username"
                autoComplete="username"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {true && <Text>{errors?.name?.message ?? 'undefined'}</Text>}
      </View> */}
      <Pressable
        style={[styles.loginContainer, { backgroundColor: '#4169E1' }]}
        onPress={() => {
          handleSubmit(createAccount)
          console.log(77777)
        }}
        // disabled={!buttonEnabled}
        // loading ||
      >
        <Text style={styles.loginText}>Create Account</Text>
      </Pressable>
    </View>
  )
}

export default SignUpScreen

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
    width: width * 0.6,
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
