import CreateTripForm from "../../forms/create-trip-from/CreateTripForm";
import styles from "./CreateTripModal.module.css";

const CreateTripModal = ({ onClose }) => {
	return (
		<div className={styles.modal_container}>
			<div className={styles.modal_content}>
				<div className={styles.flex_between}>
					<h4>Create Trip</h4>
					<span onClick={onClose} className={styles.close}>
						&times;
					</span>
				</div>
				<CreateTripForm onClose={onClose}>
					<button
						type="button"
						className={styles.cancel_button}
						onClick={onClose}
					>
						Cancel
					</button>
				</CreateTripForm>
			</div>
		</div>
	);
};

export default CreateTripModal;
