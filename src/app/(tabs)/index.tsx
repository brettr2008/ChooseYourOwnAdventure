import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Hike</Text>
      <Text style ={styles.text}>
        You and your friend go on a hike. After walking for an hour, you reach a fork in the trail. One path leads to a lake, and the other goes into the forest.
      </Text>

      <Link href="/ending1" style={styles.button}>
        Go to the lake
      </Link>

      <Link href="/forest" style={styles.button}>
        Go into the forest
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
