import { SafeAreaView } from "react-native";
import { Redirect } from "expo-router";

const Index = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Redirect href="/card" />
        </SafeAreaView>
    );
};
export default Index;