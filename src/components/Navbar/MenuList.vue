<template>
	<ul class="menu-list">
		<li><a href="#">Features</a></li>
		<li><a href="#">Pricing</a></li>
		<li><a href="#">Resources</a></li>
	</ul>
</template>
<style scoped>
	.menu-list {
		display: flex;
		justify-content: flex-start;
		gap: 4rem;
	}
	a {
		color: var(--grayishViolet);
		font-weight: 700;
	}

	a:hover {
		color: var(--darkViolet);
	}

	@media (max-width: 768px) {
		.menu-list {
			position: relative;
			top: 100px;
			flex-direction: column;
			gap: 3rem;
		}
	}
</style>
