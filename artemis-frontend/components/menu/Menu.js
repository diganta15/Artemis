import styles from '../../styles/Menu.module.css';
import { MenuItem } from './MenuItem';
export default function Menu() {
    return (
        <div className={styles.menu} >
            <h1 className={styles.header}>Menu</h1>
            <div className={styles.menuItems}>
                <MenuItem title="My Games" />
                <MenuItem title="Wishlist" />
                <MenuItem title="For You" />
            </div>
        </div>
    )
}
