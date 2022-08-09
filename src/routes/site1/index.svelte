<script>
	import moment from 'moment';

	const companybase = (i) => {
		return `abc${i}.com`;
	};

	const titleBase = (i, name) => {
		return `${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}`;
	};

	let currentDate = moment();
	let now = moment();

	const allnews = [];
	const name = '全ての記事';
	for (let i = 0; i <= 10; i++) {
		let data = {};
		data.index = i;
		data.company = `all${i}.com`;
		data.title = `${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}${name}ダミー${i}`;
		currentDate.add(Math.round(Math.random() * 40) * -1, 'm');
		data.dateiso = currentDate.toISOString();
		data.date = '';

		let diff = now.diff(currentDate, 'm');
		if (diff < 60) {
			data.date = diff + '分前';
		} else if (diff < 60 * 24) {
			data.date = Math.round(diff / 60) + '時間前';
		} else {
			data.date = Math.round(diff / (60 * 24)) + '日前';
		}

		allnews.push(data);
	}
</script>

<svelte:head>
	<title>ページ１</title>
	<meta name="description" content="A todo list app" />
</svelte:head>

<div class="flex justify-between">
	<div>全ての記事</div>
	<div class="flex ">
		<div>並べ替え</div>
		<div class="ml-4">共有</div>
	</div>
</div>

<section class="mt-8 top-news-section">
	<h2 class="text-2xl font-bold">トップニュース</h2>
	<hr class="mt-2 " />
	<div class="flex flex-wrap gap-4 mt-4 list">
		{#each [1, 2, 3, 4, 5] as i}
			<a href={'/site1/details/' + companybase(i)} class="w-full md:w-[49%] item flex ">
				<img src={'/sample/' + i + '.jpg'} alt="" class="w-[100px] h-[100px] object-cover" />
				<div class="ml-2">
					<div>{companybase(i)}</div>
					<div>{titleBase(i, 'トップ')}</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<section class="mt-8 all-news-seciton">
	<h2 class="text-2xl font-bold">全ての記事</h2>
	<hr class="mt-2 " />
	<div class="flex flex-wrap gap-4 mt-4 items">
		{#each allnews as news}
			<a href={'/site1/details/' + companybase(news.index)} class="w-full md:w-[49%] item">
				<div>{news.company}</div>
				<div>{news.title}</div>
				<time datetime={news.dateiso}>{news.date}</time>
			</a>
		{/each}
	</div>
</section>
