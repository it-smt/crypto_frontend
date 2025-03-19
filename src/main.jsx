import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./base.css";
import "./index.css";
import "./null.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Earnings from "./pages/Earnings/Earnings";
import Home from "./pages/Home/Home";
import Transactions from "./pages/Transactions/Transactions";
import Wallets from "./pages/Wallets/Wallets";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/wallets" element={<Wallets />} />
				<Route path="/transactions" element={<Transactions />} />
				<Route path="/earnings" element={<Earnings />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
