import Header from "../Header/Header";
import Table from "./Table/Table";
import "./Transactions.scss";

export default function Transactions() {
	return (
		<>
			<Header title={"Transactions"} />
			<div className="container">
				<div className="content">
					<Table />
				</div>
			</div>
		</>
	);
}
