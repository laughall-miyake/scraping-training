<script>
	export let ipAddress;
	export let userAgent;
	export let referer;

	import { page } from '$app/stores';

	import Request from './_request.svelte';
	import Posts from './_posts.svelte';
	import Query from './_query.svelte';
	import notifyStore from '$lib/store/notify';

	let controls = {
		postCount: 0,
		title: '',
		dateFormat: '',
		timeFormat: '',
		isImage: false,
		interval: 0,
		isAgo: false,
		countPerPage: 0,
		page: 0
	};

	controls.postCount = Number($page.url.searchParams.get('postCount'));
	controls.title = $page.url.searchParams.get('title');
	controls.dateFormat = $page.url.searchParams.get('dateFormat');
	controls.timeFormat = $page.url.searchParams.get('timeFormat');
	controls.isImage = $page.url.searchParams.get('isImage') === 'true';
	controls.isAgo = $page.url.searchParams.get('isAgo') === 'true';
	controls.interval = Number($page.url.searchParams.get('interval'));
	controls.countPerPage = Number($page.url.searchParams.get('countPerPage'));
	controls.page = Number($page.url.searchParams.get('page'));
	controls.robots = $page.url.searchParams.get('robots') === 'true';

	const copy = () => {
		navigator.clipboard.writeText($page.url.toString());
		notifyStore.info('クリップボードにコピーしました');
	};
</script>

<svelte:head>
	{#if controls.robots}
		<meta name="robots" content="max-image-preview:large" />
	{:else}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<div class="flex flex-col gap-2">
	<div class="text-right">
		<button
			class="inline-flex bg-white py-2 px-4 border shadow rounded text-sm gap-1"
			on:click={copy}
		>
			<img src="/copy.svg" class="w-5" alt="" />
			<span>このページのURLをコピーする</span>
		</button>
	</div>
	<Query />
	<Request {ipAddress} {userAgent} {referer} />
	<Posts {controls} url={$page.url.toString()} />
</div>
