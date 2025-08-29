import { useContext } from "react";
import { ListContext } from "./ostoslista";

function ItemList() {
	const { items, removeItem } = useContext(ListContext);
	console.log(items);

	return (
		<ul>
			{items.map((item, index) => (
				<li key={index} onClick={() => removeItem(index)}>
					{item}
				</li>
			))}
		</ul>
	);
}

export default ItemList;
