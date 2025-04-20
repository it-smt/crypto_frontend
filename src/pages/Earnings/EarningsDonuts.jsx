import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

// Данные для диаграммы
const depositData = [
	{ name: "Deposit", value: 9000 },
	{ name: "Available", value: 18000 },
];

const withdrawData = [
	{ name: "Withdrawn", value: 5000 },
	{ name: "Available", value: 22000 },
];

// Цвета для сегментов диаграммы
const COLORS = ["#8a2cff", "#502b7c"];

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		const { name, value } = payload[0].payload;
		return (
			<div
				style={{
					borderRadius: "20px",
					backgroundColor: "rgba(255, 255, 255, 0.1)",
					padding: "15px",
					position: "absolute", // Изменяем позиционирование
					top: "50%", // Располагаем тултип сверху
					left: "110%", // Размещаем тултип справа от диаграммы
					transform: "translate(10%, -50%)", // Центрируем относительно точки
					zIndex: 10, // Устанавливаем слой поверх диаграммы
				}}
			>
				<p
					style={{
						margin: 0,
						color: "rgba(255, 255, 255, 0.5)",
						fontSize: "24px",
						fontWeight: "800",
						lineHeight: "29px",
						marginBottom: "2px",
					}}
				>
					{name}
				</p>
				<p
					style={{
						margin: 0,
						color: "rgb(46, 189, 133)",
						fontSize: "20px",
						fontWeight: "800",
					}}
				>
					$ {value}
				</p>
			</div>
		);
	}
	return null;
};

export default function EarningsDonuts() {
	const [showTooltip, setShowTooltip] = useState(false);

	// Включаем тултип с задержкой после окончания анимации
	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowTooltip(true);
		}, 2000); // Задержка в 2 секунды (можно настроить)

		return () => clearTimeout(timeout); // Очистка таймера при размонтировании компонента
	}, []);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				gap: "40px",
				width: "100%",
			}}
		>
			{/* Первая диаграмма - Deposit */}
			<div style={{ width: "260px", height: "260px" }}>
				<ResponsiveContainer>
					<PieChart>
						{/* Если нужно, добавьте кастомный тултип */}
						{showTooltip && <Tooltip content={<CustomTooltip />} />}
						<Pie
							data={depositData}
							cx="50%"
							cy="50%"
							innerRadius={80}
							outerRadius={120}
							startAngle={90}
							endAngle={450}
							fill="#8884d8"
							dataKey="value"
							stroke="none"
						>
							{depositData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>

						{/* Добавление текста по центру диаграммы */}
						<text
							x="50%"
							y="50%"
							textAnchor="middle"
							dominantBaseline="middle"
							fill="rgba(255, 255, 255, 0.5)"
							fontSize={30}
							fontWeight="800"
						>
							Deposit
						</text>
					</PieChart>
				</ResponsiveContainer>
			</div>

			{/* Вторая диаграмма - Withdraw */}
			<div style={{ width: "260px", height: "260px" }}>
				<ResponsiveContainer>
					<PieChart>
						{/* Если нужно, добавьте кастомный тултип */}
						{showTooltip && <Tooltip content={<CustomTooltip />} />}
						<Pie
							data={withdrawData}
							cx="50%"
							cy="50%"
							innerRadius={80}
							outerRadius={120}
							startAngle={90}
							endAngle={450}
							fill="#8884d8"
							dataKey="value"
							stroke="none"
						>
							{withdrawData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>

						{/* Добавление текста по центру диаграммы */}
						<text
							x="50%"
							y="50%"
							textAnchor="middle"
							dominantBaseline="middle"
							fill="rgba(255, 255, 255, 0.5)"
							fontSize={30}
							fontWeight="800"
						>
							Withdraw
						</text>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
