<script lang="ts">
	export let label: string;
	export let name: string;
	export let min: number;
	export let max: number;
	export let userSelected: number;

	const uniqueID = Math.floor(Math.random() * 100).toString();
</script>

<label for={name} class="label">
	<h4 class="h4">{label}</h4>
	<div class="mt-2">
		<input
			required
			bind:value={userSelected}
			type="number"
			{min}
			{max}
			{name}
			id={uniqueID}
			autocomplete="off"
			class="input"
		/>
	</div>
</label>
