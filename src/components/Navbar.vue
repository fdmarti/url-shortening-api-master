<template>
	<nav class="flex">
		<a href="/" class="logo">
			<img src="/images/logo.svg" alt="shortly image logo" />
		</a>
		<section class="flex menu">
			<MenuList />
			<div class="divider"></div>
			<ButtonsSection />
		</section>
		<section class="toggler-menu" @click="toggleMenu">
			<i class="bx bx-lg bx-menu" v-if="!menuState"></i>
			<i class="bx bx-lg bx-arrow-from-left" v-else></i>
		</section>
	</nav>
</template>
<script setup>
	import { ref } from '@vue/reactivity';
	import ButtonsSection from './Navbar/ButtonsSection.vue';
	import MenuList from './Navbar/MenuList.vue';

	const menuState = ref(false);

	const toggleMenu = () => {
		menuState.value = !menuState.value;
		const menuSection = document.querySelector('.menu');
		menuSection.classList.toggle('show');
	};
</script>
<style scoped>
	nav {
		padding: 30px;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}

	.logo {
		position: relative;
	}

	.menu {
		justify-content: space-between;
		width: 100%;
	}

	.bx-lg {
		color: var(--gray);
		display: none;
	}

	.toggler-menu {
		z-index: 3;
	}

	@media (max-width: 768px) {
		.bx-lg {
			display: block;
		}

		.logo {
			top: 10px;
		}

		.menu {
			display: none;
			position: absolute;
			right: 0;
			top: 0;
			background-color: var(--darkViolet);
			height: 100vh;
			z-index: 2;
		}

		.show {
			display: block;
		}

		.divider {
			position: relative;
			top: 120px;
			left: 30px;
			width: 90%;
			height: 1px;
			background-color: var(--gray);
		}
	}
</style>
