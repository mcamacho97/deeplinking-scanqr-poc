import { Button, StyleSheet, Text, View } from 'react-native';
import { useCameraPermissions } from 'expo-camera';
import WithLogo from './qrGenerator/WithLogo';
import Shadow from './Shadow';


export default function HomeScreen({ navigation }: any) {
  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);
  return (
    <View style={styles.container}>
      <Shadow title="QR with logo">
        <WithLogo />
      </Shadow>

      <Button title='Scan QR' onPress={() => navigation.navigate("Scanner")} disabled={!isPermissionGranted}/>
        {
        isPermissionGranted ? (
          <Text style={{color: 'green'}}>Camera permission granted</Text>
        ) : (
        <>
          <Text style={{color: 'red'}}>Camera permission not granted</Text>
          <Button title='Request permission' onPress={requestPermission}/>
        </>
        )
        }
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
