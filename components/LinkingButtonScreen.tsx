import React from "react";
import { Button, Linking, StyleSheet, View } from "react-native";

export default function LinkingButtonScreen({ navigation }: any) {
    const profileUrl = "demo://app/profile/234";
    const notificationUrl = "demo://app/notifications";
    const homeUrl = "demo://app/home/123";
    const settingsUrl = "demo://app/settings";

    return (
        <View style={styles.container}>
            <Button title="Deeplinkg to Profile" onPress={() => Linking.openURL(profileUrl)}/>
            <Button title="Deeplinkg to Notifications" onPress={() => Linking.openURL(notificationUrl)}/>
            <Button title="Deeplinkg to Home" onPress={() => Linking.openURL(homeUrl)}/>
            <Button title="Deeplinkg to Settings" onPress={() => Linking.openURL(settingsUrl)}/>
            <Button title="Open public Url" onPress={() => Linking.openURL("https://vite-react-weld-seven-59.vercel.app")}/>
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});