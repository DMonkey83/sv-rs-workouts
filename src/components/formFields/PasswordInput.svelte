<script lang="ts">
	export let label: string;
	export let name: string;
	export let minLength: number;
	export let userSelected: string;

	const uniqueID = Math.floor(Math.random() * 100).toString();
</script>

<label for={name} class="label mt-3">
	<h4 class="h4">{label}</h4>
	<div class="mt-2">
		<input
			required
			bind:value={userSelected}
			type="password"
			minlength={minLength}
			{name}
			id={uniqueID}
			autocomplete="off"
			class="input"
		/>
	</div>
</label>

<style src="./FormComponents.scss"></style>
