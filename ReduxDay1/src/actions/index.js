export const DATA_AVAILABLE = 'DATA_AVAILABLE';

export const QUOTES_NOT_AVAILABLE = 'QUOTES_NOT_AVAILABLE';
export const QUOTES_AVAILABLE = 'QUOTES_AVAILABLE';
export const ADD_QUOTE = 'ADD_QUOTE';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const DELETE_QUOTE = 'DELETE_QUOTE';

import Data from '../instructions.json';
import {AsyncStorage} from "react-native";

export function getData() {
    return (dispatch) => {
        setTimeout (() => {
            const data = Data.instructions;
            dispatch ({ type: DATA_AVAILABLE, data: data });
        }, 2000);
    };
}

export function getQuotes() {
    return (dispatch) => {
        // Fake loading.
        dispatch ({ type: QUOTES_NOT_AVAILABLE });
        // Load data.
        setTimeout (() => {
            AsyncStorage.getItem('data', (err, quotes) => {
                if (quotes !== null) {
                    dispatch ({ type: QUOTES_AVAILABLE, quotes: JSON.parse(quotes) });
                }
            });
        }, 2000);
    }
}

export function addQuote(quote) {
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, quotes) => {
            if (quotes !== null) {
                quotes = JSON.parse(quotes);
                quotes.unshift(quote);
                AsyncStorage.setItem ('data', JSON.stringify(quotes), () => {
                    dispatch ({ type: ADD_QUOTE, quote: quote });
                });
            }
        });
    };
}

export function updateQuote(quote) {
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, quotes) => {
            if (quotes !== null) {
                quotes = JSON.parse (quotes);
                var index = getIndex (quotes, quote.id);
                if (index !== -1) {
                    quotes[index]['author'] = quote.author;
                    quotes[index]['quote'] = quote.quote;
                } 
                AsyncStorage.setItem('data', JSON.stringify(quotes), () => {
                    dispatch({ type: UPDATE_QUOTE, quote: quote });
                });
            }
        });
    }
}

export function deleteQuote(id) {
    return (dispatch) => {
        AsyncStorage.getItem ('data', (err, quotes) => {
            if (quotes !== null) {
                quotes = JSON.parse(quotes);
                var index = getIndex(quotes, id);
                if (index !== -1) {
                    AsyncStorage.setItem('data', JSON.stringify(quotes), () => {
                        dispatch ({ type: DELETE_QUOTE, id: id });
                    });
                }
            }
        });
    }
}

function getIndex(data, id){
    let clone = JSON.parse(JSON.stringify(data));
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}