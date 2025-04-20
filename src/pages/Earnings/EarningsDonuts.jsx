import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const donutData = {
	deposit: [
		{ name: "Deposited", value: 8000 },
		{ name: "Remaining", value: 2000 },
	],
	withdraw: [
		{ name: "Withdrawn", value: 4000 },
		{ name: "Remaining", value: 6000 },
	],
};

const COLORS = ["#8a2cff", "#a459ff", "#4c00a8", "#502b7c"];

function renderLabel({ cx, cy, name }) {
	return (
		<text
			x={cx}
			y={cy}
			textAnchor="middle"
			dominantBaseline="middle"
			fill="#fff"
			fontSize={18}
			fontWeight={700}
		>
			{name}
		</text>
	);
}

export default function EarningsDonuts() {
	return (
		<div style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
			{/* Deposit */}
			<div style={{ width: "200px", height: "200px", position: "relative" }}>
				<ResponsiveContainer>
					<PieChart>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(0, 0, 0, 0.8)",
								border: "none",
								borderRadius: "10px",
								color: "#fff",
								fontWeight: 600,
							}}
						/>
						<Pie
							data={donutData.deposit}
							innerRadius={60}
							outerRadius={80}
							dataKey="value"
							startAngle={90}
							endAngle={450}
							labelLine={false}
							label={({ cx, cy }) => renderLabel({ cx, cy, name: "Deposits" })}
						>
							{donutData.deposit.map((_, index) => (
								<Cell key={index} fill={COLORS[index]} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>

			{/* Withdraw */}
			<div style={{ width: "200px", height: "200px", position: "relative" }}>
				<ResponsiveContainer>
					<PieChart>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(0, 0, 0, 0.8)",
								border: "none",
								borderRadius: "10px",
								color: "#fff",
								fontWeight: 600,
							}}
						/>
						<Pie
							data={donutData.withdraw}
							innerRadius={60}
							outerRadius={80}
							dataKey="value"
							startAngle={90}
							endAngle={450}
							labelLine={false}
							label={({ cx, cy }) =>
								renderLabel({ cx, cy, name: "Withdrawals" })
							}
						>
							{donutData.withdraw.map((_, index) => (
								<Cell key={index} fill={COLORS[index]} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
