import { createContext, useContext, useState } from "react";
import Trips from "./Trips";

const TripsContext = createContext({
	selectedTrip: {},
	addTrip: () => {},
	selectTrip: () => {},
});

export const useTrips = () => useContext(TripsContext);

export const TripsProvider = ({ children }) => {
	const [trips, setTrips] = useState(Trips);
	const [selectedTrip, setSelectedTrip] = useState(null);

	const addTrip = (newTrip) => {
		setTrips([...trips, newTrip]);
	};

	const selectTrip = (trip) => {
		setSelectedTrip(trip);
	};

	return (
		<TripsContext.Provider
			value={{
				trips,
				selectedTrip,
				addTrip,
				selectTrip,
			}}
		>
			{children}
		</TripsContext.Provider>
	);
};
