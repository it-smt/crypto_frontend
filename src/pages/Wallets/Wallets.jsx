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
							return <Coin index={i} coin={coin} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
