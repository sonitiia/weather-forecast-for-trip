import { useEffect, useState } from "react";
import forecastService from "../../services/ForecastService";
import { useTrips } from "../../contexts/TripsContext";
import styles from "./ForecastForToday.module.css";
import { DaysOfTheWeek } from "../utils/DaysOfTheWeek";
import { WeatherIcons } from "../utils/WeatherIcons";

const ForecastForToday = () => {
	const { selectedTrip } = useTrips();
	const cityName = selectedTrip?.city?.cityName;

	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		const getForecastForToday = async () => {
			try {
				const data =
					await forecastService.getForecastForToday(cityName);
				setWeatherData(data);
			} catch (error) {
				console.error("Error fetching weather data:", error);
			}
		};

		getForecastForToday();
	}, [cityName]);

	const weatherDataInfo = weatherData?.days[0];
	const weatherIcon = WeatherIcons.get(weatherData?.days[0]?.icon) || "";

	return (
		<div className={styles.forecast_for_today_container}>
			{weatherData ? (
				<aside className={styles.forecast_aside}>
					<p>
						{
							DaysOfTheWeek[
								new Date(weatherDataInfo.datetime).getDay()
							]
						}
					</p>

					<span className={styles.icon}>
						{weatherIcon} {weatherDataInfo?.temp} °C
					</span>

					<div>{weatherData?.address}</div>
					<div className={styles.countdown_timer}></div>
				</aside>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default ForecastForToday;
