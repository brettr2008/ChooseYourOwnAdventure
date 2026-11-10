import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const cover = require('@/assets/images/map.jpeg');

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={cover} style={styles.image} />
      <Text style={styles.title}>Ending 5: The Old Cabin</Text>
      <Text style ={styles.text}>
        You stay in the cabin until the rain stops. Inside, you find an old map of hidden hiking trails.
      </Text>

      <Link href="/" style={styles.button}>
        Play Again
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
    padding: 20,
    textAlign: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    padding: 25
  },
  button: {
    fontSize: 18,
    color: '#2ff',
    padding: 12
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 20
  }
});
