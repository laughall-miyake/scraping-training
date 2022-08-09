<script>
	export let controls;

	import moment from 'moment';

	let now = moment();

	let posts = [];

	for (let i = 1; i <= controls.postCount; i++) {
		posts.push({
			no: i,
			title: controls.title.replaceAll('{no}', String(i)),
			datetime:
				now.format(controls.dateFormat) +
				(controls.isTime ? ' ' + now.format(controls.timeFormat) : ''),
			timeDatetime: now.format(),
			image: `/sample/${i}.jpg`
		});
		now.add(controls.interval, 'minute');
	}
</script>

<div class="mt-10">
	<div class="text-2xl font-bold">記事一覧</div>
	<hr class="my-2" />
	<div class="flex flex-wrap gap-2">
		{#each posts as post}
			<a href="/site/details/{post.no}" class="w-[300px]">
				{#if controls.isImage}
					<img class="w-[300px] h-[200px] object-cover" src={post.image} alt="" />
				{/if}
				<div class="font-bold">{post.title}</div>
				<time class="text-sm text-gray-500" datetime={post.timeDatetime}>{post.datetime}</time>
			</a>
		{/each}
	</div>
</div>
