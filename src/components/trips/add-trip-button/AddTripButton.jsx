import styles from "./AddTripButton.module.css";

const AddTripButton = ({ handleModalOpen }) => {
	return (
		<button className={styles.add_trip_btn} onClick={handleModalOpen}>
			<h3>+</h3>
			<h3>Add trip</h3>
		</button>
	);
};

export default AddTripButton;
