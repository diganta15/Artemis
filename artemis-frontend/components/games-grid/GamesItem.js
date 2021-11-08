import Image from 'next/image'
import styles from '../../styles/GamesItem.module.css'
export default function GamesItem({item}) {
    return (
        <div className={styles.card}>
            <Image src={item.background_image} className={styles.image} width={350} height={170} />
            <div className={styles.details}>
                <h3 className={styles.name} >{item.name}</h3>
              <div className={styles.rating}>
                  <div className={styles.ratingInner}></div>
              </div>
            </div>
        </div>
    )
}
