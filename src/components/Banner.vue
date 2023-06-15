<template>
	<div class="banner">
		<section class="title">
			<h1>More than just shorter links</h1>
			<p>
				Build your brand’s recognition and get detailed insights on how your
				links are performing.
			</p>
			<ButtonComponent text="Get Started" :rounded="true" />
		</section>
		<section class="banner-image">
			<img
				src="/images/illustration-working.svg"
				alt="banner image illustration working shortly"
			/>
		</section>
	</div>
</template>
<script setup>
	import ButtonComponent from './UI/ButtonComponent.vue';
</script>
<style scoped>
	.banner {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 30px;
	}

	.title {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: flex-start;
	}

	.title h1 {
		max-width: 800px;
		font-size: 72px;
		line-height: 70px;
		color: var(--veryDarkBlue);
	}

	.title p {
		max-width: 600px;
		font-size: 25px;
		color: var(--gray);
	}

	.banner-image {
		flex: 0 1 50%;
	}

	button {
		font-size: 25px;
	}

	@media (max-width: 991px) {
		.banner {
			flex-direction: column;
			text-align: center;
			margin-top: 50px;
			gap: 2rem;
		}

		.title {
			align-items: center;
		}
	}
</style>
