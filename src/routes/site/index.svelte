<script>
	export let ipAddress;
	export let userAgent;
	export let referer;

	import { page } from '$app/stores';

	import Request from './_request.svelte';
	import Posts from './_posts.svelte';

	let controls = { postCount: 0, title: '', dateFormat: '', isImage: false, interval: 0 };

	controls.postCount = Number($page.url.searchParams.get('postCount'));
	controls.title = $page.url.searchParams.get('title');
	controls.dateFormat = $page.url.searchParams.get('dateFormat');
	controls.isImage = $page.url.searchParams.get('isImage') === 'true';
	controls.interval = Number($page.url.searchParams.get('interval'));
</script>

<div>
	<Request {ipAddress} {userAgent} {referer} />
	<Posts {controls} />
</div>
