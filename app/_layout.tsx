import { Stack } from "expo-router";
// import Provider from "@ant-design/react-native/lib/provider";
// import { store } from "../store";
import { Platform, SafeAreaView } from "react-native";

export default function AppLayout() {

    return (
        // <Provider>
        //   <ReduxProvider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false, gestureEnabled: false, animation: 'none' }} />
        </SafeAreaView>
  );
}