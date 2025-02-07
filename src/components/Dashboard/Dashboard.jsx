import Header from "../Header/Header";
import "./Dashboard.scss";
import Main from "./Main/Main";
import Statistics from "./Statistics/Statistics";

export default function Dashboard() {
	return (
		<div className="wrapper">
			<Header title={"Dashboard"} />
			<div className="content">
				<div className="container">
					<div className="content__row">
						<Main />
						<Statistics />
					</div>
				</div>
			</div>
		</div>
	);
}
