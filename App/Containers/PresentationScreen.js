import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AllMovieScreen from '../Components/AllMovieScreen'

import styles from './Styles/PresentationScreenStyles'

const PresentationScreen = ({navigation, screenProps}) => {
  console.log(navigation)
  console.log(screenProps)

  /* const openComponents = () => {
    navigation.navigate('AllMovieScreen')
  }

  const openUsage = () => {
    navigation.navigate('FaqScreen')
  } */

  return (
    <View style={styles.mainContainer}>
      <Text> hej</Text>

       <TouchableOpacity onPress={screenProps.toggle} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
        </TouchableOpacity>
    </View>
  )
}

const stackNavigator = createStackNavigator({
  PresentationScreen: {screen: PresentationScreen},
  AllMovieScreen: {screen: AllMovieScreen},
  /* FaqScreen: {screen: FaqScreen} */
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'PresentationScreen',
  headerMode: 'none',
  // Keeping this here for future when we can make
  navigationOptions: {
    header: {
      /* left: (
        <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{marginHorizontal: 10}} /></TouchableOpacity>
      ), */
      style: {
        backgroundColor: '#3e243f'
      }
    }
  }
})

export default createAppContainer(stackNavigator);
