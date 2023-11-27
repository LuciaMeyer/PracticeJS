<template>
	<div>
		<a v-if="isExternanLink" target="_blank" :href="link.to" class="normal">
			{{ link.name }}
		</a>

		<router-link v-else :to="link.to" v-slot="{ href, isActive }">
			<a :href="href" :class="isActive ? 'is-active' : 'normal'">
				{{ link.name }}
			</a>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		link: {
			type: Object,
			required: true,
		},
	},
	computed: {
		isExternanLink() {
			return this.link.to.startsWith("http");
		},
	},
};
</script>

<style scoped>
.is-active {
	color: #42b986;
}

.normal {
	color: grey;
}
</style>