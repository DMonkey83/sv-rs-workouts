<script lang="ts">
	export let userSelected: string;

	const uniqueID = Math.floor(Math.random() * 100).toString();
</script>

<label for="email" class="label mt-3">
	<h4 class="h4">Email</h4>
	<div class="inner-input-container">
		<input
			required
			bind:value={userSelected}
			type="email"
			name="email"
			id={uniqueID}
			autocomplete="email"
			class="input"
			placeholder="Email@email.com"
		/>
	</div>
</label>
