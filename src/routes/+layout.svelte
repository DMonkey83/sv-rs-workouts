<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Workouts</strong>
			</svelte:fragment>
			<div class="flex gap-3">
				<a class="btn btn-sm variant-ghost-surface" href="/workouts" rel="noreferrer"> Workouts </a>
				<a class="btn btn-sm variant-ghost-surface" href="/exercises" rel="noreferrer">
					Exercises
				</a>
				<a class="btn btn-sm variant-ghost-surface" href="/plans" rel="noreferrer"> Plans </a>
			</div>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="/login" rel="noreferrer"> Login </a>
				<a class="btn btn-sm variant-ghost-surface" href="/register" rel="noreferrer"> Register </a>
				<a class="btn btn-sm variant-ghost-surface" href="/account" rel="noreferrer"> Account </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
