export const cardReducer = state => state.CardReducer;



export const weatherRequest = state => cardReducer(state).weatherRequest;
export const forecastRequest = state => cardReducer(state).forecastRequest;

export const weatherInfo = state => cardReducer(state).weatherInfo;
export const forecast = state => cardReducer(state).forecast;

export const inputValue = state => cardReducer(state).inputValue;
