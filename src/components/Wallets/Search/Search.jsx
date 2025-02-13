import searchIcon from "../../../assets/img/icons/search.svg";
import "./Search.scss";

export default function Search() {
	return (
		<form className="search">
			<label className="search__label">
				<input
					type="text"
					className="search__input"
					placeholder="Target crypto/metals..."
				/>
				<span className="search__icon">
					<img src={searchIcon} alt="" />
				</span>
			</label>
			<label className="search__label">
				<input type="checkbox" className="search__checkbox" />
				<span className="search__checkbox-text">show zero balance</span>
			</label>
		</form>
	);
}
