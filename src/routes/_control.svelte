<script>
	export let controls = {
		postCount: 0,
		title: '',
		dateFormat: '',
		timeFormat: '',
		isImage: false,
		interval: 0,
		isAgo: false,
		countPerPage: 0,
		robots: false
	};
</script>

<div class="grid grid-cols-control gap-2">
	<div class="group">
		<h2>記事</h2>
		<label for="">
			<span>タイトル</span>
			<input type="text" class="w-full" bind:value={controls.title} />
		</label>
		<label for="">
			<span>画像あり</span>
			<div><input type="checkbox" bind:checked={controls.isImage} /></div>
		</label>
		<label for="">
			<span>記事の時間間隔</span>
			<div>
				<input type="number" class="w-20" bind:value={controls.interval} />
				分
			</div>
		</label>
	</div>
	<div class="group">
		<h2>一覧</h2>
		<label for="">
			<span>記事数</span>
			<input type="number" class="w-20" bind:value={controls.postCount} />
		</label>
		<label for="">
			<span>ページング</span>
			<input type="number" class="w-20" bind:value={controls.countPerPage} />
			<div class="text-xs text-gray-400">0の場合ページングしない</div>
		</label>
	</div>
	<div class="group">
		<h2>更新日</h2>
		<label for="">
			<span>日時形式</span>
			<div>
				<input type="text" class="w-32" bind:value={controls.dateFormat} placeholder="YYYY-MM-DD" />
				<input type="text" class="w-20" bind:value={controls.timeFormat} placeholder="HH:mm" />
			</div>
		</label>

		<label for="">
			<span>X時間前表記にする</span>
			<div><input type="checkbox" bind:checked={controls.isAgo} /></div>
			<div class="text-xs text-gray-400">ONの場合、24時間以内であれば表記が"X時間前"になる</div>
		</label>
	</div>
	<div class="group">
		<h2>クラス付与（追加予定）</h2>
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
	<div class="group">
		<h2>ヘッダー</h2>
		<label for="">
			<span>robots.txt 不許可</span>
			<div><input type="checkbox" bind:checked={controls.robots} /></div>
		</label>
		<label for="">
			<span>og系付与（予定）</span>
		</label>
	</div>
</div>

<style>
	h2 {
		@apply text-xl font-bold;
	}
	label {
		@apply flex flex-col w-[250px] mb-2;
	}
	label span {
		margin-right: 8px;

		display: inline-block;
		@apply text-xs;
	}

	.group {
		@apply flex flex-col gap-2 p-6 rounded bg-blue-100 shadow;
	}
</style>
