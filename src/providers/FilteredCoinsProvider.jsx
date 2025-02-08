import { createContext, useState } from "react";
import { coinsData } from "../assets/coins";

export const FilteredCoinsContext = createContext();

export default function FilteredCoinsProvider({ children }) {
	const [filteredCoins, setFilteredCoins] = useState(coinsData);

	return (
		<FilteredCoinsContext.Provider value={{ filteredCoins, setFilteredCoins }}>
			{children}
		</FilteredCoinsContext.Provider>
	);
}
