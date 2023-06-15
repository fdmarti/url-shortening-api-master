<template>
	<div class="boost-links">
		<h2>Boost your links today</h2>
		<ButtonComponent text="Get Started" :rounded="true" />
	</div>
</template>
<script setup>
	import ButtonComponent from './UI/ButtonComponent.vue';
</script>
<style scoped>
	.boost-links {
		padding: 90px 30px;
		background: url('/images/bg-boost-desktop.svg') no-repeat center/cover,
			var(--darkViolet);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	h2 {
		color: var(--lightGray);
		font-size: 36px;
	}

	button {
		font-size: 21px;
	}
</style>
