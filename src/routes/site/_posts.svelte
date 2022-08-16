<script>
	export let controls;
	export let url;

	import moment from 'moment';
	import Post from './_post.svelte';
	import Pagination from './_pagination.svelte';

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

	let start = 0;
	let end = controls.postCount;

	if (controls.countPerPage) {
		start = (controls.page - 1) * controls.countPerPage;
		end = controls.page * controls.countPerPage;
	}

	for (let i = start; i < end; i++) {
		posts.push({
			no: i + 1,
			title: controls.title.replaceAll('{no}', String(i + 1)),
			datetime: editDate(postDate, controls.dateFormat, controls.timeFormat, controls.isAgo),
			timeDatetime: postDate.format(),
			image: controls.isImage ? `/sample/${(i % 20) + 1}.jpg` : null
		});
		postDate.subtract(controls.interval, 'minute');
	}
</script>

<div class="mt-4">
	<div class="text-2xl font-bold">記事一覧</div>
	<hr class="my-2" />
	<div class="flex flex-wrap gap-2">
		{#each posts as post}
			<Post {post} />
		{/each}
	</div>
	{#if controls.countPerPage}
		<Pagination {controls} {url} />
	{/if}
</div>
