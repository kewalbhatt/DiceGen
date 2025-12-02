import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/dice.png')}
          style={styles.diceImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>Dicegen</Text>
        <Text style={styles.subtitle}>
          Roll virtual dice with style! Perfect for board games, RPGs, and decision-making.
        </Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer} onPress={() => {router.push('/dice')}}>
          <LinearGradient
            colors={["#FFA94D", "#FF61A6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Roll Dice</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
  
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  diceImage: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: 32,
    
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: width * 0.8,
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    shadowColor: '#FF61A6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
