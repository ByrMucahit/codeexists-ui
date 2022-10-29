import React, {useContext, useState} from "react";
import { Alert } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";

export const MapContext = React.createContext('unkonwn');


const MapProvider = (props) => {

    const [longitude, setLongitude] = useState(-73.961452);
    const [latitude, setLatitude] = useState(40.714224);


    const mapRequest = (state) => {
        const ins = axios.create({
            baseURL: 'http://localhost:8080',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

        ins.post('/api/getLocation',state).then((response)=>{
            console.log('auth response: ', response.data);
            if(response.status === 200 || response.status === 201) {
                console.log('response: ', response);
                setLatitude(response.data.latitude)
                setLongitude(response.data.longitude);
            }

        }).catch((e)=>{
            console.log('response error: ', e?.response);
            <Alert message="Error Text" type="error" />
        });

    }

    console.log('provider: ', props);

    return (
        <MapContext.Provider value={{longitude, latitude, mapRequest}}>
            {props.children}
        </MapContext.Provider>
    )
}


export default MapProvider;