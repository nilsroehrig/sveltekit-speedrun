<script lang="ts">
	import { page } from '$app/stores';
	import { SignIn, SignOut } from '@auth/sveltekit/components';
	import '@picocss/pico';
	import '@picocss/pico/css/pico.colors.css';
</script>

<div class="wrapper">
	<header>
		<nav class="container">
			<ul>
				<li><strong>SvelteKit SpeedRun</strong></li>
			</ul>
			<ul>
				<li><a href="/">Startseite</a></li>
				<li>
					{#if $page.data.session}
						<SignOut options={{ redirect: true, redirectTo: '/' }} />
					{:else}
						<SignIn />
					{/if}
				</li>
			</ul>
		</nav>
	</header>

	<main class="container">
		<slot></slot>
	</main>

	<footer>
		<p class="container">&copy; 2024 SvelteKit SpeedRun</p>
	</footer>
</div>

<style>
	.wrapper {
		min-height: 100vh;
		display: grid;
		grid-template-rows: min-content 1fr min-content;
		gap: calc(var(--pico-spacing) * 2);
	}

	header {
		border-bottom: solid thin var(--pico-muted-border-color);
	}

	footer {
		padding-top: var(--pico-spacing);
		border-top: solid thin var(--pico-muted-border-color);
		text-align: center;
	}

	:global(.signInButton button),
	:global(.signOutButton button) {
		margin-bottom: 0;
	}
</style>
