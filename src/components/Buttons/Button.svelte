<script lang="ts">
	import type { VariantType } from '$types/variants.types';

	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Element = $$Generic<'button' | 'a'>;

	interface ButtonComponentElements {
		button: HTMLButtonAttributes;
		a: HTMLAnchorAttributes;
	}

	type $$Props = ButtonComponentElements[Element] & {
		element: Element;
		variant?: VariantType;
		className?: string;
	};

	export let element: Element;
	export let variant: VariantType = 'filled';

	export let className: string = '';
	export let role: 'button' | 'link';

	let node: HTMLAnchorElement | HTMLButtonElement;

	export function focus() {
		node.focus();
	}
</script>

<svelte:element
	this={element}
	bind:this={node}
	class="btn variant-{variant} {className}"
	{role}
	on:click
	{...$$restProps}
>
	<slot />
</svelte:element>
