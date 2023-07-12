import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Nav from './components/layout/nav'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Open up App.tsx to start working on your app</Text>
        <StatusBar style="auto" />
      </View>
      <Nav />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
