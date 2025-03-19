import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import Main from "./Main/Main";

export default function Dashboard() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__row">
						<Main />
					</div>
				</div>
			</div>
		</div>
	);
}
