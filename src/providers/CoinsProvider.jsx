import { createContext, useState } from "react";
import { coinsData } from "../assets/coins.js";

export const CoinsContext = createContext();

export default function CoinsProvider({ children }) {
	const [coins, setCoins] = useState(coinsData);

	return (
		<CoinsContext.Provider value={{ coins, setCoins }}>
			{children}
		</CoinsContext.Provider>
	);
}
