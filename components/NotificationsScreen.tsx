import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function NotificationsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button title='Go to profile' onPress={() => navigation.navigate("Profile", {id: 1})}/>
      <Button title='Go to settings' onPress={() => navigation.navigate("Settings", {id: 2})}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
