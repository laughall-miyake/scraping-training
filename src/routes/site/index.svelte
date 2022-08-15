<script>
	export let ipAddress;
	export let userAgent;
	export let referer;

	import { page } from '$app/stores';

	import Request from './_request.svelte';
	import Posts from './_posts.svelte';
	import Query from './_query.svelte';

	let controls = {
		postCount: 0,
		title: '',
		dateFormat: '',
		timeFormat: '',
		isImage: false,
		interval: 0,
		isAgo: false
	};

	controls.postCount = Number($page.url.searchParams.get('postCount'));
	controls.title = $page.url.searchParams.get('title');
	controls.dateFormat = $page.url.searchParams.get('dateFormat');
	controls.timeFormat = $page.url.searchParams.get('timeFormat');
	controls.isImage = $page.url.searchParams.get('isImage') === 'true';
	controls.isAgo = $page.url.searchParams.get('isAgo') === 'true';
	controls.interval = Number($page.url.searchParams.get('interval'));
</script>

<div>
	<div><Query /></div>
	<div class="mt-2"><Request {ipAddress} {userAgent} {referer} /></div>
	<Posts {controls} />
</div>
