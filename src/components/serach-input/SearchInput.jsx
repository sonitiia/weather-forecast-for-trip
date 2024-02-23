import styles from "./SearchInput.module.css";

const SearchInput = ({ placeholder, value, onChange }) => {
	return (
		<span className={styles.search_container}>
			<span className={styles.search_icon}>🔎</span>
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={styles.search_input}
			/>
		</span>
	);
};

export default SearchInput;
