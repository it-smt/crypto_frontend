import Notifications from "./Notifications/Notifications";
import "./Other.scss";
import Profile from "./Profile/Profile";
import Wallet from "./Wallet/Wallet";

export default function Other() {
	return (
		<div className="other-menu">
			<div className="other-menu__row">
				<Wallet />
				<Notifications />
				<Profile />
			</div>
		</div>
	);
}
