<script>
	export let post;
</script>

<article class="w-[200px] overflow-clip leading-4">
	<a href="/site/details/{post.no}">
		{#if post.image}
			<img class="w-[200px] h-[100px] object-cover mb-1" src={post.image} alt="" />
		{/if}
		<div class="">
			<div class="font-bold">{post.title}</div>
			<div class="text-right">
				<time class="text-sm text-gray-500 " datetime={post.timeDatetime}>{post.datetime}</time>
			</div>
		</div>
	</a>
</article>
