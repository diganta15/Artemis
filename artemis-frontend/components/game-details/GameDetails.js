import Image from "next/image";
import ImageGallery from "react-image-gallery";
import styles from "../../styles/GameDetails.module.css";
export const GameDetails = ({ game }) => {
	const {
		name,
		background_image,
		description,
		developers,
		esrb_rating,
		publishers,
		platforms,
		rating,
		playtime,
		tags,
		ratings,
		stores,
		metacritic,
	} = game;

	const metacriticRatingStyle = {
		color: "white",
	};
	if (metacritic < 40) {
		metacriticRatingStyle.color = "red";
	}
	if (metacritic >= 40 && metacritic < 60) {
		metacriticRatingStyle.color = "orange";
	}
	if (metacritic >= 60) {
		metacriticRatingStyle.color = "#37D8B7";
	}

	return (
		<div className={styles.container}>
			<div className={styles.imageWrapper}>
				<Image
					src={background_image}
					height={500}
					width={900}
					className={styles.image}
				/>
			</div>

			<h1 className={styles.name}>{name}</h1>
			<div
				className={styles.description}
				dangerouslySetInnerHTML={{ __html: description }}></div>
			<div className={styles.playtime}>
				<h3>Playtime</h3>
				<span>{playtime} hours</span>
			</div>
			<div className={styles.developers}>
				<h2>Developed By</h2>
				<span>
					{developers.map((developer) => (
						<p className={styles.developer} key={developer.id}>
							{developer.name}
						</p>
					))}
				</span>
			</div>
			<div className={styles.publishers}>
				<h2>Published By</h2>
				{publishers.map((publisher) => (
					<p key={publisher.id} className={styles.publisher}>
						{publisher.name}
					</p>
				))}
			</div>
			<div className={styles.ratingsDiv}>
				<h3>Ratings</h3>
				<p className={styles.metacritic} style={metacriticRatingStyle}>
					{metacritic}
				</p>
				<div className={styles.ratings}>
					<div>
						<p className={styles.exceptional}>Exceptional</p>
						<span>{ratings[0].percent}%</span>
					</div>
					<div>
						<p className={styles.recommended}>Recommended</p>
						<span>{ratings[1].percent}%</span>
					</div>
					<div>
						<p className={styles.meh}>Meh</p>
						<span>{ratings[2].percent}%</span>
					</div>
					<div>
						<p className={styles.skip}>Skip</p>
						<span>{ratings[3].percent}%</span>
					</div>
				</div>
			</div>
			<div className={styles.platforms}>
				<h3>Available On</h3>
				<div>
					{platforms.map((platform) => (
						<h4 key={platform.platform.id}>{platform.platform.name}</h4>
					))}
				</div>
			</div>
			<div className={styles.tags}>
				<h3>Tags</h3>
				<span>
					{tags.map((tag) => (
						<p key={tag.id}>{tag.name}</p>
					))}
				</span>
			</div>
			{/* <div className={styles.stores}>
				<h3>Stores</h3>
				<span>
					{stores.map((store) => (
						<a href={store.store.domain} key={store.id}>{store.store.name}</a>
					))}
				</span>
			</div> */}
		</div>
	);
};
