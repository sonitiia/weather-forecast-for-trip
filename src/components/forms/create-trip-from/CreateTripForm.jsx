import { useForm } from "react-hook-form";
import styles from "./CreateTripForm.module.css";
import { useTrips } from "../../../contexts/TripsContext";

const CreateTripForm = ({ children, onClose }) => {
	const { addTrip } = useTrips();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "all" });

	const onSubmit = (data) => {
		const newTrip = {
			city: {
				cityName: data.cityName,
				imageSrc: data.imageSrc,
			},
			startDate: data.startDate,
			endDate: data.endDate,
		};

		addTrip(newTrip);
		onClose();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<label htmlFor="cityName">City *</label>
			<input
				id="cityName"
				type="text"
				placeholder="Please select a city"
				{...register("cityName", { required: true })}
			/>
			{errors.cityName && (
				<p className={styles.errors}>This field is required</p>
			)}

			<label htmlFor="imageSrc">Image *</label>
			<input
				id="imageSrc"
				type="text"
				placeholder="Please provide city image"
				{...register("imageSrc", { required: true })}
			/>
			{errors.imageSrc && (
				<p className={styles.errors}>This field is required</p>
			)}
			<label htmlFor="startDate">Start Date *</label>
			<input
				id="startDate"
				type="date"
				{...register("startDate", { required: true })}
			/>
			{errors.startDate && (
				<p className={styles.errors}>This field is required</p>
			)}

			<label htmlFor="endtDate">End Date *</label>
			<input
				id="endtDate"
				type="date"
				{...register("endDate", { required: true })}
			/>
			{errors.endDate && (
				<p className={styles.errors}>This field is required</p>
			)}

			<div className={styles.flex_end}>
				{children}

				<button type="submit" className={styles.submitButton}>
					Add
				</button>
			</div>
		</form>
	);
};

export default CreateTripForm;
