<template>
	<button
		:class="[transparent && 'transparent', rounded && 'rounded']"
		:disabled="isLoading && 'disabled'"
	>
		<span v-if="isLoading">
			<i class="bx bx-md bxs-circle-three-quarter bx-spin bx-rotate-90"></i>
		</span>
		<span v-else>
			{{ text }}
		</span>
	</button>
</template>
<script setup>
	const { text, rounded, transparent, isLoading } = defineProps([
		'text',
		'rounded',
		'transparent',
		'isLoading',
	]);
</script>
<style scoped>
	.transparent {
		background-color: transparent;
		color: var(--grayishViolet);
	}

	.bxs-circle-three-quarter {
		color: var(--veryDarkBlue);
	}

	.rounded {
		border-radius: 30px;
	}
</style>
