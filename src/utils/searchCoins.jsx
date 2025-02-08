export function searchCoins(value, coins, setCoins) {
	const lowerCaseValue = value.toLowerCase();
	const filteredCoins = coins.filter(
		coin =>
			coin.name.toLowerCase().includes(lowerCaseValue) ||
			coin.symbol.toLowerCase().includes(lowerCaseValue)
	);
	setCoins(filteredCoins);
}
