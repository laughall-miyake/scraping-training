import { writable } from 'svelte/store';

function createQuery() {
	const { subscribe, set, update } = writable({});

	return {
		subscribe,
		change: (newQuery) =>
			update((n) => {
				console.log(newQuery);
				console.log(n);

				return Object.assign(n, newQuery);
			}),
		reset: () => {
			set({});
		}
	};
}

export const query = createQuery();
