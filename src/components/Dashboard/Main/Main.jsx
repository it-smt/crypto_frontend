import "./Main.scss";
import TwoFA from "./TwoFA/TwoFA";

export default function Main() {
	return (
		<div className="content__main main">
			<TwoFA />
			<div className="main__other">
				<div className="main__text">OTHER...</div>
			</div>
		</div>
	);
}
