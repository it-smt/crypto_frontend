import "./TwoFA.scss";

export default function TwoFA() {
	return (
		<div className="main__TwoFA TwoFA">
			<div className="TwoFA__body">
				<h3 className="TwoFA__title">
					Stay Safe! Enable 2-Factor Authentication Now!
				</h3>
				<p className="TwoFA__text">
					Your account does not have TwoFA protection enabled yet. Enable it now
					to prevent unauthorized access and secure your funds.
				</p>
			</div>
			<a className="TwoFA__btn" href="">
				Enable 2FA
			</a>
		</div>
	);
}
