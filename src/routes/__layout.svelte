<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>スクレイピング練習用サイト（作成中）</title>
	<meta
		name="description"
		content="誰でも自由に使えるスクレイピング練習用サイト！条件指定するだけで好きなレイアウトでスクレイピングを試せます。"
	/>
</svelte:head>

<Header />

<main class="py-8 px-4 max-w-[1080px] m-auto">
	<slot />
</main>

<footer class="flex items-center justify-center text-xs bg-gray-900 text-white h-[40px]">
	これはSvelteKitによって作成されています。
</footer>
