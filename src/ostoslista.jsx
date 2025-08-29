import { useState, useContext, createContext } from "react";
import ItemList from "./ItemList";
import Lomake from "./Lomake";

export const ListContext = createContext();

function Ostoslista() {
	const [items, setItems] = useState(["omena", "banaani", "kiivi"]);
	const item1 = "";
	const [inputValue, setInputValue] = useState(item1);
	const removeItem = (indexToRemove) => {
		setItems(items.filter((item, index) => index !== indexToRemove));
	};

	const onAddItem = (inputValue) => {
		setItems([...items, inputValue]);
	};

	const handleSubmit = (event) => {
		event.preventDefault(); // Estää sivun uudelleenlatauksen
		if (inputValue == "") {
		} else {
			onAddItem(inputValue); // Lähettää uuden ostoksen
			setInputValue(""); // Tyhjentää tekstikentän
		}
	};

	return (
		<div id="main">
			<ListContext.Provider value={{ items, removeItem, handleSubmit, inputValue, setInputValue }}>
				<Lomake />
				<ItemList />
			</ListContext.Provider>
		</div>
	);
}

export default Ostoslista;
