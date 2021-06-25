import React from 'react';
import styled from 'styled-components/native';
import { Animated, TouchableOpacity } from 'react-native';

export const Container = Animated.createAnimatedComponent(styled.View`
   width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
`);

export const ContainerModal = Animated.createAnimatedComponent(styled.View`
    bottom: 0;
     position: absolute;
     height: 80%;
     background-color: #fff;
     width: 100%;
     border-top-left-radius: 20px;
     border-top-right-radius: 20px;
`);
export const Footer = styled.View`
    width: 100%;
    height: 100px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    position: absolute;
    padding: 10px;
`;
export const TouchButton = styled(TouchableOpacity)`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: #9b59b6;
    justify-content: center;
    align-items: center;
    
`;

export const TextButton = styled.Text`
    color: #9b59b6;
`;

