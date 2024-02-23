import Forecast from "../forecast/Forecast";
import styles from "../forecast-list/ForecastList.module.css";

const ForecastList = ({ forecastData }) => {
	return (
		<div className={styles.forecast_list_container}>
			{forecastData.days.map((day) => (
				<Forecast
					key={day.datetime}
					datetime={day.datetime}
					conditions={day.conditions}
					icon={day.icon}
					tempmin={day.tempmin}
					tempmax={day.tempmax}
				/>
			))}
		</div>
	);
};

export default ForecastList;
