import "./TwoFA.scss";
import { motion } from "framer-motion";

export default function TwoFA() {
	return (
		<motion.div
			className="main__TwoFA TwoFA"
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
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
		</motion.div>
	);
}
