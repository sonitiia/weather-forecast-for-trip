import { TripsProvider } from "../contexts/TripsContext";
import MainRoute from "../routes/main-route/MainRoute";

const App = () => {
	return (
		<TripsProvider>
			<MainRoute />
		</TripsProvider>
	);
};

export default App;
