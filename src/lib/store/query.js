import { writable } from 'svelte/store';
import { browser } from '$app/env';
const KEY = 'QUERY';

const { subscribe, set, update } = writable({});

export const query = {
	subscribe,
	change: (newQuery) =>
		update((n) => {
			Object.assign(n, newQuery);
			localStorage.setItem(KEY, JSON.stringify(n));
			return n;
		}),
	init: () => set(JSON.parse(localStorage.getItem(KEY)) || {}),
	reset: () => {
		set({});
		localStorage.removeItem(KEY);
	}
};

if (browser) {
	query.init();
}

export default {
	query
};
