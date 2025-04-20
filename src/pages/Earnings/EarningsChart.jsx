import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ month: "Jan", deposit: 500, withdraw: 200 },
	{ month: "Feb", deposit: 800, withdraw: 400 },
	{ month: "Mar", deposit: 600, withdraw: 300 },
	{ month: "Apr", deposit: 750, withdraw: 200 },
	{ month: "May", deposit: 900, withdraw: 500 },
	{ month: "Jun", deposit: 650, withdraw: 250 },
	{ month: "Jul", deposit: 1000, withdraw: 600 },
	{ month: "Aug", deposit: 700, withdraw: 350 },
	{ month: "Sep", deposit: 850, withdraw: 300 },
	{ month: "Oct", deposit: 950, withdraw: 400 },
	{ month: "Nov", deposit: 1100, withdraw: 450 },
	{ month: "Dec", deposit: 1200, withdraw: 500 },
];

export default function EarningsChart() {
	return (
		<div style={{ width: "100%", height: 300 }}>
			<ResponsiveContainer>
				<BarChart
					data={data}
					margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
				>
					<CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
					<XAxis dataKey="month" stroke="#fff" />
					<YAxis stroke="#fff" />
					<Tooltip
						contentStyle={{ background: "#1e1e1e", border: "none" }}
						labelStyle={{ color: "#fff" }}
						itemStyle={{ color: "#2ebd85" }}
					/>
					<Legend
						verticalAlign="top"
						height={36}
						wrapperStyle={{ color: "#fff" }}
					/>
					<Bar dataKey="deposit" fill="#2ebd85" radius={[5, 5, 0, 0]} />
					<Bar dataKey="withdraw" fill="#8a2cff" radius={[5, 5, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
