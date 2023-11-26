<template>
	<div class="pokemon-container">
		<img v-if="!showPokemon"
			:src="imgSrc"
			alt="pokemon"
			class="hidden" />
		<img v-else
			class="fade-in"
			:src="imgSrc"
			alt="pokemon" />
	</div>
</template>

<script>
export default {
	props: {
		pokemonId: {
			type: Number,
			required: true,
		},
		showPokemon: {
			type: Boolean,
			required: true,
			default: false,
		}
	},
	computed: {
		imgSrc() {
			return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
		},
	},
};
</script>

<style scoped>
.pokemon-container {
	height: 250px;
}
img {
	height: 200px;
	/* position: absolute;
	right: 43vw; */
	user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
}
.hidden {
	filter: brightness(0);
}
</style>