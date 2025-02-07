import { Link } from "react-router";
import logo from "../../../assets/img/icons/logo.svg";
import "./Base.scss";

export default function Base({ title }) {
	const menuItems = [
		{ name: "Dashboard", path: "/" },
		{ name: "Wallets", path: "/wallets" },
		{ name: "Buy/Sell Crypto", path: "/buy-sell" },
		{ name: "Earnings", path: "/earnings" },
		{ name: "Transactions", path: "/transactions" },
	];

	return (
		<div className="header__base base">
			<div className="base__logo">
				<img src={logo} alt="" />
			</div>
			<div className="base__menu">
				<ul className="base__list">
					{menuItems.map((item, i) => {
						return (
							<li key={i} className="base__item">
								<Link
									className={title == item.name ? "_active" : ""}
									to={item.path}
								>
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
