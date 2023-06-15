<template>
	<section class="icons">
		<a
			href="https://github.com/fdmarti"
			target="_blank"
			aria-label="github page"
		>
			<i class="bx bx-md bxl-github"></i>
		</a>
		<a
			href="https://www.linkedin.com/in/fededmartinez/"
			target="_blank"
			aria-label="linkedin page"
		>
			<i class="bx bx-md bxl-linkedin-square"></i>
		</a>
		<a
			href="https://www.instagram.com/fedeeemartinez/"
			target="_blank"
			aria-label="instagram page"
		>
			<i class="bx bx-md bxl-instagram"></i>
		</a>
	</section>
</template>
<style scoped>
	.icons {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	a {
		width: 50px;
		height: 50px;
		color: var(--gray);
		display: flex;
	}

	a:hover {
		color: var(--Cyan);
	}

	svg {
		width: 35px;
	}

	@media (max-width: 992px) {
		.icons {
			gap: 1.5rem;
			margin: 20px auto 0;
		}

		a {
			margin: 0;
		}
	}
</style>
