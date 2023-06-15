<template>
	<section class="sing-in">
		<ButtonComponent text="Login" :transparent="true" />
		<ButtonComponent text="Sign Up" :rounded="true" />
	</section>
</template>
<script setup>
	import ButtonComponent from '../UI/ButtonComponent.vue';
</script>
<style scoped>
	.sing-in {
		position: relative;
		display: flex;
		gap: 1rem;
	}

	@media (max-width: 768px) {
		.sing-in {
			max-width: 160px;
			top: 150px;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
