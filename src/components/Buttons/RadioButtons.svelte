<script lang="ts">
	import type { FormOptions } from '$lib/types/formOptions.types';

	export let options: FormOptions[] = [];
	export let legend: string;
	export let userSelected = options[0].value;
	export let radioLabel: string;

	const uniqueID = Math.floor(Math.random() * 100);

	const slugify = (str = '') => str.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
</script>

<div
	role="radiogroup"
	id={`group-${uniqueID}`}
	aria-labelledby={`label-${uniqueID}`}
	class="space-y-2 mt-4"
>
	<div class="label" id={`label-${uniqueID}`}>
		<h4 class="h4">{legend}</h4>
	</div>
	{#each options as { value, label }}
		<label class="flex items-center space-x-2" for={slugify(label)}>
			<input
				name={radioLabel}
				class="radio"
				type="radio"
				id={slugify(label)}
				bind:group={userSelected}
				{value}
			/>
			<p class="button-label">{label}</p>
		</label>
	{/each}
</div>
