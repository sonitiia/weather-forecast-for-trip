import axios from "axios";

class ForecastService {
	BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
	API_KEY = "DE25YPVZ6GJBAXK436PYJURJB";

	async getForecastForToday(cityName) {
		return (
			await axios(
				`${this.BASE_URL}${cityName}/today?unitGroup=metric&include=days&key=${this.API_KEY}&contentType=json`,
			)
		).data;
	}

	async getForecastFromToDate(cityName, startDate, endDate) {
		return (
			await axios.get(
				`${this.BASE_URL}${cityName}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${this.API_KEY}&contentType=json`,
			)
		).data;
	}
}

const forecastService = new ForecastService();
export default forecastService;
