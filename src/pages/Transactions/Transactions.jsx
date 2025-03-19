import Header from "../../components/Header/Header";
import Table from "./Table/Table";
import "./Transactions.scss";

export default function Transactions() {
	return (
		<div className="wrapper">
			<Header />
			<div className="container">
				<div className="content">
					<Table />
				</div>
			</div>
		</div>
	);
}
