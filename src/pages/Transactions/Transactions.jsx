import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Transaction from "../../components/Transaction/Transaction";
import "./Transactions.scss";

const pageVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, scale: 0.95, y: 20 },
	visible: i => ({
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.4,
			delay: i * 0.1, // 👈 работает с custom
			ease: [0.25, 0.1, 0.25, 1],
		},
	}),
};

export default function Transactions() {
	const transactionList = [
		{
			title: "Deposit",
			amount: "500 USDT",
			address: "0x89d3...c29f",
			txid: "0xabcd...e99c",
			statusText: "Complete",
		},
		{
			title: "Withdraw",
			amount: "500 USDT",
			address: "0x89d3...c29f",
			txid: "0xabcd...e99c",
			statusText: "Rejected",
		},
		{
			title: "Convert",
			amount: "500 USDT",
			address: "0x89d3...c29f",
			txid: "0xabcd...e99c",
			statusText: "In progress",
		},
		{
			title: "Deposit",
			amount: "500 USDT",
			address: "0x89d3...c29f",
			txid: "0xabcd...e99c",
			statusText: "Complete",
		},
		{
			title: "Withdraw",
			amount: "500 USDT",
			address: "0x89d3...c29f",
			txid: "0xabcd...e99c",
			statusText: "Rejected",
		},
		{
			title: "Convert",
			amount: "500 USDT",
			address: "0x89d3...c29f",
			txid: "0xabcd...e99c",
			statusText: "In progress",
		},
		{
			title: "Deposit",
			amount: "500 USDT",
			address: "0x89d3...c29f",
			txid: "0xabcd...e99c",
			statusText: "Complete",
		},
		{
			title: "Withdraw",
			amount: "500 USDT",
			address: "0x89d3...c29f",
			txid: "0xabcd...e99c",
			statusText: "Rejected",
		},
	];

	return (
		<motion.div
			className="wrapper"
			initial="hidden"
			animate="visible"
			variants={pageVariants}
		>
			<Header />
			<div className="container">
				<div className="transactions">
					{transactionList.map((tx, index) => (
						<motion.div
							key={tx.txid + index}
							variants={cardVariants}
							initial="hidden"
							animate="visible"
							custom={index} // 👈 это обязательно для delay
						>
							<Transaction {...tx} />
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
}
