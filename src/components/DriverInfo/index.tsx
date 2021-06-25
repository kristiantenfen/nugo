import React, { useState, useEffect } from 'react';

import { toCurrency } from '../../utils/numberHelper'; 

import { Container, Image, KmText, NameText, UserInfo, Icon, TravelInfo, Header, Title, Info } from './styles';
import pathImage from '../../assets/images/leticia.png';
import carIcon from '../../assets/icons/car.png';

import Driver from '../../interfaces/Driver';


interface DriverInfoProps {
    driver: Driver,
    km: number
}

const DriverInfo: React.FC<DriverInfoProps> = ({ driver, km }) => {
    const [image, setImage] = useState<string>(pathImage);
    const [amount, setAmount] = useState(0);
    
    useEffect(() => {
        setAmount(km * driver.price);
        handleSetImage('.jpeg');
    }, [driver, km]);


    const handleSetImage = (extension: string) => {
        setImage(`../../assets/images/${driver.nome}.${extension}`)
    }
 
    return (
        <Container>
            <Header>

            <UserInfo>
                    <Image source={{ uri: image }} onError={() => handleSetImage('.png')}/>
                <NameText>{ driver.nome}</NameText>
            </UserInfo>
                <KmText>{toCurrency(driver.price)}</KmText>
                <Icon source={carIcon} />
            </Header>
            <TravelInfo>
                <Title>Distância da viagem em KM</Title>
                <Info>{km}</Info>
                <Title>Km ainda disponível</Title>
                <Info>{km}</Info>
                <Title>Total</Title>
                <Info>{toCurrency(amount)}</Info>
            </TravelInfo>
        </Container>
    );
}

export default DriverInfo;