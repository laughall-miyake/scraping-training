import { writable } from 'svelte/store';

const { subscribe, update } = writable([]);

const defaults = { id: 0, type: 'info', text: '' };

let idCounter = 0;
const notifyStore = {
	subscribe,
	error: (item) => {
		update((store) => {
			if (typeof item === 'string') {
				item = { ...defaults, id: ++idCounter, type: 'error', text: item };
			} else {
				item = { ...defaults, id: ++idCounter, ...item };
			}

			countdown(idCounter);

			return [...store, item];
		});
	},
	info: (item) => {
		update((store) => {
			if (typeof item === 'string') {
				item = { ...defaults, id: ++idCounter, text: item };
			} else {
				item = { ...defaults, id: ++idCounter, ...item };
			}

			countdown(idCounter);

			return [...store, item];
		});
	}
};

const countdown = (id) => {
	setTimeout(() => {
		update((store) => store.filter((s) => s.id !== id));
	}, 3000);
};

export default notifyStore;
