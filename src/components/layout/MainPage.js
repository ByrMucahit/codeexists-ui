import SimpleMap from "../map/SimpleMap";
import LatitudeLongitudeForm from "../form/latitudeLongitudeForm";
import styles from './index.module.css'

const MainPage = () => {


    return (
        <div>
            <div>
                <LatitudeLongitudeForm/>
            </div>
            <div className={styles.map}>
                <SimpleMap/>
            </div>
        </div>
    )
}

export default MainPage;