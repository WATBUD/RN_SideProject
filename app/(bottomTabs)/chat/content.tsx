import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    View,
    Image,
    Pressable,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
// import Toast from '@ant-design/react-native/lib/toast'

const Chat = () => {
    const router = useRouter();
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize: 30}}>
                    ChatScreen
                </Text>
            </View>
        </TouchableWithoutFeedback>

    );
};

export default Chat;