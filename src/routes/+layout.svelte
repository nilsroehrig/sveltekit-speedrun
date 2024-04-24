<script lang="ts">
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
			</ul>
		</nav>
	</header>
	
	<main class="container">
		<slot></slot>
	</main>
	
	<footer >
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
</style>