<script lang="ts">
	export let form, data;
	let post = {
		id: data.post?.id ?? null,
		title: data.post?.title ?? null,
		content: data.post?.content ?? null
	};
</script>

{#if form}
	<div class="error">
		<p>{form.message}:</p>
		{#each Object.entries(form.errors) as [field, errors]}
			<dl>
				<dt>{field}</dt>
				{#each errors as error}
					<dd>{error}</dd>
				{/each}
			</dl>
		{/each}
	</div>
{/if}

<form action="?/upsert" method="post">
	<input type="hidden" name="id" value={post.id} disabled={!post.id} />
	<label for="title">
		Titel:
		<input type="text" id="title" name="title" bind:value={post.title} />
	</label>
	<label for="content">
		Inhalt:
		<textarea id="content" name="content" bind:value={post.content}></textarea>
	</label>
	<button type="submit">
		{post.id ? 'Aktualisieren' : 'Erstellen'}
	</button>
</form>

<style>
	.error {
		border: solid thin var(--pico-color-red-500);
		padding: var(--pico-spacing);
		margin-bottom: var(--pico-spacing);
		border-radius: var(--pico-border-radius);
	}

	.error * {
		color: var(--pico-color-red-500);
	}
</style>
