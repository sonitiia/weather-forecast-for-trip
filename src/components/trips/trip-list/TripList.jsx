import { useState } from "react";
import CreateTripModal from "../../modals/create-trip-modal/CreateTripModal";
import Trip from "../trip/Trip";
import styles from "./TripList.module.css";
import { useTrips } from "../../../contexts/TripsContext";
import AddTripButton from "../add-trip-button/AddTripButton";

const TripList = ({ filteredTrips }) => {
	const { trips, selectTrip } = useTrips();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleTripSelect = (trip) => {
		selectTrip(trip);
	};

	return (
		<div className={styles.trip_list_container}>
			<AddTripButton handleModalOpen={handleModalOpen} />
			{(filteredTrips && filteredTrips.length > 0
				? filteredTrips
				: trips
			).map((trip) => (
				<Trip
					key={trip.city.cityName}
					imageSrc={trip.city.imageSrc}
					cityName={trip.city.cityName}
					startDate={trip.startDate}
					endDate={trip.endDate}
					onClick={() => handleTripSelect(trip)}
				/>
			))}
			{isModalOpen && <CreateTripModal onClose={handleModalClose} />}
		</div>
	);
};

export default TripList;
