import styles from '../../styles/Menu.module.css';
import { MenuItem } from './MenuItem';
export default function Menu() {
    return (
        <div className={styles.menu} >
            <h1 className={styles.header}>Menu</h1>
            <div className={styles.menuItems}>
                <MenuItem title="My Games" icon={"fas fa-gamepad"} link="mygames" />
                <MenuItem title="Wishlist" icon={"fas fa-list"} link="wishlist"  />
                <MenuItem title="Steam" icon={"fab fa-steam"} link="steam" />
            </div>
        </div>
    )
}
