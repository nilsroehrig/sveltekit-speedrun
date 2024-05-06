<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { flip } from 'svelte/animate';
	import { slide } from 'svelte/transition';

	export let data;
</script>

<form method="post" use:enhance>
	{#each data.posts as post (post.id)}
		<article transition:slide animate:flip>
			<header>
				{#if $page.data.session}
					<a href="/posts/{post.id}">{post.title}</a>
					<button class="outline secondary small" type="submit" name="id" value={post.id}
						>Löschen</button
					>
				{:else}
					{post.title}
				{/if}
			</header>
			<div>{post.content}</div>
			<footer>
				Erstellt von {post.author_name} am {post.created_at.toLocaleDateString()}. Zuletzt
				bearbeitet am {post.modified_at.toLocaleDateString()}.
			</footer>
		</article>
	{/each}
</form>

<style>
	header {
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	footer {
		font-size: small;
	}

	.small {
		font-size: small;
		padding: calc(var(--pico-spacing) / 2);
		flex: 0;
		margin-bottom: 0;
	}
</style>
