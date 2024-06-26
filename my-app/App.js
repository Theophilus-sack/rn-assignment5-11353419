import { StyleSheet, View } from 'react-native';
import { Homeheader } from './src/component/Homeheader';

export default function App() {
  return (
    <View style={styles.container}>
      <Homeheader/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
