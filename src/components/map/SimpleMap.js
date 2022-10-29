import styles from "./styles.module.css"
import {useContext, useEffect, useRef} from "react";
import {Loader} from '@googlemaps/js-api-loader'
import {MapContext} from "../../context/map/MapProvider";

const SimpleMap = () => {

    const {latitude, longitude} = useContext(MapContext)
    const googleMap = useRef(null);

    console.log("Longitude: ", longitude);
    console.log("latitude: ", latitude);

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.GOOGLE_API_KEY,
            version: 'quarterly',
        });
        let map;
        loader.load().then(() => {
            const google = window.google;
            map = new google.maps.Map(googleMap.current, {
                center: {lat: latitude , lng: longitude},
                zoom: 8,
            });
        });
    }, [longitude, latitude]);

    return (
        <div className={styles.map} ref={googleMap} />
    );
}


export default SimpleMap;