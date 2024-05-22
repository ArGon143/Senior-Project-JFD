export const saveState = (state, key) => {
	const stringSate = JSON.stringify(state);
	localStorage.setItem(key, stringSate);
};
export const loadState = (key) => {
	const stringState = localStorage.getItem(key);
	if (!stringState) {
		return undefined;
	}
	return JSON.parse(stringState);
};
