import Base from "./Base/Base";
import "./Header.scss";
import Other from "./Other/Other";

export default function Header({ title }) {
	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<Base title={title} />
					<Other />
				</div>
			</div>
		</header>
	);
}
