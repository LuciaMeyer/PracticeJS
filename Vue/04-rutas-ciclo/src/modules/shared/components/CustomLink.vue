<template>
	<div>
		<a v-if="isExternanLink" target="_blank" :href="link.to" class="normal">
			{{ link.name }}
		</a>

		<router-link v-else :to="route" v-slot="{ isActive }">
			<a :class="isActive ? 'is-active' : 'normal'">
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
		route() {
			return this.link.id === undefined
				? { name: this.link.to }
				: { name: this.link.to, params: { id: this.link.id } }
		}
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