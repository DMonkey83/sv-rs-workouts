<script lang="ts">
	export let label: string;
	export let name: string;
	export let userSelected: string;
	export let minLength: number;

	const uniqueID = Math.floor(Math.random() * 100).toString();
</script>

<label for={name} class="label mt-3">
	<h4 class="h4">{label}</h4>
	<input
		required
		bind:value={userSelected}
		minlength={minLength}
		type="text"
		{name}
		id={uniqueID}
		autocomplete="name"
		class="input"
		placeholder={label}
	/>
</label>
