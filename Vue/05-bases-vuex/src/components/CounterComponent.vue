<template>
  <div>
    <h1>Counter</h1>
    <h2>Estado desde template: {{ $store.state.counter.count }}</h2>
    <h2>Estado desde propiedad computada: {{ CountComputed  }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt" :disabled="loading">Random</button>

    <h1>Estado usando mapState</h1>
    <h2>mapState: {{ count }}</h2>
    <h2>lastMutation: {{ lastMutation }}</h2>
    <h2>lastMutation: {{ loading }}</h2>

    <h1>Getters desde template {{ $store.getters['counter/squareCount'] }}</h1>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

  computed: {
    CountComputed() {
      return this.$store.state.counter.count
    },
    ...mapState('counter', ['count', 'lastMutation', 'loading'])
    // ...mapState({
    //   otherName: state => state.count,
    //   lastMutation: state => state.lastMutation
    // })
  },
  methods: {
    increment() {
      this.$store.commit('counter/increment')
    },
    incrementBy() {
      this.$store.commit('counter/incrementBy', 5)
    },
    // incrementRandomInt() {
    //   this.$store.dispatch('incrementRandomInt')
    // }
    // ...mapActions('counter', ['incrementRandomInt'])
    ...mapActions('counter', {
      randomInt: 'incrementRandomInt'
    })

  }


}
</script>

