import Image from "next/image";
import ImageGallery from 'react-image-gallery';
import styles from "../../styles/GameDetails.module.css";
export const GameDetails = ({ game }) => {
	const {
		name,
		background_image,
		description,
		developers,
		esrb_rating,
		publishers,
		rating,
		stores,
	} = game;
  
	return (
		<div className={styles.container}>
			<div className={styles.imageWrapper}>
                <Image src={background_image} height={500} width={900} className={styles.image} />
            </div>
            
			<h1 className={styles.name}>{game.name}</h1>
			<div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} >
            

            </div>
		</div>
	);
};
