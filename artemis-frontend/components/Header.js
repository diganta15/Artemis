import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Image from "next/image";
import Login from "./Login";
import SignUp from "./SignUp";
import styles from "../styles/Header.module.css";
export default function Header() {
	const { user, isLoading, error } = useUser();

	return (
		<div className={styles.headerContent}>
			<h1 className={styles.logo}>
				<Link href='/'>Artemis</Link>
			</h1>
			<div className={styles.headerLinks}>
				{!user || isLoading ? (
					<>
						<Login />
					</>
				) : (
					<>
						<p className={styles.nickname}>{user.nickname}</p>
						<Image src={user.picture} width={40} height={40} className={styles.profilePic} />
					</>
				)}
			</div>
		</div>
	);
}
