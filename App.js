import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi papa!! This is your daughter</Text>
      <StatusBar style="auto" />
	  <Button title="Press me" onPress={() => Alert.alert('Took me a minute to do this')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
