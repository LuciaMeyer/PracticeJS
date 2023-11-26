<template>
    <div v-if="pokemon">
        <h2 >Pokemon: {{ pokemon.name }}</h2>
        <h3>Pokemon: n° <span>{{ id }}</span></h3>
        <img :src="pokemon.sprites.front_default" alt="not found">
        <!-- PUEDO RECUPERARL EL ID DENTRO DEL TEMPLATE
        <h1>Pokemon: n° <span>{{ $route.params.id }}</span></h1> -->
    </div>
    <span v-else>Buscando...</span>
</template> 

<script>
export default {
    props: {
        // MEJOR FORMA, PEDIR QUE EL ID LLEGUE POR PROPS DESDE LA RUTA, PARA OBLIGAR AL LOS QUIE USEN EL COMPONENTE QUE ENVIEN EL ID (VER ROTER)
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            pokemon: null
        }
    },
    created() {
        // PUEDO RECUPERAR EL ID CUANDO EL COMPONENTE ES CREADO, LO EXTRAIGO DE $route. ES MUY UTIL PARA LOS QUERY PARAMETERS PERO ES PREFERIBLE HACERLO DESDE LAS PROPS
        // console.log(this.$route)
        // console.log(Number(this.$route.params.id))
        // const { id } = this.$route.params
        // this.id = id
        this.getPokemon()
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                    .then(res => res.json())
                console.log(pokemon)
                this.pokemon = pokemon               
            } catch (err) {
                this.$router.push('/')
            }
        }
    },
    watch: {
        id() {
           this.getPokemon()
        }
    }
}
</script>