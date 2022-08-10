<script>
	export let post;
</script>

<article class="w-[300px] overflow-clip">
	<a href="/site/details/{post.no}">
		{#if post.image}
			<img class="w-[300px] h-[200px] object-cover" src={post.image} alt="" />
		{/if}
		<div class="font-bold">{post.title}</div>
		<time class="text-sm text-gray-500" datetime={post.timeDatetime}>{post.datetime}</time>
	</a>
</article>
