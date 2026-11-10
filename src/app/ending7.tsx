import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const cover = require('@/assets/images/sunset.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={cover} style={styles.image} />
      <Text style={styles.title}>Ending 7: The Sunset</Text>
      <Text style ={styles.text}>
        You watch the sunset over the mountains. It's the best view you have ever seen, and you head home before it gets too dark.
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
    width: 350,
    height: 200,
    borderRadius: 20
  }
});
