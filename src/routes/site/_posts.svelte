<script>
	export let controls;

	import moment from 'moment';
	import Post from './_post.svelte';

	let postDate = moment();

	let posts = [];

	const editDate = (postDate, dateFormat, timeFormat, isAgo) => {
		if (!dateFormat && !timeFormat) {
			return '';
		}

		if (isAgo) {
			const now = moment();
			const diff = now.diff(postDate, 'hour');
			if (1 <= diff && diff < 24) {
				return `${diff}時間前`;
			} else if (diff < 1) {
				const diffMinute = now.diff(postDate, 'minute');
				return `${diffMinute}分前`;
			}
		}

		if (dateFormat && !timeFormat) {
			return postDate.format(dateFormat);
		}

		if (!dateFormat && timeFormat) {
			return postDate.format(timeFormat);
		}

		return postDate.format(dateFormat) + ' ' + postDate.format(timeFormat);
	};

	for (let i = 1; i <= controls.postCount; i++) {
		posts.push({
			no: i,
			title: controls.title.replaceAll('{no}', String(i)),
			datetime: editDate(postDate, controls.dateFormat, controls.timeFormat, controls.isAgo),
			timeDatetime: postDate.format(),
			image: controls.isImage ? `/sample/${i}.jpg` : null
		});
		postDate.subtract(controls.interval, 'minute');
	}
</script>

<div class="mt-10">
	<div class="text-2xl font-bold">記事一覧</div>
	<hr class="my-2" />
	<div class="flex flex-wrap gap-2">
		{#each posts as post}
			<Post {post} />
		{/each}
	</div>
</div>
