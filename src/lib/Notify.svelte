<script>
	import notifyStore from './store/notify';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
</script>

<div class="fixed top-10 right-4 flex flex-col-reverse z-50">
	{#each $notifyStore as notify (notify.id)}
		<div
			class="bg-blue-600 px-3 py-1 max-w-[200px] text-sm text-white rounded shadow-md mt-2 {notify.type ===
			'error'
				? '!bg-red-600'
				: ''}"
			in:fly={{ x: 50 }}
			out:fly={{ y: 20, duration: 800 }}
			animate:flip
		>
			{notify.text}
		</div>
	{/each}
</div>
