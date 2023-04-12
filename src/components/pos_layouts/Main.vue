<template>
	<div class="relative font-quicksand text-gray-800">
		<Navbar />
		<AlertList :alerts="alerts" />
		<main class="">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import useAlert from '@/composables/useAlert.js';
import AlertList from '@/components/AlertList.vue';

const { alerts } = useAlert();

onBeforeMount(async () => {
	// Load Ecommerce Store Data e.g Banner, Hero, Bg's
});
</script>

<style></style>
