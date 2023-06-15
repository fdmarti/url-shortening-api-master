<template>
	<footer>
		<section class="logo-footer">
			<img src="/images/logo-white.svg" alt="footer shrotly logo white" />
		</section>
		<ExternalLinks />
		<SocialMedia />
	</footer>
</template>
<script setup>
	import SocialMedia from './Footer/SocialMedia.vue';
	import ExternalLinks from './Footer/ExternalLinks.vue';
</script>
<style setup>
	footer {
		height: 200px;
		padding: 50px 30px;
		background-color: var(--veryDarkViolet);
		display: flex;
		justify-content: space-around;
	}

	@media (max-width: 991px) {
		footer {
			flex-direction: column;
			align-items: center;
			height: auto;
			padding: 70px 30px;
			gap: 3rem;
		}
	}
</style>
