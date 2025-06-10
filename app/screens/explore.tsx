import { StyleSheet, Text, View } from 'react-native';

export const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.subtitle}>Welcome to the Explore Screen</Text>
      <Text style={styles.description}>
        This screen demonstrates the navigation and layout capabilities of the app.
        Use the menu button below to navigate between screens.
      </Text>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
  },
});
