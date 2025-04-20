import { motion } from "framer-motion";
import { useContext } from "react";
import { FilteredCoinsContext } from "../../../../providers/FilteredCoinsProvider.jsx";
import Coin from "./Coin/Coin.jsx";
import "./Coins.scss";

export default function Coins() {
	const { filteredCoins } = useContext(FilteredCoinsContext);

	return (
		<ul className="coins__list">
			{filteredCoins.map((coin, i) => (
				<motion.li
					key={i}
					initial={{ x: i % 2 === 0 ? -200 : 200, opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
						transition: {
							duration: 0.5,
							delay: 0.5 + i * 0.1,
							ease: "easeOut",
						},
					}}
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.98 }}
				>
					<Coin coin={coin} index={i} />
				</motion.li>
			))}
		</ul>
	);
}
