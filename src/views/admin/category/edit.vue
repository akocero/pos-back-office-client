<template>
	<div class="main-container">
		<ActionNavbar
			title="Unsave Changes"
			@handleSubmit="handleSubmit"
			:discard_route_name="indexRoute"
			:isLoading="store.isLoading"
		/>
		<TitleBar :back_route_name="indexRoute" title="Update Category" />
		<Form :store="store" />
	</div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useCategoryStore } from '@/stores/category';
import useAlert from '../../composables/useAlert';
import { useRoute, useRouter } from 'vue-router';
import Form from './Form.vue';

const router = useRouter();
const route = useRoute();
const { pushAlert } = useAlert();
const store = useCategoryStore();
const indexRoute = 'warehouse.categories';

onBeforeMount(async () => {
	await store.find(route.params.id);
});

const handleSubmit = async () => {
	store.error = null;
	const res = await store.update(store.item);

	if (store.error) {
		pushAlert('error', store.error.message);
		return;
	}
	console.log({ res });
	pushAlert('info', `Category <${res.name}> is updated!`);
	router.push({
		name: 'warehouse.categories',
	});
};
</script>

<style></style>
