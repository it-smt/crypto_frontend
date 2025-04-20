import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "../../components/Header/Header";
import "./Earnings.scss";
import EarningsChart from "./EarningsChart";
import EarningsDonuts from "./EarningsDonuts";

export default function Earnings() {
	// Состояние для анимации суммы
	const [balance, setBalance] = useState(0);
	const targetBalance = 9000;

	useEffect(() => {
		// Функция увеличения баланса с задержкой
		const duration = 2; // продолжительность анимации в секундах
		const steps = 100; // количество шагов
		const stepDuration = duration / steps;
		let currentStep = 0;

		const interval = setInterval(() => {
			currentStep += 1;
			const progress = currentStep / steps;
			const easedProgress =
				progress < 0.9 ? progress : 1 - Math.pow(1 - progress, 3); // Замедление в конце
			setBalance(Math.round(targetBalance * easedProgress));

			if (currentStep >= steps) {
				clearInterval(interval);
			}
		}, stepDuration * 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="earnings">
				<div className="container">
					<div className="earnings__info">
						<motion.div
							className="earnings__diagram"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							viewport={{ once: true }}
						>
							<EarningsChart />
						</motion.div>

						{/* Анимация для блока с балансом */}
						<motion.div
							className="earnings__balance-account"
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
							viewport={{ once: true }}
						>
							<div className="earnings__balance">
								{/* Текст "Your balance" с белым цветом и эффектом свечения */}
								<motion.div
									className="earnings__balance-title"
									initial={{ opacity: 0, x: -50 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
									viewport={{ once: true }}
									style={{
										color: "#fff",
										textShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
									}}
								>
									<img src="/account_balance.svg" alt="" />
									<span>Your balance</span>
								</motion.div>

								{/* Анимация баланса */}
								<motion.div
									className="earnings__balance-amount"
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
									viewport={{ once: true }}
								>
									<span>$</span>
									{/* Число анимируется от 0 до 9000 */}
									<motion.span
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{
											duration: 1.5,
											ease: "easeOut",
											delay: 0.6,
											type: "spring",
											stiffness: 200,
										}}
									>
										{balance}
									</motion.span>
								</motion.div>
							</div>

							{/* Анимация блока с аккаунтом (email, номер, ссылка) */}
							<motion.div
								className="earnings__account"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
								viewport={{ once: true }}
							>
								{/* Анимация для email */}
								<motion.div
									className="earnings__account-first"
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
									viewport={{ once: true }}
								>
									<div className="earnings__account-avatar">P</div>
									<div className="earnings__account-email">email@gmail.com</div>
								</motion.div>

								{/* Анимация для номера и ссылки */}
								<motion.div
									className="earnings__account-second"
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
									viewport={{ once: true }}
								>
									<div className="earnings__account-number">+7******5027</div>
									<Link to={"/"} className="earnings__account-link">
										Show account
									</Link>
								</motion.div>
							</motion.div>
						</motion.div>
					</div>

					{/* Анимация для пончиковых диаграмм */}
					<motion.div
						className="earnings__pies"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
						viewport={{ once: true }}
					>
						<EarningsDonuts key={balance > 0 ? "donuts" : "donuts-initial"} />
					</motion.div>
				</div>
			</div>
		</div>
	);
}
