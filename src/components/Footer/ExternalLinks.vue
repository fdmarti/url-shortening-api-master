<template>
	<section class="external-links">
		<div class="main-links">
			<a href="#">Features</a>
			<a href="#">Resources</a>
			<a href="#">Company</a>
		</div>
		<div class="second-links">
			<a href="#">Link Shortening</a>
			<a href="#">Blog</a>
			<a href="#">About</a>

			<a href="#">Branded Links</a>
			<a href="#">Developers</a>
			<a href="#">Our Team</a>

			<a href="#">Analytics</a>
			<a href="#">Support</a>
			<a href="#">Careers</a>

			<a href="#">Contact</a>
		</div>
	</section>
</template>
<style scoped>
	.external-links {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.main-links {
		font-weight: 700;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 3rem;
	}

	.main-links a {
		color: var(--lightGray);
	}

	.second-links {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 3rem;
		row-gap: 1rem;
	}

	.second-links a {
		color: var(--gray);
	}

	a:hover {
		color: var(--Cyan);
	}

	@media (max-width: 991px) {
		.main-links {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}

		.second-links {
			display: flex;
			flex-direction: column;
			text-align: center;
		}
	}
</style>
