import { motion } from "framer-motion";
import CoinsProvider from "../../../providers/CoinsProvider";
import FilteredCoinsProvider from "../../../providers/FilteredCoinsProvider";
import Coins from "./Coins/Coins";
import "./Main.scss";
import Search from "./Search/Search";
import TwoFA from "./TwoFA/TwoFA";

export default function Main() {
	return (
		<div className="content__main main">
			<TwoFA />
			<motion.div
				className="main__other"
				initial={{ y: 100, opacity: 0 }} // Начальное состояние: снизу и прозрачность 0
				animate={{ y: 0, opacity: 1 }} // Конечное состояние: на месте и прозрачность 1
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }} // Задержка для согласования с анимацией TwoFA
			>
				<CoinsProvider>
					<FilteredCoinsProvider>
						<Search />
						<div className="coins">
							<Coins />
						</div>
					</FilteredCoinsProvider>
				</CoinsProvider>
			</motion.div>
		</div>
	);
}
