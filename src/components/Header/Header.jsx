import { Link, useLocation } from "react-router";
import "./Header.scss";

export default function Header() {
	const location = useLocation();
	const links = [
		{ title: "Home", href: "/", icon: "/home.svg" },
		{ title: "Dashboard", href: "/dashboard", icon: "/dashboard.svg" },
		{ title: "Wallets", href: "/wallets", icon: "/wallets.svg" },
		{ title: "Earnings", href: "/earnings", icon: "/earnings.svg" },
		{ title: "Transactions", href: "/transactions", icon: "/transactions.svg" },
	];

	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<Link to={"/"} className="header__logo">
						minestacks
					</Link>
					<div className="header__menu">
						<div className="header__burger">
							<span></span>
						</div>
						<span></span>
						<div className="header__menu-row">
							<ul className="header__list">
								{links.map((link, i) => {
									return (
										<li key={i}>
											<Link
												to={link.href}
												className={
													link.href === location.pathname
														? "header__link _active"
														: "header__link"
												}
											>
												<img src={link.icon} alt="" />
												{link.title}
											</Link>
										</li>
									);
								})}
							</ul>
							<button className="header__btn">CONNECT ACCOUNT</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
