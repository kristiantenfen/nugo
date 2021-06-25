import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

import Modal from '../../components/Modal';

import Driver from '../../interfaces/Driver';

import { randomNumber, randomInteger } from '../../utils/numberHelper'

import { Container, Text, IconMarker } from './styles';
import drivers from '../../../mock.json';
import carIcon from '../../assets/icons/car.png';



const Home: React.FC = () => {
    const [refMap, setRefMap] = useState<any>(null);
    const [modal, setModal] = useState<boolean>(false);
    const [driver, setDriver] = useState<Driver>({} as any);
    const [km, setKm] = useState<number>(0);

    const handleSetDriver = (driver: Driver) => {
        setDriver({ ...driver, price: randomNumber(1, 10).toFixed(2) });
    }
    
    const handleSetKm = () => {
        setKm(randomInteger(300, 1000));
    }

    return (
        <Container>
            <MapView
                ref={ ref => setRefMap(ref)}
                style={{ flex: 1 }}
                onLayout={() =>  refMap.fitToCoordinates(drivers,{edgePadding: { top: 100, right: 20, bottom: 200, left: 20 },animated: true}) }
            >
                {drivers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.nome}
                        identifier={marker.id.toString()}
                        onPress={() => {
                            handleSetDriver(marker);
                            handleSetKm();
                            setModal(true)
                        }
                        }
                    >
                        <IconMarker source={carIcon} />
                        </Marker>
                ))}
            </MapView>
            <Modal show={modal} driver={driver} km={km} close={() => { setModal(false) }}/>
        </Container>
    );
}

export default Home;