import "./Notification.scss";

export default function Notification({ notification }) {
	return (
		<li className="notifications__menu-item">
			<div className="notifications__menu-item-header">
				<h4 className="notifications__menu-item-title">{notification.title}</h4>
				<div className="notifications__menu-item-date">{notification.date}</div>
			</div>
			<p className="notifications__menu-item-text">{notification.text}</p>
		</li>
	);
}
