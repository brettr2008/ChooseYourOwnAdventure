import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Campsite</Text>
      <Text style ={styles.text}>
        You find an empty cabin. It starts raining, so you take shelter. You notice another trail outside. You can stay or keep going.
      </Text>

      <Link href="/ending5" style={styles.button}>
        Stay in the cabin
      </Link>

      <Link href="/overlook" style={styles.button}>
        Go to the overlook
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    color: 'yellow',
    fontSize: 30,
    padding: 20
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    padding: 25
  },
  button: {
    fontSize: 18,
    color: '#fff',
    padding: 12
  },
});
