import { Button, StyleSheet, Text, View } from 'react-native';
import { useCameraPermissions } from 'expo-camera';

export default function HomeScreen({ navigation }: any) {
  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);
  return (
    <View style={styles.container}>
      <Button title='Scan QR' onPress={() => navigation.navigate("Scanner")} disabled={!isPermissionGranted}/>
      <Button title='Request Permissions' onPress={requestPermission} />
      <Button title='Go to profile' onPress={() => navigation.navigate("Profile", {id: 1})}/>
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
