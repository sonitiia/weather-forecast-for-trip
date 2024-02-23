import styles from "./Trip.module.css";

const Trip = ({ imageSrc, cityName, startDate, endDate, onClick }) => {
	return (
		<div className={styles.trip_container} onClick={onClick}>
			<img src={imageSrc} alt={cityName} />
			<div className={styles.trip_info}>
				<h3>{cityName}</h3>
				<p>
					{startDate} - {endDate}
				</p>
			</div>
		</div>
	);
};

export default Trip;
