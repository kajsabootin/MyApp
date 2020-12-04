import React/* , { Component } */ from 'react'
import { TouchableOpacity, Text } from 'react-native'
//import styles from './Styles/RoundedButtonStyles'

const Button = ({background, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}></Text>
      </TouchableOpacity>

  )
}

export default Button;
