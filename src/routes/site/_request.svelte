<script>
	export let ipAddress = '';
	export let userAgent = '';
	export let referer = '';

	import { fade } from 'svelte/transition';

	let visible = false;
</script>

<div class="border py-2 px-4 break-words">
	<div class="font-bold flex justify-between items-center" on:click={() => (visible = !visible)}>
		<span>リクエスト情報</span>
		<img class="inline-block w-8" src="/expand_{visible ? 'less' : 'more'}.svg" alt="" />
	</div>
	{#if visible}
		<div class="text-sm" transition:fade>
			<div><span class="font-bold">ipAddress:</span> {ipAddress}</div>
			<div><span class="font-bold">userAgent:</span> {userAgent}</div>
			<div><span class="font-bold">referer:</span> {referer}</div>
		</div>
	{/if}
</div>
