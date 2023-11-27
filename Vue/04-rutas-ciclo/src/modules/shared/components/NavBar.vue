<template>
	<div>
		<!-- <router-link to="/">Pokemon List</router-link>
    <router-link to="/id">Pokemon por id</router-link>
    <router-link to="/about">About</router-link> -->
		<CustomLink v-for="link in links" :key="link.to" :link="link" />
	</div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
	data() {
		return {
			links: [
				{ to: "/home", name: "Pokemons" },
				{ to: "/pokemonid/50", name: "Por Id" },
				{ to: "/about", name: "About" },
				{ to: "http://google.com", name: "Google" },
			],
		};
	},

	components: {
		CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
	},
};
</script>

<style scoped>
div {
	padding: 0 30px;
}

div a {
	font-weight: bold;
	color: #2c3e50;
	margin: 0 10px;
}

/* a.router-link-exact-active{
color: #42b986;
} */
</style>