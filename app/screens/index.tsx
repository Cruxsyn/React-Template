import { Text, View } from 'react-native';

export const Home = () => {
  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        borderWidth: 2,
        borderColor: '#000000',
    }}>
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 10, width: 800, height: 150}}>
                <Text style={{fontFamily: 'Arial', fontSize: 36, fontWeight: '700', color: '#ffffff', letterSpacing: 2}}>Template Home Screen</Text>
                <Text style={{fontFamily: 'Arial', fontSize: 18, fontWeight: '600', color: '#ffffff'}}>Template Subtitle</Text>
            </View>
    </View>
  );
}

export default Home;