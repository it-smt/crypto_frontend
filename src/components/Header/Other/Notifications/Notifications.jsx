import { useState } from "react";
import notificationsIcon from "../../../../assets/img/icons/notification.svg";
import {
	createClickHandler,
	useClickOutsideHandler,
} from "../../../../handlers/handleClickOutside";
import Notification from "./Notification/Notification";
import "./Notifications.scss";

export default function Notifications() {
	const [active, setActive] = useState(false);
	const handleClickOutside = createClickHandler(
		[".notifications__icon", ".notifications__menu"],
		setActive
	);

	useClickOutsideHandler(handleClickOutside);

	return (
		<div className="notifications">
			<div onClick={() => setActive(!active)} className="notifications__icon">
				<img src={notificationsIcon} alt="" />
			</div>
			<div
				className={
					active ? "notifications__menu _active" : "notifications__menu"
				}
			>
				<ul className="notifications__menu-list">
					<Notification
						notification={{
							title: "Lorem ipsum...",
							date: "04.02.2025",
							text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, assumenda unde, maiores amet excepturi ea molestiae aliquam nam numquam sint quidem minus, ipsam voluptatibus. Placeat modi tenetur maxime ex rerum?",
						}}
					/>
					<Notification
						notification={{
							title: "Lorem ipsum...",
							date: "04.02.2025",
							text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, assumenda unde, maiores amet excepturi ea molestiae aliquam nam numquam sint quidem minus, ipsam voluptatibus. Placeat modi tenetur maxime ex rerum?",
						}}
					/>
				</ul>
			</div>
		</div>
	);
}
