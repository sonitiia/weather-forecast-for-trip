import { useEffect, useState } from "react";
import { useTrips } from "../../contexts/TripsContext";
import forecastService from "../../services/ForecastService";
import styles from "./ForecastFromToDate.module.css";
import ForecastList from "../forecasts/forecast-list/ForecastList";

const ForecastFromToDate = () => {
	const { selectedTrip } = useTrips();
	const cityName = selectedTrip?.city?.cityName;
	const startDate = selectedTrip?.startDate;
	const endDate = selectedTrip?.endDate;

	const [forecastData, setForecastData] = useState(null);

	useEffect(() => {
		const getForecastFromToDate = async () => {
			try {
				const data = await forecastService.getForecastFromToDate(
					cityName,
					startDate,
					endDate,
				);
				setForecastData(data);
			} catch (error) {
				console.error("Error fetching weather data:", error);
			}
		};

		getForecastFromToDate();
	}, [cityName, startDate, endDate]);

	return (
		<div className={styles.forecast_container}>
			{forecastData ? (
				<div className={styles.container}>
					<h3>Forecast for the trip</h3>
					<ForecastList forecastData={forecastData} />
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default ForecastFromToDate;
