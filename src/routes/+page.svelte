<script lang="ts">
	let { data }: { data: PageData } = $props();

	console.log(data);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data.posts as post}
	<article>
		<h2>{post.title}</h2>
	</article>
{/each}
<img src="/images/demo-image.jpg@w=100+fm=png.png" alt="demo" width="100" height="100" />
