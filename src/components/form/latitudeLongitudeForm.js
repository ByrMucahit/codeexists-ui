import styles from './style.module.css';
import {useContext, useState} from "react";
import React from "react";
import axios from "axios";
import { MapContext } from "../../context/map/MapProvider";


const latitudeLongitudeForm = () => {

    const {latitude, longitude, mapRequest} = useContext(MapContext);

    console.log("latitude: ", latitude);

    const [state, setState] = React.useState({
        longitude: 0,
        latitude: 0,
        radius: 1
    })

    function handleChange(e) {
        if (e.target.files) {
            setState({...state, [e.target.name]: e.target.files[0]});
        } else {
            setState({...state, [e.target.name]: e.target.value});
        }
    }


    async function handleSubmit(e) {
        e.preventDefault();
        console.log('state: ', state);
        mapRequest(state);

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <div>
                        <label htmlFor={"latitude"}>Latitude</label>
                        <input
                            id={"latitude"}
                            name={"latitude"}
                            type={"number"}
                            placeholder={"Enter the latitude"}
                            onChange={handleChange}
                            value={state.latitude}
                        />
                    </div>
                    <div>
                        <label htmlFor={"longitude"}>Longitude</label>
                        <input
                            id={"longitude"}
                            name={"longitude"}
                            type={"number"}
                            placeholder={"Enter the longitude"}
                            onChange={handleChange}
                            value={state.longitude}
                        />
                    </div>

                    <div>
                        <label htmlFor={"radius"}>Radius</label>
                        <input
                            id={"radius"}
                            name={"radius"}
                            type={"number"}
                            placeholder={"Enter the radiues"}
                            onChange={handleChange}
                            value={state.radius}
                        />
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.formButton} type={"submit"}>Search</button>
                </div>

            </div>
        </form>
    );
}

export default latitudeLongitudeForm;