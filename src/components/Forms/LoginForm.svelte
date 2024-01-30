<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$components/Buttons/Button.svelte';
	import PasswordInput from '$components/formFields/PasswordInput.svelte';
	import TextInput from '$components/formFields/TextInput.svelte';
	let email = '';
	let password = '';
</script>

<div class="flex items-center justify-center min-h-screen">
	<div class="w-full max-w-lg px-10 py-8 mx-auto card shadow-2xl">
		<form use:enhance method="POST" action="?/login">
			<h3 class="h3">Login</h3>
			<div class="inner-form-container">
				<TextInput minLength={6} label="Username" name="username" bind:userSelected={email} />
				<PasswordInput
					label="Password"
					name="password"
					bind:userSelected={password}
					minLength={8}
				/>
				<div class="mt-4">
					<Button element="button" variant="filled-primary">Login</Button>
				</div>
				<div class="flex gap-3 pt-3 items-center">
					<p>Don't have an account?</p>
					<Button href="/register" element="a" variant="ghost">Sign Up</Button>
				</div>
			</div>
		</form>
	</div>
</div>
