<template>
	<div class="card" :style="{ top: positionTop + 'px' }">
		<div class="images-card">
			<img :src="'/images/' + imageUrl" :alt="'icon ' + title" />
		</div>
		<h4>{{ title }}</h4>
		<p>{{ text }}</p>
	</div>
</template>
<script setup>
	const { title, text, imageUrl, positionTop } = defineProps([
		'title',
		'text',
		'imageUrl',
		'positionTop',
	]);
</script>
<style scoped>
	.card {
		background-color: var(--white);
		max-width: 300px;
		position: relative;
		padding: 40px;
	}

	.images-card {
		background-color: var(--darkViolet);
		width: 40px;
		height: 40px;
		border-radius: 50%;
		padding: 20px;
		position: absolute;

		top: -40px;
	}

	h4 {
		margin: 20px 0;
		font-size: 20px;
		color: var(--veryDarkBlue);
	}

	p {
		color: var(--gray);
	}

	.card::after {
		content: '';
		background-color: var(--Cyan);
		width: 70px;
		height: 10px;
		position: absolute;
		right: -70px;
		top: 50%;
	}

	@media (max-width: 991px) {
		.images-card{
			left:40%;
			top: -50px;
		}

		.card::after{
			bottom: 0;
			top: 100%;
			right: 48%;
			width: 10px;
			height: 300px;
		}
	}
</style>
