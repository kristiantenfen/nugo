import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction:column;
  padding: 10px;
  
`;
export const TravelInfo = styled.View`
  flex-direction:column;
  margin-top: 40px;
`;

export const Image = styled.Image`
    height:100px;
    width: 100px;
    border-radius: 50px;
    border: 2px solid #f2f2f2;
`;
export const Icon = styled.Image`
    height:50px;
    width: 50px;
`;

export const KmText = styled.Text`
	margin: 10px;
`;
export const Title = styled.Text`
	margin-top: 30px;
  font-size: 12px;
`;
export const UserInfo = styled.View`
   align-items: center;
   flex-direction: column;
`;
export const Header = styled.View`
    margin-top: 10px;
   align-items: center;
   flex-direction: row;
   justify-content: space-between;
`;
export const NameText = styled.Text`
  padding: 10px;
`;
export const Info = styled.Text`
  margin-top:5px;
`;

