
import React, { useState, useEffect } from 'react'
import { Animated, Dimensions } from 'react-native'
import DriverInfo from '../DriverInfo';
import { TouchButton, ContainerModal, Container , Footer, TextButton} from './styles';
const { height } = Dimensions.get('window')

import Driver from '../../interfaces/Driver';

interface ModalProps {
    show: boolean;
    close: ()=> void;
    driver: Driver;
    km: number;
}

const Modal: React.FC<ModalProps> = ({ show, close, driver, km }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })

  const handleClose = () => {
    close();
  }

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true })
    ]).start()
  }

  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  return( 
    <Container
      style={{
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }}
    >
      <ContainerModal 
        style={{
          transform: [
            { translateY: state.modal }
          ]
        }}
          >
              
        <DriverInfo driver={driver} km={km}/>
       
        <Footer>
          <TouchButton onPress={handleClose}>
            <TextButton>Confirmar</TextButton>
          </TouchButton>
        </Footer>
      </ContainerModal>
    </Container>
  )
};
    
export default Modal;

