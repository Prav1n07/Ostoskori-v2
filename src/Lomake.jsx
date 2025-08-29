import { useContext } from "react";
import { ListContext } from "./ostoslista";

function Lomake() {
	const { handleSubmit, inputValue, setInputValue } = useContext(ListContext);

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Kirjoita ostos"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button type="submit">Lisää</button>
		</form>
	);
}

export default Lomake;
