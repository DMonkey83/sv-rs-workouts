<script lang="ts">
	import { enhance } from '$app/forms';
	import TextInputField from '$components/formFields/TextInput.svelte';
	import PasswordInputField from '$components/formFields/PasswordInput.svelte';
	import RadioButtons from '$components/Buttons/RadioButtons.svelte';
	import EmailInputField from '$components/formFields/EmailInput.svelte';
	import Button from '$components/Buttons/Button.svelte';
	import NumberInputField from '$components/formFields/NumberInput.svelte';
	import type { GenderEnum, HeightUnitEnum, RoleCodeEnum, WeightUnitEnum } from '$types/enums';
	import { genderOptions } from '$utils/formOptions/genderOptions';
	import { WeightUnitOptions } from '$utils/formOptions/weightUnitOptions';
	import { HeightUnitOptions } from '$utils/formOptions/heightUnitOptinos';
	import { roleCodeOptions } from '$utils/formOptions/roleCodeOptions';
	let username = '';
	let email = '';
	let firstName: string = '';
	let lastName: string = '';
	let age: number;
	let gender: GenderEnum | '' = '';
	let height: number;
	let weight: number;
	let weightUnit: WeightUnitEnum | '' = '';
	let heightUnit: HeightUnitEnum | '' = '';
	let password_hash = '';
	let role_code: RoleCodeEnum | '' = '';
</script>

<div class="flex items-center justify-center min-h-screen">
	<div class="w-full max-w-lg px-10 py-8 mx-auto card shadow-2xl">
		<form class="form" use:enhance method="POST" action="?/register">
			<h3 class="h3">Register</h3>
			<div class="inner-form-container">
				<TextInputField
					minLength={6}
					name="username"
					label="Username"
					bind:userSelected={username}
				/>
				<EmailInputField bind:userSelected={email} />
				<TextInputField
					minLength={6}
					name="first_name"
					label="First Name"
					bind:userSelected={firstName}
				/>
				<TextInputField
					minLength={6}
					name="last_name"
					label="Last Name"
					bind:userSelected={lastName}
				/>
				<NumberInputField min={1} max={99} name="age" label="Age" bind:userSelected={age} />
				<RadioButtons
					options={genderOptions}
					bind:userSelected={gender}
					legend="Gender"
					radioLabel="gender"
				/>
				<RadioButtons
					options={roleCodeOptions}
					bind:userSelected={role_code}
					legend="role_code"
					radioLabel="Role"
				/>
				<RadioButtons
					options={WeightUnitOptions}
					bind:userSelected={weightUnit}
					legend="Preferred Weight Unit"
					radioLabel="preferred_weight_unit"
				/>
				<RadioButtons
					options={HeightUnitOptions}
					bind:userSelected={heightUnit}
					legend="Preferred Height Unit"
					radioLabel="preferred_height_unit"
				/>
				<NumberInputField
					min={1}
					max={300}
					name="height"
					label="Height"
					bind:userSelected={height}
				/>
				<NumberInputField
					min={1}
					max={300}
					name="weight"
					label="Weight"
					bind:userSelected={weight}
				/>
				<PasswordInputField
					name="password"
					label="Password"
					bind:userSelected={password_hash}
					minLength={8}
				/>
				<div class="flex gap-3 pt-3 items-center">
					<Button element="button">Register</Button>
				</div>
				<div class="form-bottom-container">
					<p>Already have an account?</p>
					<a href="/login" class="form-link">Login</a>
				</div>
			</div>
		</form>
	</div>
</div>
