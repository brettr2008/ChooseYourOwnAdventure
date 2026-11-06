import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Summit</Text>
      <Text style ={styles.text}>
        You reach the top of the mountain. The view is amazing, but dark clouds are coming. You see a trail down and a campsite nearby.
      </Text>

      <Link href="/ending4" style={styles.button}>
        Head back down 
      </Link>

      <Link href="/campsite" style={styles.button}>
        Go to the campsite
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
