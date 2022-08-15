<script>
	import { query } from '$lib/store/query';

	let visible = false;
</script>

<div class="border py-2 px-4 break-words">
	<div class="font-bold flex justify-between items-center" on:click={() => (visible = !visible)}>
		<span>構築条件</span>
		<img class="inline-block w-8" src="/expand_{visible ? 'less' : 'more'}.svg" alt="" />
	</div>
	{#if visible}
		<div class="text-sm">
			<div><span class="font-bold" /> {JSON.stringify($query)}</div>
		</div>
	{/if}
</div>
