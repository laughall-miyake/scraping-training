<!-- <script context="module">
	export async function load(a) {
		console.log(a);
	}
</script> -->
<script>
	import Header from '$lib/header/Header.svelte';
	import Index from './site1/index.svelte';
	import Control from './_control.svelte';

	let controls = {
		postCount: 20,
		title: 'これは{no}の記事です',
		dateFormat: 'YYYY-MM-DD',
		isTime: true,
		timeFormat: 'HH:mm',
		isImage: true,
		interval: 360
	};

	let q = '';

	$: {
		q = Object.entries(controls).reduce((s, c) => {
			s += `${c[0]}=${c[1]}&`;
			return s;
		}, '');
	}
</script>

<div>
	<Control bind:controls />
	<div class="mt-5 text-center text-5xl">↓</div>
	<div class="mt-5">
		<a
			href="/site?{q}"
			class="border w-full h-[300px] text-3xl font-bold bg-blue-600 text-white flex items-center justify-center rounded"
			>サイトを構築する</a
		>
	</div>
	<!-- <div class="flex gap-4 mt-20">
		<a href="/site1" class="border p-16 shadow-lg roudned text-center">
			<div class="text-xl font-bold">サイト１</div>
			<div>ニュースサイト編</div>
		</a>
		<a href="/" class="border p-16 shadow-lg roudned bg-gray-300">ページ２作成中</a>
		<a href="/" class="border p-16 shadow-lg roudned bg-gray-300">ページ３作成中</a>
	</div> -->

	<div class="border p-8 bg-gray-50 mt-20">
		<div>スクレイピングの練習をしたいけど、サイトに迷惑をかけたくない人のための練習サイト</div>
		<div>特に制限はありません。お問い合わせや要望はgithubからお願いします。</div>
	</div>
</div>
