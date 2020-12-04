import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
//import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import LaunchScreenButton from './LaunchScreenButton'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'


const LaunchScreen = ({navigation}) => {
  console.log(navigation)

  return (
    <View style={styles.mainContainer}>
      {/* <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}
      <ScrollView style={styles.container}>
        {/* <View style={styles.centered}> */}
          {/* <Image source={Images.launch} style={styles.logo} /> */}
        {/* </View> */}

        <View style={styles.section} >

          <Text style={styles.sectionText}>
            Då ska vi se
          </Text>
        </View>

        {/* <DevscreensButton /> */}
        <LaunchScreenButton
         /* navigation={navigation} */ />
      </ScrollView>
    </View>
  )
}




export default LaunchScreen;

