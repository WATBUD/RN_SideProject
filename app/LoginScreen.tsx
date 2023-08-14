import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View, Image, Dimensions, TextInput, Pressable } from 'react-native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { CheckBox } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const LoginScreen = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const accountInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const [passwordShown, setPasswordShown] = useState(true)

    const buttonEnabled = useMemo(
        () => account.length > 0 && password.length > 0,
        [account, password]
    );

    const login = () => console.log('click login')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image style={{ width: width / 3, height: width / 3, marginTop: height / 10, marginBottom: 20 }}
                        resizeMode='cover'
                        source={{ uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png' }}
                    />


                    <View >
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <FontAwesome5 name="user-alt" size={24} color="#696969" />
                            </View>
                            <TextInput
                                placeholder={"Please input account"}
                                ref={accountInputRef}
                                onChangeText={setAccount}
                                value={account}
                                returnKeyType={password.length > 0 ? "go" : "next"}
                                onSubmitEditing={() => {
                                    if (buttonEnabled) {
                                        login();
                                    } else {
                                        passwordInputRef.current?.focus();
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
                                placeholder={"Please input password"}
                                ref={passwordInputRef}
                                onChangeText={setPassword}
                                value={password}
                                returnKeyType={account.length > 0 ? "go" : "next"}
                                onSubmitEditing={() => {
                                    if (buttonEnabled) {
                                        login();
                                    } else {
                                        accountInputRef.current?.focus();
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
                                {passwordShown ?
                                    <FontAwesome5 name="eye-slash" size={20} color="#696969" /> :
                                    <FontAwesome5 name="eye" size={20} color="#696969" />

                                }
                            </Pressable>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <CheckBox
                            checked={checked}
                            onPress={() => setChecked(!checked)}
                            iconType="material-community"
                            checkedIcon="checkbox-marked"
                            uncheckedIcon="checkbox-blank-outline"
                            checkedColor="#696969"
                            title='Remember me'
                            containerStyle={{ backgroundColor: '#f2f2f2' }}
                            textStyle={{ color: '#696969' }}
                        />
                        {/* <Pressable onPress={()=> console.log('forget password')}>
                            <Text>Forget password</Text>
                        </Pressable> */}
                    </View>

                    {/* 下方登入按鈕 */}
                    <Pressable
                        style={[styles.loginContainer, { backgroundColor: buttonEnabled ? '#4169E1' : '#808080' }]}
                        onPress={() => {
                            login();
                        }}
                        disabled={!buttonEnabled}
                    // loading ||
                    >
                        <Text style={styles.loginText}>Login</Text>
                    </Pressable>

                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        marginHorizontal: 5
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
        borderRadius: 5
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
        bottom: 20,
        borderRadius: 5,
        justifyContent: 'center'
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
        backgroundColor: ''
    },
    rememberText: {
        color: '#696969',
        fontSize: 15,
        marginLeft: 4
    }
})

// https://cdn.logo.com/hotlink-ok/logo-social.png