/* eslint-disable no-console */
import { addMinutesToDate } from '../../../public/assets/utils/date';
import {
	getItemFromLocalStorage,
	removeItemFromLocalStorage,
	saveItemLocalStorage,
} from '../../../public/assets/utils/localStorage';
import { jsonify } from './firebase.firestore';

// const saveDocOnLocalStorage = (docId, content) =>
//   localStorage.setItem(`logtrade:::doc:::${docId}`, JSON.stringify(content));

// const getDocFromLocalStorage = (docId) => {
//   const userContentStringified = localStorage
//     .getItem(`logtrade:::doc:::${docId}`);
//   if (userContentStringified === null) return null;
//   return JSON.parse(userContentStringified);
// }

// const removeDocFromLocalStorage = (docId) =>
//   localStorage.removeItem(`logtrade:::doc:::${docId}`);

export const getDocFromCache = (docId) => {
	const doc = getItemFromLocalStorage(`logtrade:::doc:::${docId}`);
	const docExpiration = getItemFromLocalStorage(
		`logtrade:::doc:::${docId}:::expiration`
	);
	console.log({ doc, docExpiration });
	if (!doc || doc === null) {
		return {
			exists: false,
			data: null,
			expiration: null,
		};
	}
	return {
		exists: true,
		data: jsonify(doc),
		expiration: parseInt(docExpiration, 10),
	};
};
export const saveDocInCache = (docId, data, cacheDurationInMinutes) => {
	const expiration = addMinutesToDate(new Date(), cacheDurationInMinutes);
	// eslint-disable-next-line no-console
	console.log({ expiration });
	saveItemLocalStorage(`logtrade:::doc:::${docId}`, `${data}`);
	saveItemLocalStorage(
		`logtrade:::doc:::${docId}:::expiration`,
		`${expiration}`
	);
};
export const removeDocFromCache = (docId) => {
	removeItemFromLocalStorage(`logtrade:::doc:::${docId}`);
	removeItemFromLocalStorage(`logtrade:::doc:::${docId}:::expiration`);
};
