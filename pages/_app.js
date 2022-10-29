import '../styles/globals.css'
import MapProvider from "../src/context/map/MapProvider";

function MyApp({Component, pageProps}) {
    return (
        <MapProvider>
            <Component {...pageProps} />
        </MapProvider>

    )
}

export default MyApp
