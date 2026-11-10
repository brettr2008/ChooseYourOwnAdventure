import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const cover = require('@/assets/images/ranger.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={cover} style={styles.image} />
      <Text style={styles.title}>Ending 4: The Wrong Trail</Text>
      <Text style ={styles.text}>
        You take the wrong trail and get lost. Luckily, you find a ranger who helps you get home.
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
    color: '#fff',
    padding: 12
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20
  }
});
