import { StyleSheet, Text, View } from 'react-native'
import FoodLogo from '../FoodLogo'
import SunLogo from '../SunLogo'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <FoodLogo />

        <SunLogo style={styles.sunImage}/>
   </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    sunImage: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})