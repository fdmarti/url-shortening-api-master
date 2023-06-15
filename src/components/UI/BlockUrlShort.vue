<template>
	<div class="block-link">
		<span class="original-link">{{ shortLink.original_link }}</span>
		<section class="short">
			<span class="short-link">{{ shortLink.full_short_link }}</span>

			<button v-if="textCopied" class="copied-text">Copied!</button>
			<button v-else @click="handleClickCopyLink">Copy</button>
		</section>
	</div>
</template>
<script setup>
	import { ref } from '@vue/reactivity';
	const { shortLink } = defineProps(['shortLink']);
	const textCopied = ref(false);

	const handleClickCopyLink = () => {
		navigator.clipboard.writeText(shortLink.full_short_link);
		textCopied.value = true;

		setTimeout(() => {
			textCopied.value = false;
		}, 3000);
	};
</script>

<style scoped>
	.block-link {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--lightGray2);
		padding: 20px;
		margin: 20px 0;
		border-radius: 10px;
		box-shadow: 0 15px 15px -15px var(--gray);
	}

	.original-link {
		font-size: 20px;
	}

	.short {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.short-link {
		color: var(--veryDarkBlue);
	}

	.copied-text {
		background-color: var(--veryDarkViolet);
	}

	@media (max-width: 768px) {
		.block-link {
			flex-direction: column;
			gap: 2rem;
		}

		.short {
			border-top: 1px solid var(--veryDarkBlue);
			padding-top: 20px;
			flex-direction: column;
			justify-content: center;
			width: 100%;
			align-items: initial;
			text-align: center;
		}
	}
</style>
