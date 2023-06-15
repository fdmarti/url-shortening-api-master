<template>
	<div class="advance-statics">
		<h2>Advance Statistics</h2>
		<p>
			Track how your links are performing across the web with our advanced
			statistics dashboard.
		</p>
		<section class="cards-advance">
			<Card
				title="Brand Recognition"
				text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
				imageUrl="icon-brand-recognition.svg"
				positionTop="0"
			/>
			<Card
				title="Detailed Records"
				text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
				imageUrl="icon-detailed-records.svg"
				positionTop="50"
			/>
			<Card
				title="Fully Customizable"
				text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
				imageUrl="icon-fully-customizable.svg"
				positionTop="100"
			/>
		</section>
	</div>
</template>
<script setup>
	import Card from './UI/Card.vue';
</script>
<style scoped>
	.advance-statics {
		background-color: var(--lightGray);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 250px 30px;
	}

	.advance-statics h2 {
		font-size: 42px;
		color: var(--veryDarkBlue);
	}

	.advance-statics p {
		color: var(--gray);
		font-size: 20px;
		max-width: 800px;
		text-align: center;
	}

	.cards-advance {
		display: flex;
		justify-content: center;
		gap: 4rem;
		margin-top: 150px;
	}

	.card:last-child::after {
		display: none;
	}

	@media (max-width: 991px) {
		.advance-statics h2 {
			text-align: center;
			margin-bottom: 20px;
		}
		.cards-advance {
			flex-direction: column;
			margin-top: 100px;
		}
	}
</style>
