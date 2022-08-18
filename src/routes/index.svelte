<script>
	import Control from './_control.svelte';
	import { query } from '$lib/store/query';

	const defaultControls = {
		postCount: 20,
		title: 'これは{no}の記事です',
		dateFormat: 'YYYY-MM-DD',
		isTime: true,
		timeFormat: '',
		isImage: true,
		interval: 360,
		isAgo: true,
		countPerPage: 10,
		page: 1,
		robots: true
	};

	let controls = Object.assign({}, defaultControls);

	let applyLastQuery = false;

	if (Object.keys($query).length !== 0) {
		applyLastQuery = true;
		Object.assign(controls, $query);
	}

	let q = '';

	$: {
		q = Object.entries(controls).reduce((s, c) => {
			s += `${c[0]}=${c[1]}&`;
			return s;
		}, '');
	}

	const build = () => {
		query.change(controls);
	};

	const reset = () => {
		controls = Object.assign({}, defaultControls);
		query.reset();
		applyLastQuery = false;
	};
</script>

<div>
	{#if applyLastQuery}
		<div class="flex items-center justify-between bg-whit p-4 border mb-4 bg-white rounded">
			<div>最後の条件で復元しました</div>
			<button on:click={reset} class=" bg-yellow-500 text-white rounded px-4 py-1">クリア</button>
		</div>
	{/if}
	<Control bind:controls />
	<div class="mt-5 text-center text-5xl">↓</div>
	<div class="mt-5">
		<a
			href="/site?{q}"
			on:click={build}
			class="border w-full h-[300px] text-3xl font-bold bg-blue-600 text-white flex items-center justify-center rounded"
			>サイトを構築する</a
		>
	</div>

	<div class="description mt-20">
		<h2>使い方</h2>
		<div>１．条件を指定する（そのままでもOK）</div>
		<div>２．「サイトを構築する」ボタンをクリック</div>
	</div>

	<div class="description">
		<h2>このサイトの目的</h2>
		<div>スクレイピングの練習をしたいけど、サイトに迷惑をかけたくない人のための練習場です。</div>
		<div>特に制限はありません。お問い合わせや要望はgithubからお願いします。</div>
	</div>

	<div class="description">
		<h2>その他仕様</h2>
		<div>・タイトル:{'{no}'}は番号に置換</div>
		<div>・日付と時間形式:https://momentjs.com/</div>
	</div>
</div>

<style>
	h2 {
		@apply text-xl font-bold mb-2;
	}

	div.description {
		@apply border p-8 bg-white mt-6 rounded;
	}
</style>
