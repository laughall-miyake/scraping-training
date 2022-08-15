<script>
	export let controls = {
		postCount: 0,
		title: '',
		dateFormat: 'YYYY-MM-DD',
		isTime: true,
		timeFormat: 'HH:mm',
		isImage: true,
		interval: 360,
		isAgo: true
	};
</script>

<div class="grid grid-cols-control gap-2">
	<div class="group">
		<h2>一般</h2>
		<label for="">
			<span>記事数</span>
			<input type="number" class="w-20" bind:value={controls.postCount} />
		</label>
		<label for="">
			<span>タイトル</span>
			<input type="text" class="w-full" bind:value={controls.title} />
		</label>
		<label for="">
			<span>画像あり</span>
			<div><input type="checkbox" bind:checked={controls.isImage} /></div>
		</label>
		<label for="">
			<span>ページング（開発予定）</span>
		</label>
	</div>
	<div class="group">
		<h2>更新日</h2>
		<label for="">
			<span>日時形式</span>
			<div>
				<input type="text" class="w-32" bind:value={controls.dateFormat} />
				<input
					type="text"
					class="w-20"
					bind:value={controls.timeFormat}
					disabled={!controls.isTime}
				/>
			</div>
		</label>
		<label for="">
			<span>記事の時間間隔</span>
			<div>
				<input type="number" class="w-20" bind:value={controls.interval} />
				分
			</div>
		</label>
		<label for="">
			<span>X時間前表記にする</span>
			<div><input type="checkbox" bind:checked={controls.isAgo} /></div>
		</label>
	</div>
	<div class="group">
		<h2>クラス付与（開発予定）</h2>
		<label for="">
			<span>articleタグに付与</span>
		</label>
		<label for="">
			<span>aタグに付与</span>
		</label>
		<label for="">
			<span>imgタグに付与</span>
		</label>
	</div>
</div>

<style>
	h2 {
		@apply font-bold mb-2;
	}
	label {
		@apply flex flex-col w-[250px];
	}
	label span {
		margin-right: 8px;
		display: inline-block;
		@apply text-sm;
	}

	.group {
		@apply flex flex-col gap-2 p-6 rounded bg-blue-100 shadow;
	}
</style>
