import { transactions } from "../../../assets/transactions";
import "./Table.scss";
import Transaction from "./Transaction/Transaction";

export default function Table() {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>
						<div className="table__header begin">Date Time</div>
					</th>
					<th>
						<div className="table__header">Amount</div>
					</th>
					<th>
						<div className="table__header">Coin</div>
					</th>
					<th>
						<div className="table__header">Operation</div>
					</th>
					<th>
						<div className="table__header">Address</div>
					</th>
					<th>
						<div className="table__header end">TX ID</div>
					</th>
				</tr>
			</thead>
			<tbody>
				{transactions.map((transaction, i) => {
					return <Transaction key={i} item={transaction} />;
				})}
			</tbody>
		</table>
	);
}
