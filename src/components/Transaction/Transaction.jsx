export default function Transaction({
	title,
	amount,
	address,
	txid,
	statusText,
}) {
	const styles = {
		Complete: {
			image: "/check_circle.svg",
			borderL: "10px solid rgb(46, 189, 133)",
			clr: "rgb(46, 189, 133)",
		},
		"In progress": {
			image: "/access_time.svg",
			borderL: "10px solid rgb(189, 189, 46)",
			clr: "rgb(189, 189, 46)",
		},
		Rejected: {
			image: "/error.svg",
			borderL: "10px solid rgb(246, 70, 93)",
			clr: "rgb(246, 70, 93)",
		},
	};

	return (
		<div
			className="transaction"
			style={{ borderLeft: styles[statusText].borderL }}
		>
			<h3 className="transaction__title">{title}</h3>
			<p className="transaction__amount">
				Amount: <span>{amount}</span>
			</p>
			<p className="transaction__address">
				To address: <span>{address}</span>
			</p>
			<p className="transaction__txid">
				TxID: <span>{txid}</span>
			</p>
			<p className="transaction__status">
				<img src={styles[statusText].image} alt="" />
				<span style={{ color: styles[statusText].clr }}>{statusText}</span>
			</p>
		</div>
	);
}
