import { useContext } from "react";
import { FilteredCoinsContext } from "../../../../providers/FilteredCoinsProvider.jsx";
import Coin from "./Coin/Coin.jsx";
import "./Coins.scss";

export default function Coins() {
	const { filteredCoins } = useContext(FilteredCoinsContext);

	return (
		<ul className="coins__list">
			{filteredCoins.map((coin, i) => {
				return <Coin key={i} coin={coin} index={i} />;
			})}
		</ul>
	);
}
