const initialLookState = {
	historialAscendingOrder: true
}

export const lookReducer = (state=initialLookState, action) => {
	if (action.type === "ORDER_CHANGED"){
		return {historialAscendingOrder: !state.historialAscendingOrder};
	}
	return state;
}