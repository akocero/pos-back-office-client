<template>
	<div>
		<AlertList :alerts="alerts" />
		<RouterView />
	</div>
</template>

<script setup>
import AlertList from '../AlertList.vue';
import useAlert from '@/composables/useAlert.js';

const { alerts } = useAlert();
</script>
