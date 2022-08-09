<script>
	export let controls = {
		postCount: 0,
		title: '',
		dateFormat: 'YYYY-MM-DD',
		isTime: true,
		timeFormat: 'HH:mm',
		isImage: true,
		interval: 360
	};
</script>

<div class="flex flex-wrap gap-4">
	<div class="flex flex-col gap-2">
		<label for="">
			<span>記事数</span>
			<input type="text" class="w-20" bind:value={controls.postCount} />
		</label>
		<label for="">
			<span>タイトル</span>
			<input type="text" class="max-w-60" bind:value={controls.title} />
		</label>
		<label for="">
			<span>画像あり</span>
			<input type="checkbox" bind:checked={controls.isImage} />
		</label>
	</div>
	<div class="flex flex-col gap-2">
		<label for="">
			<span>更新日の日付形式</span>
			<input type="text" class="w-40" bind:value={controls.dateFormat} />
		</label>
		<label for="">
			<span>更新日の時間形式</span>
			<div class="flex">
				<input type="checkbox" class="mr-4" bind:checked={controls.isTime} />
				<div>
					<input
						type="text"
						class="w-20"
						bind:value={controls.timeFormat}
						disabled={!controls.isTime}
					/>
					分
				</div>
			</div>
		</label>
		<label for="">
			<span>記事の時間間隔</span>
			<input type="text" class="w-40" bind:value={controls.interval} />
		</label>
	</div>
</div>

<style>
	label {
		display: flex;
		align-items: center;
	}
	label span {
		margin-right: 8px;
		font-weight: bold;
		width: 150px;
		display: inline-block;
	}
</style>
