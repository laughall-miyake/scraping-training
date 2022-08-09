<script>
	export let host;
	export let userAgent;

	import { page } from '$app/stores';
	import moment from 'moment';

	let controls = { postCount: 0, title: '', dateFormat: '', isImage: false, interval: 0 };

	controls.postCount = Number($page.url.searchParams.get('postCount'));
	controls.title = $page.url.searchParams.get('title');
	controls.dateFormat = $page.url.searchParams.get('dateFormat');
	controls.isImage = $page.url.searchParams.get('isImage') === 'true';
	controls.interval = Number($page.url.searchParams.get('interval'));

	let now = moment();

	let posts = [];

	for (let i = 1; i <= controls.postCount; i++) {
		posts.push({
			no: i,
			title: controls.title.replaceAll('{no}', String(i)),
			date: now.format(controls.dateFormat),
			image: `/sample/${i}.jpg`
		});
		now.add(controls.interval, 'minute');
	}
</script>

<div>
	<div class="border p-4">
		<div class="font-bold">リクエスト情報</div>
		<div class="text-sm">
			<div>host: {host}</div>
			<div>userAgent: {userAgent}</div>
		</div>
	</div>
	<div class="mt-10">
		<div class="text-2xl font-bold">記事一覧</div>
		<hr class="my-2" />
		<div class="flex flex-wrap">
			{#each posts as post}
				<a href="/site/details/{post.no}" class="w-[300px] p-2">
					{#if controls.isImage}
						<img src={post.image} alt="" />
					{/if}
					<div>{post.title}</div>
					<div>{post.date}</div>
				</a>
			{/each}
		</div>
	</div>
</div>
