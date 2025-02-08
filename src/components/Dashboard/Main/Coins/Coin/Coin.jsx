import "./Coin.scss";

export default function Coin({ coin, index }) {
	return (
		<li className="item">
			<div className="item__row">
				<div className="item__column">
					<div className="item__index">{index}</div>
					<div className="item__icon">
						<img src={coin.image} alt="" />
					</div>
					<div className="item__name">{coin.name}</div>
					<div className="coin__symbol">{coin.symbol}</div>
				</div>
				<div className="item__column">
					<div className="item__price">{coin.price} $</div>
					<a href="" className="item__btn buy">
						Buy
					</a>
					<a href="" className="item__btn sell">
						Sell
					</a>
				</div>
			</div>
		</li>
	);
}
