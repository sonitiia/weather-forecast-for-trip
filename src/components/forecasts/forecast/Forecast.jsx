import { DaysOfTheWeek } from "../../utils/DaysOfTheWeek";
import { WeatherIcons } from "../../utils/WeatherIcons";
import styles from "../forecast/Forecast.module.css";

const Forecast = ({ datetimeEpoch, datetime, icon, tempmin, tempmax }) => {
	const weatherIcon = WeatherIcons.get(icon) || "";

	return (
		<div key={datetimeEpoch} className={styles.forecast_container}>
			<p>{DaysOfTheWeek[new Date(datetime).getDay()]}</p>
			<p className={styles.icon}>{weatherIcon}</p>
			<h4>
				{Math.floor(tempmin)}°C / {Math.ceil(tempmax)}°C
			</h4>
		</div>
	);
};

export default Forecast;
