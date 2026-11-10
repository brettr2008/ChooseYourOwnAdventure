import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const cover = require('@/assets/images/overlook.webp');

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={cover} style={styles.image} />
      <Text style={styles.title}>The Overlook</Text>
      <Text style ={styles.text}>
        You reach a beautiful overlook. The sun is setting, and you see a helicopter nearby. You can wave to it or enjoy the sunset.
      </Text>

      <Link href="/ending6" style={styles.button}>
        Wave to the helicopter
      </Link>

      <Link href="/ending7" style={styles.button}>
        Watch the sunset
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
    width: 350,
    height: 200,
    borderRadius: 20
  }
});
