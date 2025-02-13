import "./Transaction.scss";

export default function Transaction({ item }) {
	return (
		<tr className="item">
			<td>
				<div className="item__item item__datetime begin">{item.datetime}</div>
			</td>
			<td>
				<div className="item__item item__amount">{item.amount}</div>
			</td>
			<td>
				<div className="item__item item__coin">{item.coin}</div>
			</td>
			<td>
				<div
					className={
						item.operation == "BUY"
							? "item__item item__operation buy"
							: "item__item item__operation sell"
					}
				>
					{item.operation}
				</div>
			</td>
			<td>
				<div className="item__item item__address">
					{item.address.slice(0, 20) + (item.address.length > 20 ? "..." : "")}
				</div>
			</td>
			<td>
				<div className="item__item item__tx-id end">
					{item.txID.slice(0, 20) + (item.txID.length > 20 ? "..." : "")}
				</div>
			</td>
		</tr>
	);
}
