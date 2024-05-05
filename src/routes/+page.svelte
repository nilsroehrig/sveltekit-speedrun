<script lang="ts">
	export let data;
</script>

{#each data.posts as post}
	<article>
		<header>{post.title}</header>
		<div>{post.content}</div>
		<footer>
			Erstellt von {post.author_name} am {post.created_at.toLocaleDateString()}. Zuletzt bearbeitet
			am {post.modified_at.toLocaleDateString()}.
		</footer>
	</article>
{/each}

<style>
	header {
		font-weight: bold;
	}

	footer {
		font-size: small;
	}
</style>
