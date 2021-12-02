import styles from '../../styles/Games.module.css';
import GamesSection from './GamesSection';
import { data } from './data';
export default function Games({popular,topRated}) {

    const items = data.results;


    return (
        <div className={styles.games}>
           {popular && <GamesSection title="Popular Games" items={popular} />}
           
            {topRated && <GamesSection title="Top Rated" items={topRated} />}
            
            {/* <GamesSection title="Upcoming" items={items}  />
            <GamesSection title="Popular" items={items}  /> */}
        </div>
    )
}
