import { StyleSheet, View } from 'react-native'

export default function Nav() {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '52px',
    flexShrink: 0,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
})
