<template>
	<div>
		<h1 v-if="!pokemon">cargando...</h1>
		<div v-else>
			<h1>Quién es este Pokemon</h1>
			<PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
			<PokemonOption :pokemons="pokemonArr" @selection="checkAnswer" />
			<template  v-if="showAnswer">
				<h2 class="fade-in">{{ msj }}</h2>
				<button @click="newGame">Nuevo Juego</button>
			</template>
		</div>
	</div>
</template>

<script>
import PokemonOption from "@/components/PokemonOption.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
	name: "PokemonPage",
	components: {
		PokemonOption,
		PokemonPicture,
	},
	data() {
		return {
			pokemonArr: [],
			pokemon: null,
			showPokemon: false,
			showAnswer: false,
			msj: "",
		};
	},
	methods: {
		async mixPokemonArr() {
			this.pokemonArr = await getPokemonOptions();
			const randomNum = Math.floor(Math.random() * 4);
			this.pokemon = this.pokemonArr[randomNum];
		},
		checkAnswer(pokeId) {
			this.showPokemon = true;
			this.showAnswer = true;
			if (pokeId === this.pokemon.id) {
				this.msj = `Correcto! es ${this.pokemon.name}`;
			} else {
				this.msj = `Ups! era ${this.pokemon.name}`;
			}
		},
		newGame() {
			this.showPokemon = false
			this.showAnswer = false
			this.pokemonArr = []
			this.pokemon = null
			this.mixPokemonArr()
		}
	},
	// life cycle
	mounted() {
		this.mixPokemonArr();
	},
};
</script>

<style>
</style>