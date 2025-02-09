import "./Transaction.scss";

export default function Transaction({ item }) {
	return (
		<tr className="item">
			<td>
				<div className="item__datetime begin">{item.datetime}</div>
			</td>
			<td>
				<div className="item__amount">{item.amount}</div>
			</td>
			<td>
				<div className="item__coin">{item.coin}</div>
			</td>
			<td>
				<div
					className={
						item.operation == "BUY"
							? "item__operation buy"
							: "item__operation sell"
					}
				>
					{item.operation}
				</div>
			</td>
			<td>
				<div className="item__address">{item.address}</div>
			</td>
			<td>
				<div className="item__tx-id end">{item.txID}</div>
			</td>
		</tr>
	);
}
