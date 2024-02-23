import { useState } from "react";
import { useTrips } from "../../contexts/TripsContext";
import styles from "./MainRoute.module.css";
import SearchInput from "../../components/serach-input/SearchInput";
import TripList from "../../components/trips/trip-list/TripList";
import ForecastForToday from "../../components/forecast-for-today/ForecastForToday";
import ForecastFromToDate from "../../components/forecast-from-to-date/ForecastFromToDate";

const MainRoute = () => {
	const { trips, selectedTrip } = useTrips();

	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchQuery = (e) => {
		setSearchQuery(e.target.value);
	};

	const filteredTrips = trips.filter((trip) =>
		trip?.city?.cityName.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className={styles.main_container}>
			<div className={styles.left_container}>
				<h1>Weather Forecast</h1>
				<SearchInput
					placeholder="Search your trip"
					value={searchQuery}
					onChange={handleSearchQuery}
				/>
				<div>
					<TripList filteredTrips={filteredTrips} />
				</div>
				{selectedTrip && <ForecastFromToDate />}
			</div>
			<div className={styles.right_container}>
				{selectedTrip && <ForecastForToday />}
			</div>
		</div>
	);
};

export default MainRoute;
