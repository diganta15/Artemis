import styles from '../../styles/Games.module.css';
import GamesSection from './GamesSection';
import { data } from './data';
export default function Games() {

    const items = data.results;


    return (
        <div className={styles.games}>
            <GamesSection title="Popular" items={items} />
            {/* <GamesSection title="Upcoming" items={items}  />
            <GamesSection title="Popular" items={items}  /> */}
        </div>
    )
}
