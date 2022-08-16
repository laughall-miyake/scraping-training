<script>
	export let controls;
	export let url;

	let pagination = {
		prev: false,
		next: false,
		current: 0,
		pageCount: 0
	};

	pagination.pageCount = Math.ceil(controls.postCount / controls.countPerPage);
	pagination.current = controls.page;
	pagination.prev = pagination.current !== 1;
	pagination.next = pagination.current !== pagination.pageCount;

	const createUrl = (pageNo) => {
		return url.replaceAll(/page=\d+/g, `page=${pageNo}`);
	};
</script>

<div class="pagination flex items-center justify-center mt-8 ">
	{#if pagination.prev}
		<a href={createUrl(controls.page - 1)} sveltekit:reload>
			<svg class="fill-blue-600" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
				<path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
			</svg>
		</a>
	{:else}
		<div class="w-[48px] h-[48px]" />
	{/if}

	{#each Array(pagination.pageCount) as _, i}
		<a
			href={createUrl(i + 1)}
			sveltekit:reload
			class={pagination.current === i + 1 ? '' : 'text-blue-600 underline'}
		>
			<span>{i + 1}</span></a
		>
	{/each}

	{#if pagination.next}
		<a href={createUrl(controls.page + 1)} sveltekit:reload>
			<svg class="fill-blue-600" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
				<path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
			</svg>
		</a>
	{:else}
		<div class="w-[48px] h-[48px]" />
	{/if}
</div>

<style>
	.pagination a span {
		@apply text-2xl font-bold py-1 px-2;
	}
</style>
