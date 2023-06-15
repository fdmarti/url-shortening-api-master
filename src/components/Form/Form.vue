<template>
	<div class="form-block">
		<section class="form">
			<section class="input-group">
				<input
					type="text"
					placeholder="Shorten a link here..."
					v-model="formState.url"
					@keyup.enter="handleClickShort"
					:class="formState.error && 'error'"
				/>
				<span v-if="formState.error" class="error-msg">Please add a link</span>
				<ButtonComponent
					text="Shorten It!"
					@click="handleClickShort"
					:isLoading="formState.isLoading"
				/>
			</section>
		</section>
		<section class="list-short-url" v-if="listOfShortUrl.length > 0">
			<BlockUrlShort
				v-for="(shortLink, index) in listOfShortUrl"
				:key="index"
				:shortLink="shortLink"
			/>
		</section>
	</div>
</template>
<script setup>
	import './Form.css';
	import { BlockUrlShort, ButtonComponent } from '../UI';
	import useFetch from '../../hooks/useFetch';

	const { formState, handleClickShort, listOfShortUrl, isLoading } = useFetch();
</script>
