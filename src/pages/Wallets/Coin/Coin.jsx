import "./Coin.scss";

export default function Coin({ index, coin }) {
	return (
		<div className="coin">
			<div className="coin__column">
				<p className="coin__number">{index}</p>
				<p className="coin__image">
					<img src={coin.image} alt="" />
				</p>
				<div className="coin__name">{coin.name}</div>
				<div className="coin__symbol">{coin.symbol}</div>
			</div>
			<div className="coin__column">
				<div className="coin__count">Value: {coin.count}</div>
				<div className="coin__price">$ {coin.price}</div>
				<div className="coin__btn">Deposit</div>
				<div className="coin__btn">Withdraw</div>
				<div className="coin__btn">Convert</div>
			</div>
		</div>
	);
}
