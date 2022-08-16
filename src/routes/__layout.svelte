<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';

	import Notify from '$lib/Notify.svelte';

	import '../app.css';
</script>

<svelte:head>
	<title>スクレイピング練習場（ベータ）</title>
	<meta
		name="description"
		content="誰でも自由に使えるスクレイピング練習場！条件指定するだけで好きなレイアウトでスクレイピングを試せます。"
	/>
	<meta property="og:url" content="https://scraping-training.vercel.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="スクレイピング練習場（ベータ）" />
	<meta
		property="og:description"
		content="誰でも自由に使えるスクレイピング練習場！条件指定するだけで好きなレイアウトでスクレイピングを試せます。"
	/>
	<meta property="og:site_name" content="スクレイピング練習場" />
	<meta property="og:image" content="https://scraping-training.vercel.app/oogesa_image.jpg" />
</svelte:head>

<Header />
<Notify />

<main class="py-8 px-4 max-w-[1080px] m-auto">
	<slot />
</main>

<Footer />
