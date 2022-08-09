<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>スクレイピング練習用サイト</title>
	<meta name="description" content="スクレイピング練習用サイト" />
</svelte:head>

<Header />

<main class="p-8 max-w-[1000px] m-auto">
	<slot />
</main>

<footer class="flex items-center justify-center text-xs bg-gray-900 text-white h-[40px]">
	これはSvelteKitによって作成されています。
</footer>
