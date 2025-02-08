import { useState } from "react";
import helpIcon from "../../../../assets/img/icons/help.svg";
import logoutIcon from "../../../../assets/img/icons/logout.svg";
import profileIcon from "../../../../assets/img/icons/Profile.svg";
import settingsIcon from "../../../../assets/img/icons/settings.svg";
import {
	createClickHandler,
	useClickOutsideHandler,
} from "../../../../handlers/handleClickOutside";
import "./Profile.scss";

export default function Profile() {
	const [active, setActive] = useState(false);
	const handleClickOutside = createClickHandler(
		[".profile__icon", ".profile-menu"],
		setActive
	);

	useClickOutsideHandler(handleClickOutside);

	const profileItems = [
		{
			title: "My Settings",
			path: "/settings",
			icon: settingsIcon,
		},
		{
			title: "Help & Support",
			path: "/help",
			icon: helpIcon,
		},
		{
			title: "Logout",
			path: "/logout",
			icon: logoutIcon,
		},
	];

	return (
		<div className="profile">
			<div className="profile__icon" onClick={() => setActive(!active)}>
				<img src={profileIcon} alt="" />
			</div>
			<div className={active ? "profile-menu _active" : "profile-menu"}>
				<h4 className="profile-menu__title">example@gmail.com</h4>
				<hr />
				<ul className="profile-menu__list">
					{profileItems.map((item, i) => {
						return (
							<li key={i}>
								<a href={item.path}>
									<img src={item.icon} alt="" />
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
