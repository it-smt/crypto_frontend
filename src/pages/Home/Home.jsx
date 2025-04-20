import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import Header from "../../components/Header/Header";
import "./Home.scss";

export default function Home() {
	const minestacksRef = useRef(null);
	const walletsRef = useRef(null);
	const earningsRef = useRef(null);

	const minestacksInView = useInView(minestacksRef, { amount: 0.3 });
	const walletsInView = useInView(walletsRef, { amount: 0.3 });
	const earningsInView = useInView(earningsRef, { amount: 0.3 });

	return (
		<div className="wrapper">
			<Header />

			<section className="minestacks" ref={minestacksRef}>
				<div className="container">
					<motion.h1
						className="minestacks__title glow"
						initial={{ opacity: 0, y: 40 }}
						animate={
							minestacksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
						}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						Minestacks
					</motion.h1>
					<motion.hr
						initial={{ scaleX: 0 }}
						animate={minestacksInView ? { scaleX: 1 } : { scaleX: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
					/>
					<motion.p
						className="minestacks__subtitle"
						initial={{ opacity: 0, y: 20 }}
						animate={
							minestacksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
					>
						Cryptowallet. Earnings. Withdraw. Deposit. Convert
					</motion.p>
				</div>
			</section>

			<section className="wallets-hm" ref={walletsRef}>
				<div className="container">
					<motion.div
						className="wallets-hm__img parallax"
						initial={{ opacity: 0, x: -100 }}
						animate={
							walletsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
						}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<img src="/wallets_block.png" alt="" />
					</motion.div>
					<motion.h1
						className="wallets-hm__title glow"
						initial={{ opacity: 0, y: 30 }}
						animate={
							walletsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
					>
						Keep your coins in secure wallets
					</motion.h1>
					<motion.hr
						initial={{ scaleX: 0 }}
						animate={walletsInView ? { scaleX: 1 } : { scaleX: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
					/>
					<motion.div
						initial={{ opacity: 0 }}
						animate={walletsInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
					>
						<Link to={"/wallets"} className="wallets-hm__link">
							To wallets
						</Link>
					</motion.div>
				</div>
			</section>

			<section className="earnings-hm" ref={earningsRef}>
				<div className="container">
					<motion.div
						className="earnings-hm__body"
						initial={{ opacity: 0, x: 100 }}
						animate={
							earningsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
						}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<h1 className="earnings-hm__title glow">Track your earnings</h1>
						<hr />
						<p className="earnings-hm__subtitle">
							You can track how many coins you have withdrawn and how many you
							have replenished, all in one service.
						</p>
						<Link to={"/earnings"} className="earnings-hm__link">
							In earnings
						</Link>
					</motion.div>
					<motion.div
						className="earnings-hm__img parallax"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={
							earningsInView
								? { opacity: 1, scale: 1 }
								: { opacity: 0, scale: 0.9 }
						}
						transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
					>
						<img src="/earnings_block.png" alt="" />
					</motion.div>
				</div>
			</section>
		</div>
	);
}
