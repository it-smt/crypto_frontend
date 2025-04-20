import { motion } from "framer-motion";
import { myCoins } from "../../assets/myCoins";
import Header from "../../components/Header/Header";
import Coin from "./Coin/Coin";
import Search from "./Search/Search";
import "./Wallets.scss";

export default function Wallets() {
	return (
		<div className="wrapper">
			<Header />
			<div className="container">
				<div className="content wallets">
					<Search />
					<div className="my-coins">
						{myCoins.map((coin, i) => {
							return (
								<motion.li
									key={i}
									initial={{ x: i % 2 === 0 ? -200 : 200, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{
										duration: 0.5,
										delay: i * 0.1,
										ease: "easeOut",
									}}
									style={{ listStyle: "none", margin: "0 0 20px 0" }}
								>
									<Coin index={i} coin={coin} />
								</motion.li>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
