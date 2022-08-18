<script>
	export let post;
</script>

<article class="post w-[200px] overflow-clip leading-4">
	<a href="/site/details/{post.no}" class="post-link">
		{#if post.image}
			<img class="post-image w-[200px] h-[100px] object-cover mb-1" src={post.image} alt="" />
		{/if}
		<div>
			<div class="post-title font-bold">{post.title}</div>
			<div class="text-right">
				<time class="post-date text-sm text-gray-500 " datetime={post.timeDatetime}>
					{post.datetime}
				</time>
			</div>
		</div>
	</a>
</article>
