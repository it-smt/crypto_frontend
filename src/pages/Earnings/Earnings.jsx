import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
	Bar,
	BarChart,
	Cell,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import Header from "../../components/Header/Header";
import "./Earnings.scss";

// Данные для столбчатой диаграммы
const barData = [
	{ name: "Jan", deposit: 400, withdraw: 240 },
	{ name: "Feb", deposit: 300, withdraw: 139 },
	{ name: "Mar", deposit: 200, withdraw: 980 },
	{ name: "Apr", deposit: 278, withdraw: 390 },
	{ name: "May", deposit: 189, withdraw: 480 },
];

// Данные для депозитов
const depositData = [
	{ name: "BTC", value: 400 },
	{ name: "ETH", value: 300 },
	{ name: "USDT", value: 300 },
];

// Данные для выводов
const withdrawData = [
	{ name: "BTC", value: 500 },
	{ name: "ETH", value: 200 },
	{ name: "USDT", value: 300 },
];

// Цвета для секторов
const COLORS = ["#00c3ff", "#845ec2", "#ffc75f"];

export default function Earnings() {
	const [activeIndex, setActiveIndex] = useState(null);

	useEffect(() => {
		// Обновляем активный индекс для анимации
		const interval = setInterval(() => {
			setActiveIndex(prev =>
				prev === null || prev >= depositData.length - 1 ? 0 : prev + 1
			);
		}, 1200);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="container">
				<div className="content">
					{/* Столбчатая диаграмма */}
					<motion.div
						className="chart chart--bar"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.2 }}
						variants={{
							hidden: { opacity: 0, y: 40 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.6, ease: "easeOut" },
							},
						}}
					>
						<ResponsiveContainer width="100%" height={300}>
							<BarChart data={barData} barSize={40}>
								<XAxis dataKey="name" stroke="#ccc" />
								<YAxis stroke="#ccc" />
								<Tooltip
									content={({ active, payload }) => {
										if (active && payload && payload.length) {
											return (
												<div className="custom-tooltip">
													<p>{payload[0].payload.name}</p>
													<p>Deposit: {payload[0].payload.deposit}</p>
													<p>Withdraw: {payload[0].payload.withdraw}</p>
												</div>
											);
										}
										return null;
									}}
								/>
								<Bar
									dataKey="deposit"
									fill="url(#gradDeposit)"
									radius={[10, 10, 0, 0]}
									animationDuration={800}
								/>
								<Bar
									dataKey="withdraw"
									fill="url(#gradWithdraw)"
									radius={[10, 10, 0, 0]}
									animationDuration={1000}
								/>
								<defs>
									<linearGradient id="gradDeposit" x1="0" y1="0" x2="0" y2="1">
										<stop offset="0%" stopColor="#845ec2" stopOpacity={1} />
										<stop offset="100%" stopColor="#d0bdf4" stopOpacity={1} />
									</linearGradient>
									<linearGradient id="gradWithdraw" x1="0" y1="0" x2="0" y2="1">
										<stop offset="0%" stopColor="#00c3ff" stopOpacity={1} />
										<stop offset="100%" stopColor="#a2f0ff" stopOpacity={1} />
									</linearGradient>
								</defs>
							</BarChart>
						</ResponsiveContainer>
					</motion.div>

					{/* Пончик для депозитов */}
					<motion.div
						className="chart chart--pie"
						initial={{ opacity: 0, rotate: 180, scale: 0 }}
						animate={{ opacity: 1, rotate: 0, scale: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
					>
						<ResponsiveContainer width="100%" height={250}>
							<PieChart>
								<Pie
									data={depositData}
									dataKey="value"
									nameKey="name"
									cx="50%"
									cy="50%"
									innerRadius={60}
									outerRadius={90}
									fill="#8884d8"
									paddingAngle={4}
									activeIndex={activeIndex ?? 0}
									activeShape={props => (
										<g>
											<text
												x={props.cx}
												y={props.cy}
												dy={8}
												textAnchor="middle"
												fill="#fff"
												fontSize={18}
											>
												{props.payload.name}
											</text>
											<text
												x={props.cx}
												y={props.cy}
												dy={28}
												textAnchor="middle"
												fill="#aaa"
												fontSize={14}
											>
												{props.payload.value}
											</text>
										</g>
									)}
								>
									{depositData.map((entry, idx) => (
										<Cell
											key={`cell-${idx}`}
											fill={COLORS[idx % COLORS.length]}
										/>
									))}
								</Pie>
								<Tooltip
									content={({ active, payload }) => {
										if (active && payload && payload.length) {
											return (
												<div className="custom-tooltip">
													<p>{payload[0].payload.name}</p>
													<p>{payload[0].payload.value}</p>
												</div>
											);
										}
										return null;
									}}
								/>
							</PieChart>
						</ResponsiveContainer>
					</motion.div>

					{/* Пончик для выводов */}
					<motion.div
						className="chart chart--pie"
						initial={{ opacity: 0, rotate: 180, scale: 0 }}
						animate={{ opacity: 1, rotate: 0, scale: 1 }}
						transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
					>
						<ResponsiveContainer width="100%" height={250}>
							<PieChart>
								<Pie
									data={withdrawData}
									dataKey="value"
									nameKey="name"
									cx="50%"
									cy="50%"
									innerRadius={60}
									outerRadius={90}
									fill="#8884d8"
									paddingAngle={4}
									activeIndex={activeIndex ?? 0}
									activeShape={props => (
										<g>
											<text
												x={props.cx}
												y={props.cy}
												dy={8}
												textAnchor="middle"
												fill="#fff"
												fontSize={18}
											>
												{props.payload.name}
											</text>
											<text
												x={props.cx}
												y={props.cy}
												dy={28}
												textAnchor="middle"
												fill="#aaa"
												fontSize={14}
											>
												{props.payload.value}
											</text>
										</g>
									)}
								>
									{withdrawData.map((entry, idx) => (
										<Cell
											key={`cell-${idx}`}
											fill={COLORS[idx % COLORS.length]}
										/>
									))}
								</Pie>
								<Tooltip
									content={({ active, payload }) => {
										if (active && payload && payload.length) {
											return (
												<div className="custom-tooltip">
													<p>{payload[0].payload.name}</p>
													<p>{payload[0].payload.value}</p>
												</div>
											);
										}
										return null;
									}}
								/>
							</PieChart>
						</ResponsiveContainer>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
