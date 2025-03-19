import { useContext, useEffect, useState } from "react";
import searchIcon from "../../../../assets/img/icons/search.svg";
import { CoinsContext } from "../../../../providers/CoinsProvider";
import { FilteredCoinsContext } from "../../../../providers/FilteredCoinsProvider";
import { searchCoins } from "../../../../utils/searchCoins";
import "./Search.scss";

export default function Search() {
	const { coins } = useContext(CoinsContext);
	const [value, setValue] = useState("");
	const { setFilteredCoins } = useContext(FilteredCoinsContext);

	useEffect(() => {
		setFilteredCoins(coins);
	}, []);

	useEffect(() => {
		searchCoins(value, coins, setFilteredCoins);
	}, [value]);

	return (
		<form
			className="form"
			onSubmit={e => {
				e.preventDefault();
			}}
		>
			<label className="form__search-label">
				<input
					type="text"
					className="form__search"
					placeholder="Enter crypto/metal..."
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<span className="form__search-icon">
					<img src={searchIcon} alt="" />
				</span>
			</label>
		</form>
	);
}
