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
			<div className="main__other">
				<CoinsProvider>
					<FilteredCoinsProvider>
						<Search />
						<div className="coins">
							<Coins />
						</div>
					</FilteredCoinsProvider>
				</CoinsProvider>
			</div>
		</div>
	);
}
