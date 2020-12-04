import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import RoundedButton from '../Components/RoundedButton';
//import Button from '../Components/Button';
import PresentationScreen from './PresentationScreen';

const LaunchScreenButton = ({navigation}) => {
  console.log(navigation)

  const [showModal, setShowModal] = useState(false)

  // this functions both opens and closes
  const handelModal = () => setShowModal(!showModal)

  return (
    <View>
        <RoundedButton
        navigation={navigation}
        onPress={handelModal}>
        Gå till alla filmer
        </RoundedButton>
       {/*  <Button onPress={handelModal}>
        Gå till alla filmer
        </Button> */}
        <Modal
        visible={showModal}
        onRequestClose={handelModal}>
        <PresentationScreen screenProps={{ toggle: handelModal }}
        navigation={navigation}/>
        </Modal>
      </View>
  )
}

export default LaunchScreenButton;
