import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./base.css";
import BuySellCrypto from "./components/BuySellCrypto/BuySellCrypto";
import Dashboard from "./components/Dashboard/Dashboard";
import Earnings from "./components/Earnings/Earnings";
import Transactions from "./components/Transactions/Transactions";
import Wallets from "./components/Wallets/Wallets";
import "./index.css";
import "./null.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/wallets" element={<Wallets />} />
				<Route path="/transactions" element={<Transactions />} />
				<Route path="/buy-sell" element={<BuySellCrypto />} />
				<Route path="/earnings" element={<Earnings />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
