<template>
	<div
		class="fixed left-0 top-6 z-40 flex h-0 w-full justify-center bg-blue-200"
	>
		<!-- <transition-group name="list" tag="div" class="alert-list" appear> -->
		<div class="flex flex-col items-center">
			<Alert
				v-for="alert in alerts"
				:key="alert.id"
				:status="alert.status"
				:message="alert.message"
				:customStatus="alert.customStatus"
				:title="alert.title"
				:id="alert.id"
			/>
		</div>

		<!-- </transition-group> -->
	</div>
</template>

<script setup>
import Alert from './Alert.vue';

const props = defineProps({
	alerts: Array,
});
</script>

<!-- <style>
.alert-list {
	position: fixed;
	top: 1rem;
	right: 1rem;
	/* left: 50%; */
	width: 26%;
	/* transform: translateX(-50%); */
	z-index: 999999;
}
</style> -->
