import { useState } from "react";
import walletIcon from "../../../../assets/img/icons/wallet.svg";
import {
	createClickHandler,
	useClickOutsideHandler,
} from "../../../../handlers/handleClickOutside";
import "./Wallet.scss";

export default function Wallet() {
	const [active, setActive] = useState(false);
	const handleClickOutside = createClickHandler(
		[".wallet__coins", ".wallet__menu"],
		setActive
	);

	useClickOutsideHandler(handleClickOutside);

	return (
		<div className="wallet">
			<div onClick={() => setActive(!active)} className="wallet__coins">
				<span>
					<img src={walletIcon} alt="" />
				</span>
				≈ 0.00000000023 BTC
			</div>
			<div className={active ? "wallet__menu _active" : "wallet__menu"}>
				<div className="wallet__grid">
					<h4 className="wallet__title">Assets</h4>
					<h4 className="wallet__title">Available</h4>
					<p className="wallet__data">Total Account (USDT)</p>
					<p className="wallet__data">0</p>
				</div>
				<a className="wallet__exchange" href="#">
					Exchange
				</a>
			</div>
		</div>
	);
}
